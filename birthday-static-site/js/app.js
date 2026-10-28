'use strict';
const config = window.BIRTHDAY_CONFIG;
const byId = (id) => document.getElementById(id);
byId('wife-name').textContent = config.wifeName;
byId('hero-message').textContent = config.heroMessage;
byId('footer-name').textContent = config.wifeName;
byId('letter-name').textContent = config.wifeName;
byId('signature').textContent = config.signature;
byId('year').textContent = new Date().getFullYear();
document.title = `Happy Birthday, ${config.wifeName} ♡`;
const gallery = byId('memory-grid');
for (const memory of config.memories) {
  const article = document.createElement('article');
  article.className = 'memory-card';
  const img = document.createElement('img');
  img.src = memory.image; img.alt = memory.alt; img.loading = 'lazy';
  const heading = document.createElement('h3'); heading.textContent = memory.title;
  const caption = document.createElement('p'); caption.textContent = memory.caption;
  article.append(img, heading, caption); gallery.append(article);
}
const body = byId('letter-body');
for (const paragraph of config.letter) {
  const p = document.createElement('p'); p.textContent = paragraph; body.append(p);
}
const dialog = byId('letter-dialog');
byId('open-letter').addEventListener('click', () => dialog.showModal());
byId('close-letter').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
byId('celebrate-btn').addEventListener('click', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = byId('confetti-layer');
  layer.replaceChildren();
  const colors = ['#b94f75', '#e6a5b8', '#f4c55b', '#fff0a5', '#d17a9c'];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('span'); piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.setProperty('--drift', `${Math.random() * 240 - 120}px`);
    layer.append(piece);
  }
  setTimeout(() => layer.replaceChildren(), 4200);
});
