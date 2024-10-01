const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    overlay = document.querySelector('.overlay');


function calcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

const toggleClasses = () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
}


burger?.addEventListener('click', (e) => {
  toggleClasses();
});




