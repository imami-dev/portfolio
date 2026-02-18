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
