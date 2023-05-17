import Popup from "./Popup.js";


export default class PopupWhithForm extends Popup {
  constructor(popupSelect, funcSubmit) {
    super(popupSelect);
    this._funcSubmit = funcSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputItems = this._form.querySelectorAll('.popup__input-box');
  }



  getInputValues () {
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

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', this._funcSubmit);
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

}
