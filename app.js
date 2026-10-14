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

// Product-touchpoint diagrams: mouse, touch, and keyboard share one tab state.
document.querySelectorAll('[data-product-tabs]').forEach(group => {
  const tabs = [...group.querySelectorAll('[role="tab"]')];
  const activate = index => {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      activate(next);
      tabs[next].focus();
    });
  });
});
