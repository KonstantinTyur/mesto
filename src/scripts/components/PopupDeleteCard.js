import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelect, funcSubmit) {
    super(popupSelect);
    this._funcSubmit = funcSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._funcSubmit({ card: this._card, cardId: this._cardId });
    });
  }

  openPopup = ({ card, cardId }) => {
    super.openPopup();
    this._card = card;
    this._cardId = cardId;

  }
}
