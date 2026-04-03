// ── LESSONS MODULE ─────────────────────────────────────────────────────────────

const LessonsModule = (() => {
  let currentLesson = null;

  function renderList() {
    const container = document.getElementById('lessons-list');
    container.innerHTML = LESSONS.map((lesson, i) => `
      <div class="lesson-card" onclick="LessonsModule.openLesson('${lesson.id}')">
        <div class="lesson-glyph">${lesson.icon}</div>
        <div class="lesson-info">
          <div class="lesson-title">${lesson.title}</div>
          <div class="lesson-sub">${lesson.subtitle}</div>
        </div>
        <div class="lesson-meta">
          <span class="badge badge-gold">${lesson.difficulty}</span>
          <span class="text-small text-muted">${lesson.duration}</span>
        </div>
      </div>
    `).join('');
  }

  function openLesson(id) {
    currentLesson = LESSONS.find(l => l.id === id);
    if (!currentLesson) return;

    const detail = document.getElementById('lesson-detail');
    const list   = document.getElementById('lessons-list-wrapper');

    list.classList.add('hidden');
    detail.classList.remove('hidden');

    detail.innerHTML = `
      <div class="lesson-detail">
        <div class="lesson-detail-header">
          <button class="back-btn" onclick="LessonsModule.closeLesson()">
            ← Back to lessons
          </button>
          <div class="flex items-center gap-3 mb-2">
            <span style="font-family:'Noto Sans Egyptian Hieroglyphs',serif;font-size:2.5rem;color:var(--gold)">${currentLesson.icon}</span>
            <h2>${currentLesson.title}</h2>
          </div>
          <p class="font-serif" style="color:var(--text-muted);font-size:1.05rem;font-style:italic">${currentLesson.subtitle}</p>
          <div class="flex gap-2 mt-4">
            <span class="badge badge-gold">${currentLesson.difficulty}</span>
            <span class="badge badge-lapis">${currentLesson.duration}</span>
          </div>
        </div>
        <hr class="divider">
        ${currentLesson.content.map(block => renderBlock(block)).join('\n')}
        <hr class="divider">
        <div class="flex gap-3">
          <button class="btn btn-secondary" onclick="LessonsModule.closeLesson()">← All Lessons</button>
          <button class="btn btn-primary" onclick="App.navigate('flashcards')">Practice Flashcards →</button>
        </div>
      </div>
    `;
  }

  function renderBlock(block) {
    switch (block.type) {
      case 'text':
        return `<div class="lesson-content-block"><p class="lesson-text">${block.body}</p></div>`;
      case 'highlight':
        return `<div class="lesson-content-block"><div class="lesson-highlight">${block.body}</div></div>`;
      case 'subheading':
        return `<div class="lesson-content-block"><h3 class="lesson-subheading">${block.body}</h3></div>`;
      case 'list':
        return `
          <div class="lesson-content-block">
            <ul class="lesson-list-items">
              ${block.items.map(item => `<li>${item}</li>`).join('\n')}
            </ul>
          </div>`;
      default:
        return '';
    }
  }

  function closeLesson() {
    document.getElementById('lesson-detail').classList.add('hidden');
    document.getElementById('lessons-list-wrapper').classList.remove('hidden');
    currentLesson = null;
  }

  function init() {
    renderList();
  }

  return { init, openLesson, closeLesson };
})();
