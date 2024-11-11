const form = document.querySelector('form');
const email = form.querySelector('.email');
const error_msg = form.querySelector('.error-msg');
const main_card = document.querySelector('.container');
const success_card = document.querySelector('.success__card');
const user_email = success_card.querySelector('strong');

function isEmailValid(value) {
  const email_regex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  return email_regex.test(value);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  if (emailValidation()) {
    // showError(false)
    user_email.textContent = email.value
    form.reset();
    setTimeout(() => {
      main_card.classList.add('hide');
      success_card.classList.add('display');
    }, 250)
  }
})

function emailValidation() {
  const value = email.value.trim()
  const isValid = value && isEmailValid(value)
  showError(!isValid);
  return isValid
}

function showError(show) {
  if (show) {
    error_msg.classList.add('active')
    email.classList.add('error')
  } else {
    error_msg.classList.remove('active')
    email.classList.remove('error')
  }
}

