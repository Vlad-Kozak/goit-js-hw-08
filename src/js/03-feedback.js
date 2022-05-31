const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const emailMessage = form.elements.email;
const textareaMessage = form.elements.message;

enterDataIntoForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = emailMessage.value;
  const message = textareaMessage.value;

  localStorage.setItem('formData', JSON.stringify({ email, message }));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('formData')));
  localStorage.removeItem('formData');
}

function enterDataIntoForm() {
  const savedMessage = localStorage.getItem('formData');
  if (savedMessage) {
    const formData = JSON.parse(savedMessage);
    emailMessage.value = formData.email;
    textareaMessage.value = formData.message;
  }
}
