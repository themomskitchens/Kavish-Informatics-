const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll',()=>{

  if(topBtn){
    if(window.scrollY > 300){
      topBtn.style.display='block';
    }else{
      topBtn.style.display='none';
    }
  }

  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });

  const section = document.querySelector('.achievement-section');
  if(section && !section.classList.contains('started')){
    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      section.classList.add('started');

      document.querySelectorAll('.counter').forEach(counter=>{
        let target = +counter.dataset.target;
        let count = 0;

        const update = ()=>{
          let increment = target / 80;
          count += increment;

          if(count < target){
            counter.innerText = Math.ceil(count);
            setTimeout(update,20);
          }else{
            counter.innerText = target + '+';
          }
        }

        update();
      });
    }
  }
});

if(topBtn){
  topBtn.onclick = ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  }
}
