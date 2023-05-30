const profileBtnAvatarUpdate = document.querySelector('.profile__update-avatar-button')
const profileBtnEdit = document.querySelector('.profile__edit-button');
const profileBtnAdd = document.querySelector('.profile__add-button');
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const avatarForm = document.forms["avatar-form"];

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
  jobSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
};

const popupProfileSelector = '.popup_type_profile';
const popupCardSelector = '.popup_type_card';
const popupAvatarSelector = '.popup_type_avatar';
const popupDeleteCardSelector = '.popup_type_delete';

export {
  profileBtnAvatarUpdate,
  profileBtnEdit,
  profileBtnAdd,
  profileForm,
  cardForm,
  avatarForm,
  validationConfig,
  templateSelector,
  popupViewImageSelector,
  cardListSelector,
  profileParameters,
  popupProfileSelector,
  popupCardSelector,
  popupAvatarSelector,
  popupDeleteCardSelector
}
