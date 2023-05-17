const profileBtnEdit = document.querySelector('.profile__edit-button');
const profileBtnAdd = document.querySelector('.profile__add-button');
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

/* ~ массив с карточками */
const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
const popupViewImageSelector = '.popup_type_view';

const cardListSelector = '.elements';

const profileParameters = {
  nameSelector: '.profile__title',
  jobSelector: '.profile__description'
};

const popupProfileSelector = '.popup_type_profile';
const popupCardSelector = '.popup_type_card';

export {
  profileBtnEdit,
  profileBtnAdd,
  profileForm,
  cardForm,
  initialCards,
  validationConfig,
  templateSelector,
  popupViewImageSelector,
  cardListSelector,
  profileParameters,
  popupProfileSelector,
  popupCardSelector
}
