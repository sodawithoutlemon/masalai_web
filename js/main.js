/* ============================================
   Faby - Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---------- Sticky Header ---------- */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-overlay');
    if (!btn || !menu) return;

    function toggle() {
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      if (overlay) overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function close() {
      menu.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', toggle);
    if (overlay) overlay.addEventListener('click', close);

    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', close);
    });
  }

  /* ---------- Active Nav Link ---------- */
  function initActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (
        (path.endsWith('/') && (href === 'index.html' || href === './')) ||
        path.endsWith(href)
      ) {
        link.classList.add('active');
      }
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item.active').forEach(other => {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---------- Scroll Indicator ---------- */
  function initScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    indicator.addEventListener('click', () => {
      const hero = document.querySelector('.hero-section');
      if (!hero) return;
      const next = hero.nextElementSibling;
      if (next) {
        const top = next.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });

    window.addEventListener('scroll', () => {
      indicator.style.opacity = window.scrollY > 200 ? '0' : '';
      indicator.style.pointerEvents = window.scrollY > 200 ? 'none' : '';
    }, { passive: true });
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Testimonial Slider ---------- */
  function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    let current = 0;

    function getVisibleCount() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }

    function update() {
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, cards.length - visible);
      if (current > maxIndex) current = maxIndex;
      const pct = (current / cards.length) * 100;
      track.style.transform = `translateX(-${pct}%)`;

      dots.forEach((d, i) => d.classList.toggle('bg-purple-600', i === current));
      dots.forEach((d, i) => d.classList.toggle('bg-purple-200', i !== current));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { if (current > 0) { current--; update(); } });
    if (nextBtn) nextBtn.addEventListener('click', () => { current++; update(); });

    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Language Switcher ---------- */
  function initLanguageSwitcher() {
    const btn = document.getElementById('lang-switcher-btn');
    const dropdown = document.getElementById('lang-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });

    dropdown.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initHeader();
    initMobileMenu();
    initActiveNav();
    initSmoothScroll();
    initFAQ();
    initScrollIndicator();
    initBackToTop();
    initTestimonialSlider();
    initLanguageSwitcher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
