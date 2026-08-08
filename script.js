const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const topBtn=document.querySelector('.top');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>500));
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.style='position:fixed;inset:0;background:#000d;z-index:100;display:flex;align-items:center;justify-content:center;padding:20px;cursor:zoom-out';
    const big=document.createElement('img');
    big.src=img.src; big.alt=img.alt;
    big.style='max-width:95%;max-height:92%;object-fit:contain;border-radius:10px;box-shadow:0 15px 50px #000';
    overlay.appendChild(big); document.body.appendChild(overlay);
    overlay.addEventListener('click',()=>overlay.remove());
  });
});
