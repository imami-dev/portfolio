// ===== Smooth Scroll =====
const button = document.querySelector('.btn');
const contacts = document.querySelector('.contacts');

button.addEventListener('click', () => {
  contacts.scrollIntoView({ behavior: 'smooth' });
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// ===== Typing Animation =====
const heroTitle = document.querySelector('.hero h1');

if (heroTitle) {
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';

  let charIndex = 0;

  function typeNextChar() {
    if (charIndex < originalText.length) {
      heroTitle.textContent += originalText[charIndex];
      charIndex++;
      setTimeout(typeNextChar, 80); // скорость набора в мс
    }
  }

  typeNextChar();
}
// ===== Burger Menu =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');   // анимация в крестик
  navLinks.classList.toggle('open');   // показать/скрыть меню
});

// Закрыть меню при клике на ссылку
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});
// ===== Переводы =====
const translations = {
  ru: {
    nav_skills: 'Навыки',
    nav_projects: 'Проекты',
    nav_contacts: 'Контакты',
    hero_name: 'Андреев Влад',
    hero_role: 'Junior Frontend Developer • Открыт к работе',
    hero_location: 'UTC+8',
    btn_contact: '💬 Написать мне',
    about_title: '👨‍💻 Обо мне',
    about_text: 'Я начинающий frontend-разработчик, изучаю HTML, CSS и JavaScript. Создаю чистые и адаптивные сайты и улучшаю свои навыки каждый день. Открыт для фриланса и junior-позиций.',
    skills_title: '🚀 Навыки',
    skill_responsive: 'Responsive Design',
    projects_title: '🧩 Проекты',
    project1_title: 'Сайт-портфолио',
    project1_desc: 'Личное портфолио на HTML и CSS.',
    project2_title: 'IronPeak Gym — лендинг',
    project2_desc: 'Лендинг для вымышленного спортзала. Hero с фото, секции услуг, тарифы, адаптив, scroll-анимации.',
    btn_view: 'Смотреть проект →',
    contacts_title: '📬 Контакты',
    footer: '© 2026 • Сделано на HTML и CSS'
  },
  en: {
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contacts: 'Contacts',
    hero_name: 'Vlad Andreev',
    hero_role: 'Junior Frontend Developer • Open for work',
    hero_location: 'UTC+8',
    btn_contact: '💬 Contact me',
    about_title: '👨‍💻 About me',
    about_text: 'I\'m a beginner frontend developer learning HTML, CSS and JavaScript. I build clean and responsive websites and improve my skills every day. Currently open for freelance and junior opportunities.',
    skills_title: '🚀 Skills',
    skill_responsive: 'Responsive Design',
    projects_title: '🧩 Projects',
    project1_title: 'Portfolio Website',
    project1_desc: 'Personal portfolio built with HTML & CSS.',
    project2_title: 'IronPeak Gym — Landing',
    project2_desc: 'Landing page for a gym. Hero with photo, services sections, pricing, adaptive, scroll animations.',
    btn_view: 'View project →',
    contacts_title: '📬 Contacts',
    footer: '© 2026 • Built with HTML & CSS'
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById('langToggle').textContent = lang === 'ru' ? 'EN' : 'RU';
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'ru' ? 'en' : 'ru');
});

applyLang(currentLang);

