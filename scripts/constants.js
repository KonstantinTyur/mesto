/* ~ по работе с секцией profile */
const profileBtnEdit = document.querySelector('.profile__edit-button');
const profileBtnAdd = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

/* ~ по выборке всех попапов */
const popupElements = document.querySelectorAll('.popup');


/* ~ по выборке popup кнопок закрыть у всех попапов */
const closeButtons = document.querySelectorAll('.popup__close-button');
const saveButtons = document.querySelectorAll('.popup__save-button');


/* ~ по работе с popup Profile*/
const popupProfile = document.querySelector('.popup_type_profile');
const profileForm = document.forms["profile-form"];
const popupProfileInputName = popupProfile.querySelector('.popup__input-box_type_name');
const popupProfileInputJob = popupProfile.querySelector('.popup__input-box_type_job');

/* ~ по работе с popup Card*/
const popupAddCard = document.querySelector('.popup_type_card');
const cardForm = document.forms["card-form"];
const popupAddCardInputTitle = popupAddCard.querySelector('.popup__input-box_type_title');
const popupAddCardInputUrl = popupAddCard.querySelector('.popup__input-box_type_url');

/* ~ по работе с popup Image*/
const popupView = document.querySelector('.popup_type_view')
const popupImg = popupView.querySelector('.popup__image');
const popupCapt = popupView.querySelector('.popup__caption');

/* ~ массив с карточками */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// /* ~ по выбору содержимого тега template */
// const cardElementTemplate = document.querySelector('#cardElementTemplate').content;

/* ~ для выбора места вставки в список ul */
const cardList = document.querySelector('.elements');

/* объект с параметрами для валидации */
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-box',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_disabled',
  inputErrorClass: 'popup__input-box_type_error',
  errorClass: 'popup__error_type_visible'
};


const templateSelector = '#cardElementTemplate';


