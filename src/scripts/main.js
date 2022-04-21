'use strict';

// burger menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// prevent realoading page with submit
// const form = document.querySelector('.main__form');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('.main__input');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  checkInputs();

  event.preventDefault();

  if (username.valid && phone.valid && email.valid) {
    toggleModal();

    for (const input of inputs) {
      input.value = '';
    }
  }
});

// check if form valid
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Поле не може бути порожнім');
    username.valid = false;
  } else if (usernameValue.length < 3) {
    setErrorFor(username, 'Введіть мінімум 3 символи');
    username.valid = false;
  } else {
    setSuccessFor(username);
    username.valid = true;
  }

  if (phoneValue === '') {
    setErrorFor(phone, 'Поле не може бути порожнім');
    phone.valid = false;
  } else {
    setSuccessFor(phone);
    phone.valid = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Поле не може бути порожнім');
    email.valid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Не валідний email');
    email.valid = false;
  } else {
    setSuccessFor(email);
    email.valid = true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

function isEmail(emailcheck) {
  // eslint-disable-next-line max-len
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailcheck);
}

// modal window
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');

function toggleModal() {
  modal.classList.toggle('modal--show');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

// changing menu styles with scroll
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  const menuLinks = document.querySelectorAll('.menu__link');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = '#fff';
    logo.style.color = '#000';
    menuLinks.forEach(item => (item.style.color = '#000'));
  } else {
    navbar.style.backgroundColor = 'transparent';
    logo.style.color = '#fff';
    menuLinks.forEach(item => (item.style.color = '#fff'));
  }
}
