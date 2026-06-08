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
      if (c === '-' || c === ':' || c === '*' || c === '(' || c === ')') {
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
  //   line  := group ( '-' group )*
  //   group := vert
  //   vert  := horiz ( ':' horiz )*
  //   horiz := factor ( '*' factor )*
  //   factor:= SIGN | '(' vert ')'
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
    function line() {
      const groups = []; let g = vert();
      if (g) groups.push(g);
      while (peek() && peek().t === '-') { eat('-'); const q = vert(); if (q) groups.push(q); }
      return groups;
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
      const total = node.kids.reduce((s, k) => s + k._w, 0) || 1;
      let cx = x;
      node.kids.forEach(k => {
        const kw = w * (k._w / total);
        // vertically center the child within the row's height
        const kh = h * (k._h / node._h);
        const ky = y + (h - kh) / 2;
        place(k, cx, ky, kw, kh, out, fill);
        cx += kw;
      });
      return;
    }
    if (node.type === 'stack') {
      const total = node.kids.reduce((s, k) => s + k._h, 0) || 1;
      let cy = y;
      node.kids.forEach(k => {
        const kh = h * (k._h / total);
        // horizontally center the child within the stack's width
        const kw = w * (k._w / node._w);
        const kx = x + (w - kw) / 2;
        place(k, kx, cy, kw, kh, out, fill);
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

    const groups = parse(tokenize(mdc || ''));
    if (!groups.length) return '';

    // Measure each quadrat and scale it to fit a Q×Q box (preserve aspect).
    const quads = groups.map(g => {
      const m = measure(g);
      const scale = Q / Math.max(m.w, m.h);
      return { node: g, w: m.w * scale, h: m.h * scale };
    });

    const totalW = quads.reduce((s, q) => s + q.w, 0) + gap * (quads.length - 1) + pad * 2;
    const totalH = Q + pad * 2;

    // Place every sign.
    const signs = [];
    let cx = pad;
    quads.forEach(q => {
      const qy = pad + (Q - q.h) / 2;   // vertically center the quadrat on the line
      place(q.node, cx, qy, q.w, q.h, signs, fill);
      cx += q.w + gap;
    });

    // Emit SVG.
    const parts = [];
    parts.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW.toFixed(1)} ${totalH.toFixed(1)}" `
      + `width="${totalW.toFixed(1)}" height="${totalH.toFixed(1)}" class="hiero-svg" role="img">`);
    signs.forEach(s => {
      const glyph = (typeof signToGlyph === 'function') ? signToGlyph(s.code) : null;
      const fs = Math.min(s.w, s.h) * fill;
      const ccx = s.x + s.w / 2;
      const ccy = s.y + s.h / 2;
      if (glyph) {
        parts.push(`<text x="${ccx.toFixed(1)}" y="${ccy.toFixed(1)}" font-size="${fs.toFixed(1)}" `
          + `font-family="${font}" fill="${color}" text-anchor="middle" `
          + `dominant-baseline="central">${esc(glyph)}</text>`);
      } else {
        // visible placeholder for an unmapped code (never silent)
        parts.push(`<rect x="${(s.x+s.w*0.1).toFixed(1)}" y="${(s.y+s.h*0.1).toFixed(1)}" `
          + `width="${(s.w*0.8).toFixed(1)}" height="${(s.h*0.8).toFixed(1)}" `
          + `fill="none" stroke="${missing}" stroke-width="1" rx="2"/>`);
        parts.push(`<text x="${ccx.toFixed(1)}" y="${ccy.toFixed(1)}" font-size="${(fs*0.3).toFixed(1)}" `
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

  return { toSVG, into, _parse: parse, _tokenize: tokenize };
})();

if (typeof module !== 'undefined') module.exports = HieroRender;
