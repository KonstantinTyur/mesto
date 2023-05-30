export default class FormValidator {
  constructor(validationConfig, form) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._form = form;
    this._inputsList = Array.from(form.querySelectorAll(this._inputSelector));
    this._submitButton = form.querySelector(this._submitButtonSelector);
  }

  _showInputError(errorElement, inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(errorElement, inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._form.querySelector(`.popup__error_type_${inputElement.id}`);
    if (!inputElement.validity.valid) {
      this._showInputError(errorElement, inputElement);
    } else {
      this._hideInputError(errorElement, inputElement);
    };
  }

  _disableButtonSubmit() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  _enableButtonSubmit() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled', true);
  }

  _hasInvalidInput() {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButtonSubmit();
    } else {
      this._enableButtonSubmit();
    }
  }

  _setEventListeners() {
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputsList.forEach((inputElement) => {
      const errorElement = this._form.querySelector(`.popup__error_type_${inputElement.id}`);
      this._hideInputError(errorElement, inputElement);
    });
    this._disableButtonSubmit();
  }
}
