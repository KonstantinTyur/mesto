export default class Card {
  constructor(initialCard, templateSelector, openPopupView, openPopupDelete, sendLike) {
    this._initialCard = initialCard;
    this._templateSelector = templateSelector;
    this._openPopupView = openPopupView;
    this._openPopupDelete = openPopupDelete;
    this._myId = initialCard.myId;
    this._ownerId = initialCard.owner._id;
    this._cardId = initialCard._id;
    this._likes = initialCard.likes
    this._likesLength = initialCard.likes.length
    this._sendLike = sendLike
    this._cloneElementCard = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    this._cardTrash = this._cloneElementCard.querySelector('.element__del-button');
    this._cardImage = this._cloneElementCard.querySelector('.element__img');
    this._cardCaption = this._cloneElementCard.querySelector('.element__text');
    this._cardLike = this._cloneElementCard.querySelector('.element__like');
    this._likesCounter = this._cloneElementCard.querySelector('.element__counter');
  }

  _handleLike = () => {
    this._sendLike(this._cardLike, this._cardId)
  }

  _handleTrash = () => {
    this._openPopupDelete({ card: this, cardId: this._cardId })
  }

  _handleOpenPopup = () => {
    this._openPopupView(this._initialCard);
  }

  _setVisibilityTrash = () => {
    if (this._myId === this._ownerId) { this._cardTrash.style.visibility = "visible" } else { this._cardTrash.style.visibility = "hidden" };
  }

  _checkingLikes() {
    this._likes.forEach(element => {
      if (element._id === this._myId) {
        this._cardLike.classList.add('element__like_type_active');
        return;
      }
    })
    this._likesCounter.textContent = this._likesLength
  }

  toggelLike(likes) {
    this._cardLike.classList.toggle('element__like_type_active');
    this._likesCounter.textContent = likes.length;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', this._handleLike);
    this._cardTrash.addEventListener('click', this._handleTrash);
    this._cardImage.addEventListener('click', this._handleOpenPopup);
  }

  generateCard() {
    this._cardImage.src = this._initialCard.link;
    this._cardImage.alt = this._initialCard.name;
    this._cardCaption.textContent = this._initialCard.name;
    this._setVisibilityTrash();
    this._checkingLikes();
    this._setEventListeners();
    return this._cloneElementCard;
  }

  deleteCard() {
    this._cloneElementCard.remove();
    this._cloneElementCard = null;
  }
}
