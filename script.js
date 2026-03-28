const topBtn = document.getElementById('topBtn');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

window.addEventListener('scroll', () => {

  if(topBtn){
    if(window.scrollY > 300){
      topBtn.style.display = 'block';
    }else{
      topBtn.style.display = 'none';
    }
  }

  document.querySelectorAll('.reveal').forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      element.classList.add('active');
    }
  });

  const achievementSection = document.querySelector('.achievement-section');

  if(achievementSection && !achievementSection.classList.contains('started')){
    const top = achievementSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      achievementSection.classList.add('started');

      document.querySelectorAll('.counter').forEach(counter => {
        const target = Number(counter.dataset.target);
        let current = 0;

        const updateCounter = () => {
          current += target / 80;

          if(current < target){
            counter.innerText = Math.ceil(current);
            setTimeout(updateCounter, 20);
          }else{
            counter.innerText = target + '+';
          }
        };

        updateCounter();
      });
    }
  }
});

if(topBtn){
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
