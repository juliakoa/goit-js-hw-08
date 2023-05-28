import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener(
  'input',
  throttle(function () {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

window.addEventListener('load', function () {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('Form Data:', formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
