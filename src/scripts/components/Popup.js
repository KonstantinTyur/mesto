export default class Popup {
  constructor(popupSelect) {
    this._popupSelector = document.querySelector(popupSelect);
    this._closeButton = this._popupSelector.querySelector('.popup__close-button');
  }

    _handleClosePopupByClickOnEsc = (evt) => {
      if (evt.key === 'Escape') {
        this.closePopup();
      }
    }

    _handleClosePopupByClickOnOverlay = (evt) => {
      if (evt.target === evt.currentTarget){
      this.closePopup();
      }
    }

    _handleClosePopupByClickCloseButton = () => {
      this.closePopup();
    }

    setEventListeners () {
      this._popupSelector.addEventListener('click', this._handleClosePopupByClickOnOverlay);
      this._closeButton.addEventListener('click', this._handleClosePopupByClickCloseButton);
    }

    openPopup() {
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleClosePopupByClickOnEsc);
    }

    closePopup() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleClosePopupByClickOnEsc);
    }
}
