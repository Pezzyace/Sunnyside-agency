const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const body = document.getElementById('body');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
})

body.addEventListener('click', () => {
  mobileNav.style.display = 'none';
})