'use strict';

/* ++++++++++++++++++++++++++++++++++++++++ */
/* USER DATA ++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++ */

const myAccount = {
  username: 'jing',
  password: 'password?123',
  fullName: 'Jing Timblique',
};

/* ++++++++++++++++++++++++++++++++++++++++ */
/* Selection ++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++ */
const submitBtn = document.querySelector('.btn');
const userTxtbox = document.querySelector('.username');
const passTxtbox = document.querySelector('.password');
const welcomeMsg = document.querySelector('.welcome-message');
const loginForm = document.querySelector('.login-form');
const linkBgChange = document.querySelectorAll('.nav-link');
const alertBox = document.querySelector('.alertMsg');
const bodyContents = document.querySelector('body');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    myAccount.username === userTxtbox.value &&
    myAccount.password === passTxtbox.value
  ) {
    formAnimation();
  } else {
    // Show alert message if credentials dont match myAccount
    alertBox.classList.remove('hidden');
    // Clear textboxes
    userTxtbox.value = '';
    passTxtbox.value = '';
  }
});

const formAnimation = function () {
  welcomeMsg.classList.remove('hidden');
  setTimeout(function () {
    loginForm.classList.add('hidden');
    welcomeMsg.classList.remove('hideTransition');
  }, 1);
};
