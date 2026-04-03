// ── QUIZ MODULE ────────────────────────────────────────────────────────────────

const QuizModule = (() => {
  const TOTAL_QUESTIONS = 10;

  let questions    = [];
  let current      = 0;
  let score        = 0;
  let answered     = false;
  let quizMode     = 'glyph-to-translit'; // or 'translit-to-glyph' or 'glyph-to-name'

  // ── Build question pool ──────────────────────────────────────────────────────
  function buildQuestions() {
    const pool = [...HIEROGLYPHS.uniliterals, ...HIEROGLYPHS.biliterals];
    const shuffled = pool.slice().sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, TOTAL_QUESTIONS);

    questions = selected.map(sign => {
      // Build 3 distractors
      const others = pool.filter(s => s.id !== sign.id)
                         .sort(() => Math.random() - 0.5)
                         .slice(0, 3);

      if (quizMode === 'glyph-to-translit') {
        const correct = sign.transliteration;
        const distractors = others.map(s => s.transliteration);
        const options = shuffle([correct, ...distractors]);
        return {
          type: 'glyph-to-translit',
          prompt: sign.unicode,
          promptLabel: 'What is the transliteration of this hieroglyph?',
          correct,
          options,
          sign,
        };
      }

      if (quizMode === 'translit-to-glyph') {
        const correct = sign.unicode;
        const distractors = others.map(s => s.unicode);
        const options = shuffle([correct, ...distractors]);
        return {
          type: 'translit-to-glyph',
          prompt: sign.transliteration,
          promptLabel: `Which hieroglyph represents "${sign.transliteration}"?`,
          correct,
          options,
          sign,
          isGlyph: true,
        };
      }

      // glyph-to-name
      const correct = sign.name;
      const distractors = others.map(s => s.name);
      const options = shuffle([correct, ...distractors]);
      return {
        type: 'glyph-to-name',
        prompt: sign.unicode,
        promptLabel: 'What does this hieroglyph depict?',
        correct,
        options,
        sign,
      };
    });
  }

  function shuffle(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
  }

  // ── Render ───────────────────────────────────────────────────────────────────
  function render() {
    const wrapper = document.getElementById('quiz-wrapper');

    if (current >= questions.length) {
      renderResult(wrapper);
      return;
    }

    const q = questions[current];
    answered = false;

    const isGlyphPrompt = q.type !== 'translit-to-glyph';
    const isGlyphOptions = q.type === 'translit-to-glyph';

    wrapper.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-score">Score: <span id="quiz-score-val">${score}</span> / ${TOTAL_QUESTIONS}</div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${(current / TOTAL_QUESTIONS) * 100}%"></div>
        </div>
        <div class="text-small text-muted">Q ${current + 1} of ${TOTAL_QUESTIONS}</div>
      </div>

      <div class="quiz-question-card">
        <div class="quiz-question-num">${q.promptLabel}</div>
        <div class="quiz-question-glyph ${isGlyphPrompt ? '' : 'font-display'}"
             style="${isGlyphPrompt ? '' : 'font-family:\'Cinzel\',serif;font-size:3.5rem;'}">
          ${q.prompt}
        </div>
      </div>

      <div class="quiz-options" id="quiz-options">
        ${q.options.map(opt => `
          <button class="quiz-option ${isGlyphOptions ? 'glyph-option' : ''} ${isGlyphOptions ? 'font-hiero' : ''}"
                  data-value="${opt}"
                  onclick="QuizModule.answer('${escapeAttr(opt)}')">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div id="quiz-feedback" class="quiz-feedback hidden"></div>

      <div class="flex gap-3">
        <button id="quiz-next-btn" class="btn btn-primary hidden"
                onclick="QuizModule.nextQuestion()">
          ${current + 1 < TOTAL_QUESTIONS ? 'Next Question →' : 'See Results →'}
        </button>
        <button class="btn btn-secondary" onclick="QuizModule.quit()">Quit Quiz</button>
      </div>
    `;
  }

  function escapeAttr(s) {
    return s.replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  }

  function answer(selected) {
    if (answered) return;
    answered = true;

    const q       = questions[current];
    const correct = selected === q.correct;
    if (correct) score++;

    // Mark options
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(btn => {
      btn.classList.add('answered');
      if (btn.dataset.value === q.correct) btn.classList.add('correct');
      else if (btn.dataset.value === selected && !correct) btn.classList.add('wrong');
    });

    // Show feedback
    const fb = document.getElementById('quiz-feedback');
    fb.classList.remove('hidden');
    if (correct) {
      fb.classList.add('correct');
      fb.innerHTML = `✓ Correct! <span style="font-size:0.9rem;opacity:0.8">${q.sign.name} — ${q.sign.transliteration}</span>`;
    } else {
      fb.classList.add('wrong');
      fb.innerHTML = `✗ Not quite. The answer is: <strong>${q.correct}</strong> (${q.sign.name})`;
    }

    // Update score display
    const sv = document.getElementById('quiz-score-val');
    if (sv) sv.textContent = score;

    // Show next button
    document.getElementById('quiz-next-btn').classList.remove('hidden');
  }

  function nextQuestion() {
    current++;
    render();
  }

  function renderResult(wrapper) {
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
    let message, glyph;

    if (pct === 100)      { message = 'Perfect! You are a true scribe!';           glyph = '𓋹'; }
    else if (pct >= 80)   { message = 'Excellent! The gods are pleased.';           glyph = '𓇳'; }
    else if (pct >= 60)   { message = 'Good work! Keep studying the sacred signs.'; glyph = '𓄿'; }
    else if (pct >= 40)   { message = 'Keep going — the hieroglyphs take time.';    glyph = '𓂋'; }
    else                  { message = 'Study the lessons and try again!';            glyph = '𓅓'; }

    wrapper.innerHTML = `
      <div class="quiz-result">
        <div class="result-glyph">${glyph}</div>
        <div class="result-score">${score} / ${TOTAL_QUESTIONS}</div>
        <div class="result-message">${message}</div>
        <div style="font-size:0.9rem;color:var(--text-dim);margin-bottom:32px">${pct}% correct</div>
        <div class="flex gap-3" style="justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="QuizModule.restart()">Try Again</button>
          <button class="btn btn-secondary" onclick="App.navigate('flashcards')">Study Flashcards</button>
          <button class="btn btn-secondary" onclick="App.navigate('lessons')">Review Lessons</button>
        </div>
      </div>
    `;
  }

  function setMode(mode) {
    quizMode = mode;
    document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
  }

  function restart() {
    current  = 0;
    score    = 0;
    answered = false;
    buildQuestions();
    render();
  }

  function quit() {
    current  = 0;
    score    = 0;
    answered = false;
    renderStart();
  }

  function renderStart() {
    const wrapper = document.getElementById('quiz-wrapper');
    wrapper.innerHTML = `
      <div style="max-width:520px;margin:0 auto;text-align:center;padding:48px 24px">
        <div style="font-family:'Noto Sans Egyptian Hieroglyphs',serif;font-size:5rem;color:var(--gold);margin-bottom:16px">𓂋𓏏𓏤</div>
        <h3 style="font-family:'Cinzel',serif;font-size:1.8rem;color:var(--gold);margin-bottom:12px">Test Your Knowledge</h3>
        <p class="font-serif text-muted" style="font-size:1.1rem;margin-bottom:32px;line-height:1.6">
          ${TOTAL_QUESTIONS} questions drawn from the hieroglyphic signs you've been studying.
        </p>
        <div style="margin-bottom:24px">
          <div class="keyboard-section-label" style="text-align:center;margin-bottom:12px">Quiz Mode</div>
          <div class="filter-group" style="justify-content:center">
            <button class="filter-btn quiz-mode-btn active" data-mode="glyph-to-translit"
                    onclick="QuizModule.setMode('glyph-to-translit');this.closest('.filter-group').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">
              Glyph → Transliteration
            </button>
            <button class="filter-btn quiz-mode-btn" data-mode="translit-to-glyph"
                    onclick="QuizModule.setMode('translit-to-glyph');this.closest('.filter-group').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">
              Transliteration → Glyph
            </button>
            <button class="filter-btn quiz-mode-btn" data-mode="glyph-to-name"
                    onclick="QuizModule.setMode('glyph-to-name');this.closest('.filter-group').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">
              Glyph → Name
            </button>
          </div>
        </div>
        <button class="btn btn-primary" style="font-size:1rem;padding:14px 32px"
                onclick="QuizModule.start()">Begin Quiz</button>
      </div>
    `;
  }

  function start() {
    buildQuestions();
    render();
  }

  function init() {
    renderStart();
  }

  return { init, answer, nextQuestion, restart, quit, setMode, start };
})();
