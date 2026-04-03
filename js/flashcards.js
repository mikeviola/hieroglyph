// ── FLASHCARDS MODULE ──────────────────────────────────────────────────────────

const FlashcardsModule = (() => {
  let deck    = [];
  let index   = 0;
  let flipped = false;
  let filter  = 'all';

  function buildDeck() {
    const all = [
      ...HIEROGLYPHS.uniliterals,
      ...HIEROGLYPHS.biliterals,
      ...HIEROGLYPHS.determinatives,
    ];
    if (filter === 'all')           deck = all;
    else if (filter === 'uniliteral')  deck = HIEROGLYPHS.uniliterals;
    else if (filter === 'biliteral')   deck = HIEROGLYPHS.biliterals;
    else if (filter === 'determinative') deck = HIEROGLYPHS.determinatives;
    index   = 0;
    flipped = false;
  }

  function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    index   = 0;
    flipped = false;
    renderCard();
  }

  function renderCard() {
    if (!deck.length) return;
    const card = deck[index];
    const el   = document.getElementById('fc-card');
    if (!el) return;

    // Reset flip state
    flipped = false;
    el.classList.remove('flipped');

    document.getElementById('fc-front-glyph').textContent = card.unicode;
    document.getElementById('fc-back-translit').textContent = card.transliteration;
    document.getElementById('fc-back-pronun').textContent   = card.pronunciation;
    document.getElementById('fc-back-name').textContent     = card.name;
    document.getElementById('fc-back-desc').textContent     = card.description;
    document.getElementById('fc-back-mnemonic').textContent = card.mnemonic || '';

    // Counter
    document.getElementById('fc-counter').textContent =
      `${index + 1} / ${deck.length}`;

    // Progress bar
    const pct = ((index + 1) / deck.length) * 100;
    document.getElementById('fc-progress-bar').style.width = pct + '%';

    // Nav buttons
    document.getElementById('fc-prev').disabled = index === 0;
    document.getElementById('fc-next').disabled = index === deck.length - 1;
  }

  function flip() {
    flipped = !flipped;
    const el = document.getElementById('fc-card');
    if (el) el.classList.toggle('flipped', flipped);
  }

  function prev() {
    if (index > 0) { index--; renderCard(); }
  }

  function next() {
    if (index < deck.length - 1) { index++; renderCard(); }
  }

  function setFilter(f) {
    filter = f;
    // Update UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === f);
    });
    buildDeck();
    renderCard();
  }

  function init() {
    buildDeck();
    renderCard();
  }

  return { init, flip, prev, next, shuffle, setFilter };
})();
