// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('active-flex')
})
