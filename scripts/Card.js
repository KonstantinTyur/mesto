export default class Card {
  constructor(initialCards, templateSelector, openPopupView) {
    this._initialCards = initialCards;
    this._templateSelector = templateSelector;
    this._openPopupView = openPopupView;
  }

  _getTemplate () {
    const cardItem = document.querySelector(templateSelector).content.querySelector('.elements__item').cloneNode(true);
    return cardItem;
  }

  _handleLike = () =>  {
    this._cardLike.classList.toggle('element__like_type_active')
  };

  _handleTrash = () => {
    this._element.remove();
    this._element = null;
  }

  _handleOpenPopup = () => {
    this._openPopupView (this._initialCards);
  }


  _setEventListeners () {
    this._cardLike.addEventListener('click', this._handleLike );
    this._cardTrash.addEventListener('click', this._handleTrash);
    this._cardImage.addEventListener('click', this._handleOpenPopup);
  }


  generateCard () {
    this._element = this._getTemplate();
    this._cardTrash = this._element.querySelector('.element__del-button');
    this._cardImage = this._element.querySelector('.element__img');
    this._cardCaption = this._element.querySelector('.element__text');
    this._cardLike = this._element.querySelector('.element__like');
    this._cardImage.src = this._initialCards.link;
    this._cardImage.alt = this._initialCards.name;
    this._cardCaption.textContent = this._initialCards.name;
    this._setEventListeners();
    return this._element;
  }
}


