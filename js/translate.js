// ── TRANSLITERATION MODULE ─────────────────────────────────────────────────────

const TranslateModule = (() => {
  // Current sequence of selected signs
  let sequence = [];

  // Build a flat lookup: unicode → sign data
  function buildLookup() {
    const lookup = {};
    const all = [
      ...HIEROGLYPHS.uniliterals,
      ...HIEROGLYPHS.biliterals,
      ...HIEROGLYPHS.determinatives,
    ];
    all.forEach(sign => { lookup[sign.unicode] = sign; });
    return lookup;
  }

  const lookup = buildLookup();

  function addSign(unicode) {
    const sign = lookup[unicode];
    if (!sign) return;
    sequence.push(sign);
    updateDisplays();
  }

  function deleteLast() {
    if (!sequence.length) return;
    sequence.pop();
    updateDisplays();
  }

  function clearAll() {
    sequence = [];
    updateDisplays();
  }

  function updateDisplays() {
    const glyphDisplay  = document.getElementById('tr-glyph-display');
    const transitDisplay = document.getElementById('tr-translit-display');
    const info          = document.getElementById('tr-info-panel');

    if (!glyphDisplay) return;

    // Hieroglyphs display
    glyphDisplay.textContent = sequence.map(s => s.unicode).join('\u200B'); // zero-width space between

    // Transliteration display
    transitDisplay.textContent = sequence
      .filter(s => s.transliteration !== '–')
      .map(s => s.transliteration)
      .join('-');

    // Info panel – show last sign details
    if (sequence.length === 0) {
      info.innerHTML = `
        <div style="text-align:center;color:var(--text-dim);padding:32px 16px;font-family:'Crimson Pro',serif;font-size:1.05rem;font-style:italic">
          Click hieroglyphs below to compose a sequence
        </div>`;
      return;
    }

    const last = sequence[sequence.length - 1];
    info.innerHTML = `
      <div style="padding:20px 24px;border-top:1px solid var(--dark-border)">
        <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);margin-bottom:12px">
          Last sign added
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          <div style="font-family:'Noto Sans Egyptian Hieroglyphs',serif;font-size:3.5rem;color:var(--gold-light);min-width:56px">
            ${last.unicode}
          </div>
          <div>
            <div style="font-family:'Cinzel',serif;font-size:1.3rem;color:var(--gold);margin-bottom:4px">
              ${last.transliteration}
            </div>
            <div style="font-weight:600;color:var(--text-main);margin-bottom:4px">${last.name}</div>
            <div style="font-size:0.82rem;color:var(--text-muted);font-style:italic">${last.pronunciation}</div>
            <div style="margin-top:6px">
              <span class="badge badge-${last.category === 'uniliteral' ? 'gold' : last.category === 'biliteral' ? 'lapis' : 'sand'}">${last.category}</span>
              <span style="font-size:0.72rem;color:var(--text-dim);margin-left:8px">Gardiner ${last.gardiner}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderKeyboard() {
    const container = document.getElementById('tr-keyboard');
    if (!container) return;

    const sections = [
      { label: 'Uniliteral Signs (Alphabet)', signs: HIEROGLYPHS.uniliterals },
      { label: 'Common Biliteral Signs',       signs: HIEROGLYPHS.biliterals },
      { label: 'Determinatives',               signs: HIEROGLYPHS.determinatives },
    ];

    container.innerHTML = sections.map(section => `
      <div style="margin-bottom:24px">
        <div class="keyboard-section-label">${section.label}</div>
        <div class="keyboard-grid">
          ${section.signs.map(sign => `
            <button class="key-btn" onclick="TranslateModule.addSign('${sign.unicode}')"
                    title="${sign.name} — ${sign.transliteration}">
              <span class="key-glyph">${sign.unicode}</span>
              <span class="key-label">${sign.transliteration}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function copyTranslit() {
    const text = sequence
      .filter(s => s.transliteration !== '–')
      .map(s => s.transliteration)
      .join('-');
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('tr-copy-btn');
      if (btn) {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy Transliteration'; }, 1500);
      }
    });
  }

  function init() {
    renderKeyboard();
    updateDisplays();
  }

  return { init, addSign, deleteLast, clearAll, copyTranslit };
})();
