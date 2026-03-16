/* ============================================
   Fabu - Blog & Stories JSON Loader
   ============================================ */

(function () {
  'use strict';

  const BLOG_COLORS = [
    { bg: 'bg-purple-100', text: 'text-purple-700', gradient: 'from-purple-400 to-purple-600' },
    { bg: 'bg-pink-100', text: 'text-pink-700', gradient: 'from-pink-400 to-pink-600' },
    { bg: 'bg-blue-100', text: 'text-blue-700', gradient: 'from-blue-400 to-blue-600' },
    { bg: 'bg-amber-100', text: 'text-amber-700', gradient: 'from-amber-400 to-amber-600' },
    { bg: 'bg-green-100', text: 'text-green-700', gradient: 'from-green-400 to-green-600' },
    { bg: 'bg-indigo-100', text: 'text-indigo-700', gradient: 'from-indigo-400 to-indigo-600' }
  ];

  function createBlogCardHTML(post, index) {
    const color = BLOG_COLORS[index % BLOG_COLORS.length];
    return `
      <article class="blog-card reveal reveal-delay-${(index % 3) + 1}">
        <div class="p-6">
          <span class="blog-card-tag ${color.bg} ${color.text} mb-3">${post.category}</span>
          <h3 class="text-lg font-bold mt-2 mb-2 leading-snug text-gray-900">${post.title}</h3>
          <p class="text-sm text-gray-500 mb-4 line-clamp-2">${post.excerpt}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-400">${post.date}</span>
            <span class="text-xs font-semibold text-purple-600">${post.readTime}</span>
          </div>
        </div>
      </article>
    `;
  }

  function createStoryCardHTML(story, index) {
    const gradients = [
      'from-purple-500 to-violet-600',
      'from-pink-500 to-rose-600',
      'from-blue-500 to-cyan-600',
      'from-amber-500 to-orange-600',
      'from-emerald-500 to-green-600',
      'from-red-500 to-rose-600',
      'from-violet-500 to-purple-600',
      'from-cyan-500 to-teal-600'
    ];
    const grad = gradients[index % gradients.length];
    return `
      <div class="story-book reveal reveal-delay-${(index % 4) + 1}">
        <div class="absolute inset-0 bg-gradient-to-br ${grad}"></div>
        <div class="story-book-cover">
          <div class="story-book-emoji">${story.emoji}</div>
          <div class="story-book-title">${story.title}</div>
          <div class="story-book-author">${story.author || ''}</div>
        </div>
      </div>
    `;
  }

  function showSkeletons(container, count) {
    let html = '';
    for (let i = 0; i < count; i++) {
      html += `<div class="skeleton" style="height:320px;"></div>`;
    }
    container.innerHTML = html;
  }

  async function loadBlogPosts() {
    const container = document.getElementById('blog-grid');
    if (!container) return;

    showSkeletons(container, 6);

    try {
      const resp = await fetch('data/blog-posts.json');
      if (!resp.ok) throw new Error('Failed to load');
      const posts = await resp.json();
      container.innerHTML = posts.map((p, i) => createBlogCardHTML(p, i)).join('');
      if (typeof initScrollReveal === 'function') initScrollReveal();
      document.querySelectorAll('.reveal').forEach(el => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        observer.observe(el);
      });
    } catch {
      container.innerHTML = '<p class="text-center text-gray-400 col-span-3 py-12">Blog yazıları yüklenirken bir hata oluştu.</p>';
    }
  }

  async function loadStories() {
    const container = document.getElementById('stories-grid');
    if (!container) return;

    showSkeletons(container, 8);

    try {
      const resp = await fetch('data/stories.json');
      if (!resp.ok) throw new Error('Failed to load');
      const stories = await resp.json();
      container.innerHTML = stories.map((s, i) => createStoryCardHTML(s, i)).join('');
      document.querySelectorAll('.reveal').forEach(el => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        observer.observe(el);
      });
    } catch {
      container.innerHTML = '<p class="text-center text-gray-400 col-span-4 py-12">Masallar yüklenirken bir hata oluştu.</p>';
    }
  }

  function init() {
    loadBlogPosts();
    loadStories();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
