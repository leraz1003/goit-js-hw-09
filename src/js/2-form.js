
const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');


if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email;
  formData.message = parsedData.message;

  if (form.elements.email.value === '') {
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}


form.addEventListener('input', (evt) => {

  if (evt.target.tagName === 'INPUT' && evt.target.name === 'email') {
    formData.email = evt.target.value.trim();
  }

  if (evt.target.tagName === 'TEXTAREA' && evt.target.name === 'message') {
    formData.message = evt.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})


form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

  } else
    alert('Fill please all fields');
});



