const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const closeMenu = () => { nav?.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded','false'); };
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
const box = document.querySelector('.lightbox');
document.querySelectorAll('[data-enlarge]').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    const enlarged = box.querySelector('img');
    enlarged.src = image.src;
    enlarged.alt = image.alt;
    box.showModal();
  });
});
box?.querySelector('.lightbox-close').addEventListener('click',()=>box.close());
box?.addEventListener('click', e => { if(e.target===box) box.close(); });
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
document.querySelector('[data-copy-email]')?.addEventListener('click',async function(){
  const address = this.dataset.copyEmail;
  try { await navigator.clipboard.writeText(address); this.textContent='邮箱已复制'; }
  catch { this.textContent=address; }
});
