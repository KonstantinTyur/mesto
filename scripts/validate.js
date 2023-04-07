const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-box',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input-box_type_error',
  errorClass: 'popup__error_type_visible'
}

const log = console.log;

function enableValidation({ formSelector, ...rest }) {
  const formsList = Array.from(document.querySelectorAll(formSelector));
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
}

function setEventListeners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) {
  const inputsList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(inputsList, buttonElement, inactiveButtonClass);
    })
  });
};

function checkInputValidity(formElement, inputElement, {...rest}) {
  const errorElement = formElement.querySelector(`.popup__error_type_${inputElement.id}`);
  if (!inputElement.validity.valid) {
    showInputError(errorElement, inputElement, rest);
  } else {
    hideInputError(errorElement, inputElement, rest);
  };
}

function showInputError(errorElement, inputElement, { inputErrorClass, errorClass }) {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

function hideInputError(errorElement, inputElement, { inputErrorClass, errorClass }) {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

function toggleButtonState(inputsList, buttonElement) { };


//
//
// console.log(formInput);
// const showInputError = (element) => {
//   element.classList.add('popup__input-box_type_error')
// };
// const hideInputError = (element) => {
//   element.classList.remove('popup__input-box_type_error');
// };
// const isValid = () => {
//   if (!formInput.validity.valid) {
//     showInputError(formInput);
//   } else {
//     hideInputError(formInput);
//   }
// };

// formInput.addEventListener('input', isValid);


enableValidation(validationConfig);
