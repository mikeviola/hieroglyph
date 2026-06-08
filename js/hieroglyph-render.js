// ====================================================================
// HIEROGLYPH RENDERER — Manuel de Codage (MdC) → SVG quadrats
// --------------------------------------------------------------------
// Parses a subset of Manuel de Codage and lays out signs the way Egyptian
// scribes did: in quadrats (rectangular cells) where signs are stacked,
// grouped side-by-side, and nested. We render the Unicode glyphs (full
// Gardiner coverage via gardiner-unicode.js) but compute the LAYOUT here.
//
//   Operators, loosest to tightest binding:
//     -   place next quadrat (along the writing line)
//     :   stack vertically (over / under)
//     *   place side-by-side (within a vertical cell)
//     ( ) group explicitly to override precedence
//
//   Examples:
//     "D21-Q3-D36-X1"   four quadrats in a row  (iry-pʿt)
//     "F35:I9:D21"      nfr over f over r        (a classic stack)
//     "R4:X1*Q3"        ḥtp over (t beside p)    (offering group)
//
// API:  HieroRender.toSVG(mdc, opts) -> SVG string
//       HieroRender.into(el, mdc, opts)
//       opts: { size, color, gap, fill, padding }
// ====================================================================

const HieroRender = (() => {

  // ── Tokenizer ──────────────────────────────────────────────────────
  function tokenize(src) {
    const toks = [];
    let i = 0;
    while (i < src.length) {
      const c = src[i];
      if (c === ' ' || c === '\t' || c === '\n') { i++; continue; }
      if (c === '-' || c === ':' || c === '*' || c === '(' || c === ')'
          || c === '<' || c === '>') {
        toks.push({ t: c }); i++; continue;
      }
      // a sign token: letters + digits (+ optional trailing variant letters)
      const m = /^[A-Za-z]+[0-9]*[A-Za-z]*/.exec(src.slice(i));
      if (m) { toks.push({ t: 'sign', v: m[0] }); i += m[0].length; continue; }
      i++; // skip anything unrecognised
    }
    return toks;
  }

  // ── Recursive-descent parser ───────────────────────────────────────
  //   line     := item ( '-' item )*
  //   item     := cartouche | vert
  //   cartouche:= '<' line '>'                  (royal name in a šnw ring)
  //   vert     := horiz ( ':' horiz )*
  //   horiz    := factor ( '*' factor )*
  //   factor   := SIGN | '(' vert ')'
  function parse(toks) {
    let p = 0;
    const peek = () => toks[p];
    const eat  = (t) => { const x = toks[p]; if (x && x.t === t) { p++; return x; } return null; };

    function factor() {
      if (eat('(')) { const v = vert(); eat(')'); return v; }
      const s = eat('sign');
      if (s) return { type: 'sign', code: s.v };
      return null;
    }
    function horiz() {
      const kids = []; let f = factor();
      if (f) kids.push(f);
      while (peek() && peek().t === '*') { eat('*'); const g = factor(); if (g) kids.push(g); }
      return kids.length === 1 ? kids[0] : { type: 'row', kids };
    }
    function vert() {
      const kids = []; let h = horiz();
      if (h) kids.push(h);
      while (peek() && peek().t === ':') { eat(':'); const g = horiz(); if (g) kids.push(g); }
      return kids.length === 1 ? kids[0] : { type: 'stack', kids };
    }
    function item() {
      if (eat('<')) { const inner = line(); eat('>'); return { type: 'cartouche', kids: inner }; }
      return vert();
    }
    function line() {
      const items = []; let g = item();
      if (g) items.push(g);
      while (peek() && peek().t === '-') { eat('-'); const q = item(); if (q) items.push(q); }
      return items;
    }
    return line();
  }

  // ── Measure: compute unit size {w,h} of a node (1 sign = 1×1) ───────
  function measure(node) {
    if (!node) return { w: 1, h: 1 };
    if (node.type === 'sign') { node._w = 1; node._h = 1; return { w: 1, h: 1 }; }
    if (node.type === 'row') {
      let w = 0, h = 0;
      node.kids.forEach(k => { const m = measure(k); w += m.w; h = Math.max(h, m.h); });
      node._w = w; node._h = h; return { w, h };
    }
    if (node.type === 'stack') {
      let w = 0, h = 0;
      node.kids.forEach(k => { const m = measure(k); h += m.h; w = Math.max(w, m.w); });
      node._w = w; node._h = h; return { w, h };
    }
    return { w: 1, h: 1 };
  }

  // ── Place: assign px boxes, collect sign placements ─────────────────
  function place(node, x, y, w, h, out, fill) {
    if (!node) return;
    if (node.type === 'sign') {
      out.push({ code: node.code, x, y, w, h });
      return;
    }
    if (node.type === 'row') {
      // Side-by-side: each child spans the FULL height of the group, widths
      // split by their unit width. A tall sign thus stands full-height next
      // to a stacked group (e.g. M23 beside X1:N35 in nswt).
      const total = node.kids.reduce((s, k) => s + k._w, 0) || 1;
      let cx = x;
      node.kids.forEach(k => {
        const kw = w * (k._w / total);
        place(k, cx, y, kw, h, out, fill);
        cx += kw;
      });
      return;
    }
    if (node.type === 'stack') {
      // Over/under: each child spans the FULL width of the group, heights
      // split by their unit height.
      const total = node.kids.reduce((s, k) => s + k._h, 0) || 1;
      let cy = y;
      node.kids.forEach(k => {
        const kh = h * (k._h / total);
        place(k, x, cy, w, kh, out, fill);
        cy += kh;
      });
      return;
    }
  }

  // ── escape for XML ──────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/[<>&"]/g, c => ({ '<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;' }[c]));
  }

  // ── Main: MdC → SVG string ──────────────────────────────────────────
  function toSVG(mdc, opts = {}) {
    const Q       = opts.size    || 48;     // target quadrat body size (px)
    const gap     = opts.gap     != null ? opts.gap : Q * 0.12; // gap between quadrats
    const fill    = opts.fill    || 1.28;   // glyph fill factor (Noto hieroglyphs carry heavy bearing)
    const pad     = opts.padding != null ? opts.padding : Q * 0.1;
    const color   = opts.color   || '#C9A027';
    const missing = opts.missingColor || '#8B2020';
    const font    = "'Noto Sans Egyptian Hieroglyphs','Noto Sans',serif";

    const items = parse(tokenize(mdc || ''));
    if (!items.length) return '';

    const cartPadH = Q * 0.16;   // horizontal breathing room inside a cartouche
    const cartPadV = Q * 0.12;   // vertical breathing room inside a cartouche
    const cartTie  = Q * 0.18;   // width reserved for the tie/knot bar
    const cartStroke = Math.max(1.3, Q * 0.05);

    const signs  = [];   // { code, x, y, w, h }
    const shapes = [];   // { kind:'cartouche', x, y, w, h, stroke }

    // Lay out one normal quadrat node; returns its rendered width.
    function layoutQuadrat(node, x, topY) {
      const m = measure(node);
      const scale = Q / Math.max(m.w, m.h);
      const w = m.w * scale, h = m.h * scale;
      const qy = topY + (Q - h) / 2;        // center the quadrat on the line
      place(node, x, qy, w, h, signs, fill);
      return w;
    }

    // Lay out a sequence of items (quadrats and/or cartouches) left to right.
    function layoutItems(list, startX, topY) {
      let cx = startX;
      list.forEach((it, i) => {
        if (i > 0) cx += gap;
        if (it.type === 'cartouche') {
          const innerStart = cx + cartTie + cartPadH;
          const innerW = layoutItems(it.kids, innerStart, topY);
          const ringX = cx + cartTie;
          shapes.push({
            kind: 'cartouche',
            x: ringX, y: topY - cartPadV,
            w: innerW + cartPadH * 2, h: Q + cartPadV * 2,
            tieX: cx, stroke: cartStroke
          });
          cx = ringX + innerW + cartPadH * 2;
        } else {
          cx += layoutQuadrat(it, cx, topY);
        }
      });
      return cx - startX;
    }

    const topY    = pad + cartPadV;          // leave room for cartouche overshoot
    const totalW  = layoutItems(items, pad, topY) + pad * 2;
    const totalH  = Q + (pad + cartPadV) * 2;

    // Emit SVG.
    const parts = [];
    parts.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW.toFixed(1)} ${totalH.toFixed(1)}" `
      + `width="${totalW.toFixed(1)}" height="${totalH.toFixed(1)}" class="hiero-svg" role="img">`);

    // Cartouche rings (drawn behind the glyphs).
    shapes.forEach(s => {
      if (s.kind === 'cartouche') {
        const rx = s.h / 2;
        parts.push(`<rect x="${s.x.toFixed(1)}" y="${s.y.toFixed(1)}" `
          + `width="${s.w.toFixed(1)}" height="${s.h.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${rx.toFixed(1)}" `
          + `fill="none" stroke="${color}" stroke-width="${s.stroke.toFixed(1)}"/>`);
        // the tie/knot: a short bar across the start of the ring
        const tieCx = s.tieX + cartTie * 0.55;
        parts.push(`<line x1="${tieCx.toFixed(1)}" y1="${(s.y + s.h * 0.16).toFixed(1)}" `
          + `x2="${tieCx.toFixed(1)}" y2="${(s.y + s.h * 0.84).toFixed(1)}" `
          + `stroke="${color}" stroke-width="${s.stroke.toFixed(1)}" stroke-linecap="round"/>`);
        parts.push(`<line x1="${tieCx.toFixed(1)}" y1="${(s.y + s.h / 2).toFixed(1)}" `
          + `x2="${s.x.toFixed(1)}" y2="${(s.y + s.h / 2).toFixed(1)}" `
          + `stroke="${color}" stroke-width="${s.stroke.toFixed(1)}"/>`);
      }
    });

    // Glyphs (sized by cell height so tall signs fill the quadrat).
    signs.forEach(s => {
      const glyph = (typeof signToGlyph === 'function') ? signToGlyph(s.code) : null;
      const fs = s.h * fill;
      const ccx = s.x + s.w / 2;
      const ccy = s.y + s.h / 2;
      if (glyph) {
        parts.push(`<text x="${ccx.toFixed(1)}" y="${ccy.toFixed(1)}" font-size="${fs.toFixed(1)}" `
          + `font-family="${font}" fill="${color}" text-anchor="middle" `
          + `dominant-baseline="central">${esc(glyph)}</text>`);
      } else {
        parts.push(`<rect x="${(s.x+s.w*0.1).toFixed(1)}" y="${(s.y+s.h*0.1).toFixed(1)}" `
          + `width="${(s.w*0.8).toFixed(1)}" height="${(s.h*0.8).toFixed(1)}" `
          + `fill="none" stroke="${missing}" stroke-width="1" rx="2"/>`);
        parts.push(`<text x="${ccx.toFixed(1)}" y="${ccy.toFixed(1)}" font-size="${(Math.min(s.w,s.h)*0.3).toFixed(1)}" `
          + `font-family="monospace" fill="${missing}" text-anchor="middle" `
          + `dominant-baseline="central">${esc(s.code)}</text>`);
      }
    });
    parts.push('</svg>');
    return parts.join('');
  }

  function into(el, mdc, opts) {
    if (!el) return;
    el.innerHTML = toSVG(mdc, opts);
  }

  // ── Reverse map: existing Unicode glyph string → linear MdC ─────────
  // Lets any word render through the engine with no data migration. Words
  // that carry an explicit `mdc` grouping override it; everything else
  // falls back to this flat (one-quadrat-per-sign) reading.
  let _INV = null;
  function unicodeToMdc(str) {
    if (!_INV) {
      _INV = {};
      if (typeof GARDINER !== 'undefined') {
        for (const code in GARDINER) {
          const ch = GARDINER[code];
          if (!(ch in _INV)) _INV[ch] = code;   // first (canonical) code wins
        }
      }
    }
    return Array.from(str || '')
      .map(ch => _INV[ch] || null)
      .filter(Boolean)
      .join('-');
  }

  // Render a text word object: prefers its `mdc` grouping, else reverse-maps.
  function word(w, opts) {
    const mdc = (w && w.mdc) ? w.mdc : unicodeToMdc(w && w.hieroglyphs);
    return toSVG(mdc, opts);
  }

  return { toSVG, into, word, unicodeToMdc, _parse: parse, _tokenize: tokenize };
})();

if (typeof module !== 'undefined') module.exports = HieroRender;
