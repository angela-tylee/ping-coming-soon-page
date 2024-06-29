
const emailInput = document.querySelector('#email-input');
const emailErrorMessage = document.querySelector('.error-message');
const emailErrorMessageMobile = document.querySelector('.error-message-mobile');
const emailBtn = document.querySelector('#email-btn');
const mediaQuery = window.matchMedia('(max-width: 768px)');

let isValid = true;

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value !== "") {
    if (emailPattern.test(emailInput.value)) {
      isValid = true;
    } else {
      isValid = false;
    }
  }
}  

function showError() {
  emailInput.classList.add('error-state');
  if (mediaQuery.matches) {
    emailErrorMessageMobile.style.display = 'block';
    emailErrorMessage.style.display = 'none';

  } else {
    emailErrorMessageMobile.style.display = 'none';
    emailErrorMessage.style.display = 'block';
  }
}

function clearError() {
  emailInput.classList.remove('error-state');
  emailErrorMessage.style.display = 'none';
  emailErrorMessageMobile.style.display = 'none';
}

emailBtn.addEventListener('click', () => {
  clearError();
  validateEmail()
  if (!isValid) {
    showError();
  }
})

function handleViewportChange() {
  if (!isValid) {
    showError();
  }
}

window.addEventListener('resize', handleViewportChange);

handleViewportChange();