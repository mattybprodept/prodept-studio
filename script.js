/* ============================================================
   PRO DEPT. — DESIGN STUDIOS
   JavaScript
   ============================================================ */

// ── NAV SCROLL STATE ──────────────────────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

menuClose.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ── CONTACT FORM ──────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'SENDING...';
  btn.disabled = true;
  // Formspree handles the actual submission via the form action
  // Re-enable after a short delay in case of errors
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'SEND ENQUIRY →';
  }, 5000);
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.service-card, .portfolio-item, .stat, .clients__cell, .section-title, .about__name'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
