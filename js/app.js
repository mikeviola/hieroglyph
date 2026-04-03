// ── APP ROUTER & INITIALIZATION ────────────────────────────────────────────────

const App = (() => {
  const pages = ['home', 'lessons', 'flashcards', 'quiz', 'translate', 'reference'];
  let current = 'home';

  function navigate(pageId) {
    if (!pages.includes(pageId)) return;

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === pageId);
    });

    current = pageId;

    // Initialize module if needed
    if (pageId === 'lessons')   LessonsModule.init();
    if (pageId === 'flashcards') FlashcardsModule.init();
    if (pageId === 'quiz')      QuizModule.init();
    if (pageId === 'translate') TranslateModule.init();

    // Scroll to top
    const mc = document.querySelector('.main-content');
    if (mc) mc.scrollTo(0, 0);
  }

  function init() {
    // Wire up nav items
    document.querySelectorAll('.nav-item').forEach(el => {
      el.addEventListener('click', () => navigate(el.dataset.page));
    });
    navigate('home');
  }

  return { init, navigate };
})();

document.addEventListener('DOMContentLoaded', App.init);
