'use strict';

/* ++++++++++++++++++++++++++++++++++++++++ */
/* USER DATA ++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++ */

const account1 = {
  username: 'jing',
  password: 'password?123',
  firstName: 'Jing',
  lastName: 'Timblique',
};

const account2 = {
  username: 'other',
  password: 'otherPass',
  firstName: 'Sample Name',
  lastName: 'Other',
};

const myAccounts = [account1, account2];

/* ++++++++++++++++++++++++++++++++++++++++ */
/* Selection ++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++ */

const submitBtn = document.querySelector('.btn');
const logoutBtn = document.querySelector('.btnLogout');
const userTxtbox = document.querySelector('.username');
const passTxtbox = document.querySelector('.password');
const welcomeMsg = document.querySelector('.welcome-message');
const loginForm = document.querySelector('.login-form');
const linkBgChange = document.querySelectorAll('.nav-link');
const alertBox = document.querySelector('.alertMsg');
const message = document.getElementById('message');

let currentAccount;
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = myAccounts.find(acc => acc.username === userTxtbox.value);

  if (
    currentAccount?.username === userTxtbox.value &&
    currentAccount.password === passTxtbox.value
  ) {
    formAnimation(welcomeMsg, loginForm);
    message.innerHTML = `Welcome back, ${currentAccount.firstName}!`;
  } else {
    // Show alert message if credentials dont match myAccount
    alertBox.classList.remove('hidden');
    init();
  }
});

logoutBtn.addEventListener('click', function () {
  alertBox.classList.add('hidden');

  formAnimation(loginForm, welcomeMsg);
  init();
});

const formAnimation = function (toDisplay, toHide) {
  toDisplay.classList.remove('hidden');
  setTimeout(function () {
    toHide.classList.add('hidden');
    toDisplay.classList.remove('hideTransition');
    toHide.classList.add('hideTransition');
  }, 1);
};

const init = function () {
  // Clear textboxes
  userTxtbox.value = '';
  passTxtbox.value = '';
};

init();
