import Popup from "./Popup.js";

export default class PopupWhithForm extends Popup {
  constructor(popupSelect, funcSubmit) {
    super(popupSelect);
    this._funcSubmit = funcSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputItems = this._form.querySelectorAll('.popup__input-box');
    this._submitBtn = this._form.querySelector('.popup__save-button');
    this._defaultTextBtn = this._submitBtn.textContent;
  }

  _getInputValues() {
    this._objectInputValues = {};
    this._inputItems.forEach(inputItem => {
      this._objectInputValues[inputItem.name] = inputItem.value;
    })
    return this._objectInputValues;
  }

  setInputValues(objectUser) {
    this._inputItems.forEach(inputItem => {
      inputItem.value = objectUser[inputItem.name]
    })
  }

  _renderLoading() {
    this._submitBtn.textContent = `${this._submitBtn.textContent}...`
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._renderLoading();
      this._funcSubmit(this._getInputValues());
    });
  }

  setdefaultTextBtn() {
    this._submitBtn.textContent = this._defaultTextBtn
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
