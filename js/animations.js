/* ============================================
   Fabu - Magical Animations & Particle Effects
   ============================================ */

(function () {
  'use strict';

  /* ---------- Sparkle Particle System ---------- */
  class SparkleSystem {
    constructor() {
      this.canvas = document.getElementById('particles-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.maxParticles = window.innerWidth < 768 ? 25 : 50;
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.init();
      this.animate();
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    init() {
      for (let i = 0; i < this.maxParticles; i++) {
        this.particles.push(this.createParticle());
      }
    }

    createParticle() {
      const colors = [
        'rgba(251, 191, 36, A)',
        'rgba(253, 224, 71, A)',
        'rgba(255, 255, 255, A)',
        'rgba(168, 85, 247, A)',
        'rgba(244, 114, 182, A)'
      ];
      return {
        x: Math.random() * (this.canvas ? this.canvas.width : window.innerWidth),
        y: Math.random() * (this.canvas ? this.canvas.height : window.innerHeight),
        size: Math.random() * 3 + 3,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.12 - 0.06,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        alphaSpeed: Math.random() * 0.008 + 0.004,
        alphaDir: 1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      };
    }

    drawStar(x, y, size, rotation, color, alpha) {
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotation);

      this.ctx.shadowColor = color;
      this.ctx.shadowBlur = size * 5;

      const spikes = 4;
      const outerR = size;
      const innerR = size * 0.35;
      this.ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) this.ctx.moveTo(px, py);
        else this.ctx.lineTo(px, py);
      }
      this.ctx.closePath();
      this.ctx.fillStyle = color;
      this.ctx.fill();

      this.ctx.shadowBlur = size * 10;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, ' + (alpha * 0.7).toFixed(2) + ')';
      this.ctx.fill();

      this.ctx.restore();
    }

    update() {
      if (!this.canvas) return;
      this.particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        p.alpha += p.alphaSpeed * p.alphaDir;
        if (p.alpha >= 0.65) p.alphaDir = -1;
        if (p.alpha <= 0.05) p.alphaDir = 1;

        if (p.y < -20) p.y = this.canvas.height + 20;
        if (p.y > this.canvas.height + 20) p.y = -20;
        if (p.x < -20) p.x = this.canvas.width + 20;
        if (p.x > this.canvas.width + 20) p.x = -20;
      });
    }

    draw() {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(p => {
        const col = p.color.replace('A', p.alpha.toFixed(2));
        this.drawStar(p.x, p.y, p.size, p.rotation, col, p.alpha);
      });
    }

    animate() {
      this.update();
      this.draw();
      requestAnimationFrame(() => this.animate());
    }
  }

  /* ---------- Scroll Reveal ---------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  }

  /* ---------- Counter Animation ---------- */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            const duration = 2000;
            const start = performance.now();

            function step(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);
              el.textContent = prefix + current.toLocaleString('tr-TR') + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }

            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  /* ---------- Parallax on mouse move (hero only) ---------- */
  function initHeroParallax() {
    const hero = document.querySelector('.hero-section');
    if (!hero || window.innerWidth < 768) return;

    const layers = hero.querySelectorAll('[data-parallax]');
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach(layer => {
        const speed = parseFloat(layer.dataset.parallax) || 1;
        const moveX = x * speed * 20;
        const moveY = y * speed * 20;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }

  /* ---------- Lazy image loading ---------- */
  function initLazyImages() {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
      }
    });
    document.querySelectorAll('img:not([loading])').forEach(img => {
      img.classList.add('loaded');
    });
  }

  /* ---------- Init ---------- */
  function init() {
    new SparkleSystem();
    initScrollReveal();
    initCounters();
    initHeroParallax();
    initLazyImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
