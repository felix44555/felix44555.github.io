/*------------------------------------------------
  1. Mobile-Navigation
------------------------------------------------*/
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');
navToggle?.addEventListener('click', () => navMenu.classList.toggle('is-visible'));

/*------------------------------------------------
  2. Parallax-Effekt
------------------------------------------------*/
const parallaxItems = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  parallaxItems.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/*------------------------------------------------
  3. Fade-Ins via Intersection Observer
------------------------------------------------*/
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.15});
faders.forEach(el => observer.observe(el));

/*------------------------------------------------
  4. Nav-Hide on Scroll down (optional – Apple-Feeling)
------------------------------------------------*/
let lastPos = 0;
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const curr = window.scrollY;
  header.style.transform = (curr > lastPos && curr > 200) ? 'translateY(-100%)' : 'translateY(0)';
  lastPos = curr;
});
