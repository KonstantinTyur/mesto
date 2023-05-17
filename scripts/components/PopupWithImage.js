import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popupSelector.querySelector('.popup__image');
    this._popupCapt = this._popupSelector.querySelector('.popup__caption');
    }

    openPopup = (object) => {
      this._popupImg.src = object.link;
      this._popupImg.alt = object.title;
      this._popupCapt.textContent = object.title;
      super.openPopup()
    }
}
