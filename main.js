'use strict';

const popupPage = document.querySelector('.popup-page');
const form = document.forms.popup;
const menuBurger = document.querySelector('.menu-burger');
const headerMenuInner = document.querySelector('.header-menu-inner');

setTimeout(popupActivation, 50000);

function popupActivation() {
  popupPage.classList.remove('_hidden');

  form.close.addEventListener('click', () => {
    popupPage.classList.add('_hidden');
  });

  form.send.addEventListener('click', (e) => {
    e.preventDefault();

    let formData = {
      select: form.select.value,
      radio: form.radio.value,
      text: form.textFeedback.value,
    };

    if (validTextField()) {
      if (localStorage) {
        localStorage.setItem('feedback', JSON.stringify(formData));
        console.log(JSON.parse(localStorage.getItem('feedback')));

        form.reset();
        popupPage.classList.add('_hidden');
      }
    } else {
      form.textFeedback.classList.add('req-error');
    }
  });
}

function validTextField() {
  if (form.textFeedback.value.trim() !== '') {
    return true;
  } else {
    form.textFeedback.value = '';
    return false;
  }
}

menuBurger.addEventListener('click', () => {
  Array.from(menuBurger.children).forEach((elem) => {
    elem.classList.toggle('active');
  });
  headerMenuInner.classList.toggle('menu-active');
});