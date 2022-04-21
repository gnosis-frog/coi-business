'use strict';

// burger menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// not realoading page with submit

const form = document.querySelector('.main__form');
const inputs = document.querySelectorAll('.main__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

// modal window

const modal = document.querySelector('.modal');
const trigger = document.querySelector('.main__button');
const closeButton = document.querySelector('.modal__close-button');

function toggleModal() {
  modal.classList.toggle('modal--show');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

// changing menu styles with scroll

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const logo = document.getElementById('logo');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('home').style.backgroundColor = '#ffffff';
    logo.style.background = 'url(https://svgshare.com/i/gSB.svg) no-repeat';
    logo.style.transition = 'background 0.3s';
    logo.style.backgroundSize = 'contain';
    document.getElementById('menu__link-1').style.color = '#000';
    document.getElementById('menu__link-2').style.color = '#000';
    document.getElementById('menu__link-3').style.color = '#000';
    document.getElementById('menu__link-4').style.color = '#000';
  } else {
    document.getElementById('home').style.backgroundColor = 'transparent';
    logo.style.background = 'url(https://svgshare.com/i/gUm.svg) no-repeat';
    logo.style.backgroundSize = 'contain';
    document.getElementById('menu__link-1').style.color = '#fff';
    document.getElementById('menu__link-2').style.color = '#fff';
    document.getElementById('menu__link-3').style.color = '#fff';
    document.getElementById('menu__link-4').style.color = '#fff';
  }
}
