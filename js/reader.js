// ── READER MODULE ──────────────────────────────────────────────────────────────
// Side-by-side: hieroglyphic text (left) + English translation (right)
// Hover  → tooltip with transliteration, translation, POS
// Click  → detail panel with full grammar breakdown

const ReaderModule = (() => {
  let activeText  = 'sinuhe';
  let activeWord  = null;
  let tooltip     = null;

  // ── Render text list / selector ──────────────────────────────────────────────
  function renderTextList() {
    const container = document.getElementById('reader-text-list');
    if (!container) return;
    container.innerHTML = Object.values(TEXTS).map(text => `
      <div class="reader-text-card" onclick="ReaderModule.openText('${text.id}')">
        <div class="rtc-glyph">${text.titleHiero}</div>
        <div class="rtc-info">
          <div class="rtc-title">${text.title}</div>
          <div class="rtc-sub">${text.period}</div>
        </div>
        <div class="rtc-badge">
          <span class="badge badge-gold">${text.genre}</span>
        </div>
      </div>
    `).join('');
  }

  // ── Open a specific text ─────────────────────────────────────────────────────
  function openText(textId) {
    const text = TEXTS[textId];
    if (!text) return;
    activeText = textId;

    document.getElementById('reader-list-wrapper').classList.add('hidden');
    document.getElementById('reader-view').classList.remove('hidden');

    renderReader(text);
  }

  function closeText() {
    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('reader-list-wrapper').classList.remove('hidden');
    hideDetail();
    activeWord = null;
  }

  // ── Main reader render ────────────────────────────────────────────────────────
  function renderReader(text) {
    const view = document.getElementById('reader-view');

    view.innerHTML = `
      <!-- Back + title -->
      <div class="reader-topbar">
        <button class="back-btn" onclick="ReaderModule.closeText()">← All Texts</button>
        <div class="reader-title-block">
          <span class="reader-hiero-title">${text.titleHiero}</span>
          <div>
            <h3 class="reader-title">${text.title}</h3>
            <div class="reader-meta">${text.source} · ${text.period}</div>
          </div>
        </div>
      </div>

      <!-- Intro -->
      <div class="reader-intro">${text.intro}</div>

      <!-- Sections -->
      ${text.sections.map(section => renderSection(section)).join('')}

      <!-- Detail panel (hidden until word clicked) -->
      <div id="word-detail-panel" class="word-detail-panel hidden"></div>
    `;

    // Create tooltip element once
    initTooltip();
  }

  function renderSection(section) {
    return `
      <div class="reader-section">
        <div class="reader-section-header">
          <span class="reader-section-label">${section.label}</span>
          <span class="reader-section-lines">${section.referenceLines}</span>
        </div>
        ${section.note ? `<div class="reader-section-note">${section.note}</div>` : ''}

        <div class="reader-columns">
          <!-- Left: hieroglyphs -->
          <div class="reader-left">
            <div class="reader-col-label">Hieroglyphs</div>
            <div class="hiero-flow" data-section="${section.id}">
              ${section.words.map(word => renderWord(word, section.id)).join('')}
            </div>
          </div>

          <!-- Right: English -->
          <div class="reader-right">
            <div class="reader-col-label">Translation</div>
            <div class="en-text" id="en-${section.id}">${section.english}</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderWord(word, sectionId) {
    return `
      <span class="hiero-word"
            data-id="${word.id}"
            data-section="${sectionId}"
            onmouseenter="ReaderModule.showTooltip(event, '${word.id}', '${sectionId}')"
            onmouseleave="ReaderModule.hideTooltip()"
            onclick="ReaderModule.showDetail('${word.id}', '${sectionId}')">
        <span class="hiero-glyph">${word.hieroglyphs}</span>
        <span class="hiero-translit">${word.transliteration}</span>
      </span>
    `;
  }

  // ── Tooltip ──────────────────────────────────────────────────────────────────
  function initTooltip() {
    if (document.getElementById('hiero-tooltip')) return;
    tooltip = document.createElement('div');
    tooltip.id = 'hiero-tooltip';
    tooltip.className = 'hiero-tooltip hidden';
    document.body.appendChild(tooltip);
  }

  function showTooltip(event, wordId, sectionId) {
    const word = findWord(wordId, sectionId);
    if (!word || !tooltip) return;

    tooltip.innerHTML = `
      <div class="tt-translit">${word.transliteration}</div>
      <div class="tt-translation">${word.translation}</div>
      <div class="tt-pos">${word.pos}</div>
      <div class="tt-hint">Click for full grammar ↓</div>
    `;
    tooltip.classList.remove('hidden');
    positionTooltip(event);

    // Highlight the English section
    highlightSection(sectionId, true);
    // Highlight this word
    document.querySelectorAll('.hiero-word').forEach(el => el.classList.remove('hovered'));
    const wordEl = document.querySelector(`.hiero-word[data-id="${wordId}"]`);
    if (wordEl) wordEl.classList.add('hovered');
  }

  function hideTooltip() {
    if (tooltip) tooltip.classList.add('hidden');
    document.querySelectorAll('.hiero-word').forEach(el => el.classList.remove('hovered'));
    // Only un-highlight if no word is clicked/active
    if (!activeWord) {
      document.querySelectorAll('.en-text').forEach(el => el.classList.remove('highlighted'));
    }
  }

  function positionTooltip(event) {
    if (!tooltip) return;
    const margin = 12;
    const tw = tooltip.offsetWidth  || 220;
    const th = tooltip.offsetHeight || 100;
    let x = event.clientX + margin;
    let y = event.clientY - th / 2;

    if (x + tw > window.innerWidth  - margin) x = event.clientX - tw - margin;
    if (y < margin)                            y = margin;
    if (y + th > window.innerHeight - margin)  y = window.innerHeight - th - margin;

    tooltip.style.left = x + 'px';
    tooltip.style.top  = y + 'px';
  }

  document.addEventListener('mousemove', (e) => {
    if (tooltip && !tooltip.classList.contains('hidden')) {
      positionTooltip(e);
    }
  });

  // ── Detail panel ─────────────────────────────────────────────────────────────
  function showDetail(wordId, sectionId) {
    const word = findWord(wordId, sectionId);
    if (!word) return;
    activeWord = wordId;

    const panel = document.getElementById('word-detail-panel');
    if (!panel) return;

    panel.classList.remove('hidden');
    panel.innerHTML = `
      <div class="detail-header">
        <div class="detail-glyph">${word.hieroglyphs}</div>
        <div class="detail-header-text">
          <div class="detail-translit">${word.transliteration}</div>
          <div class="detail-translation">${word.translation}</div>
          <span class="badge badge-gold">${word.pos}</span>
        </div>
        <button class="detail-close" onclick="ReaderModule.hideDetail()">✕</button>
      </div>
      <div class="detail-body">
        <div class="detail-grid">
          <div class="detail-item">
            <div class="detail-item-label">Grammatical Form</div>
            <div class="detail-item-value">${word.grammar.form}</div>
          </div>
          <div class="detail-item">
            <div class="detail-item-label">Breakdown</div>
            <div class="detail-item-value">${word.grammar.breakdown}</div>
          </div>
          <div class="detail-item">
            <div class="detail-item-label">Inflection</div>
            <div class="detail-item-value">${word.grammar.inflection}</div>
          </div>
        </div>
        <div class="detail-notes">
          <div class="detail-item-label">Notes</div>
          <p class="detail-notes-text">${word.grammar.notes}</p>
        </div>
      </div>
    `;

    // Highlight active word and English section
    document.querySelectorAll('.hiero-word').forEach(el => el.classList.remove('active'));
    const wordEl = document.querySelector(`.hiero-word[data-id="${wordId}"]`);
    if (wordEl) {
      wordEl.classList.add('active');
      wordEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    highlightSection(sectionId, true);

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideDetail() {
    const panel = document.getElementById('word-detail-panel');
    if (panel) panel.classList.add('hidden');
    document.querySelectorAll('.hiero-word').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.en-text').forEach(el => el.classList.remove('highlighted'));
    activeWord = null;
  }

  function highlightSection(sectionId, on) {
    const enEl = document.getElementById('en-' + sectionId);
    if (enEl) enEl.classList.toggle('highlighted', on);
  }

  // ── Utilities ─────────────────────────────────────────────────────────────────
  function findWord(wordId, sectionId) {
    const text = TEXTS[activeText];
    if (!text) return null;
    const section = text.sections.find(s => s.id === sectionId);
    if (!section) return null;
    return section.words.find(w => w.id === wordId) || null;
  }

  // ── Init ──────────────────────────────────────────────────────────────────────
  function init() {
    renderTextList();
  }

  return { init, openText, closeText, showTooltip, hideTooltip, showDetail, hideDetail };
})();
