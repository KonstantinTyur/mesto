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

function checkInputValidity(formElement, inputElement, { ...rest }) {
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

function hasInvalidInput(inputsList) {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputsList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputsList)) {
    disableButtonSubmit(buttonElement, inactiveButtonClass);
  } else {
    enableButtonSubmit(buttonElement, inactiveButtonClass);
  }
}

function disableButtonSubmit(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function enableButtonSubmit(buttonElement, inactiveButtonClass) {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
}

function resetSettingsValidationErrorAndButtonSubmitWhenOpeningPopup(form) {
  form.querySelectorAll(validationConfig.inputSelector).forEach((inputElement) => {
    const errorElement = form.querySelector(`.popup__error_type_${inputElement.id}`);
    // console.log(validationConfig.inputErrorClass, validationConfig.errorClass);
    // hideInputError(errorElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
  });
  disableButtonSubmit(form.querySelector(validationConfig.submitButtonSelector), validationConfig.inactiveButtonClass);
}

enableValidation(validationConfig);
