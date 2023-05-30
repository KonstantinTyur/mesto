import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popupSelector.querySelector('.popup__image');
    this._popupCapt = this._popupSelector.querySelector('.popup__caption');
    }

    openPopup = (imageData) => {
      this._popupImg.src = imageData.link;
      this._popupImg.alt = imageData.title;
      this._popupCapt.textContent = imageData.title;
      super.openPopup()
    }
}
