import '../pages/index.css';
import Card from '../scripts/components/Card.js'
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWhithForm from '../scripts/components/PopupWithForm.js';
import {
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
} from '../scripts/utils/constants.js';



const userInfo = new UserInfo(profileParameters);

const popupViewImage = new PopupWithImage(popupViewImageSelector);
popupViewImage.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, templateSelector, popupViewImage.openPopup);
    return card.generateCard();
  }
},
  cardListSelector);
section.initialCardsArray();


const popupProfileForm = new PopupWhithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfileForm.getInputValues());
  popupProfileForm.closePopup();
});
popupProfileForm.setEventListeners();


const popupCreateCard = new PopupWhithForm(popupCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupCreateCard.getInputValues()));
  popupCreateCard.closePopup();
});
popupCreateCard.setEventListeners();


/* Валидация popup Profile */
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

/* Валидация popup Profile */
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();


/* Слушатель клика на кнопку редактирования персональных данных  в секции Profile */
profileBtnEdit.addEventListener('click', () => {
  profileFormValidator.resetValidation();
  // popupProfileInputName.value = profileTitle.textContent;
  // popupProfileInputJob.value = profileDescription.textContent;
  // console.log(popupProfileForm);
  popupProfileForm.setInputValues(userInfo.getUserInfo());
  popupProfileForm.openPopup();
});

/* Слушатель клика на кнопку добавления карточек в секции Card */
profileBtnAdd.addEventListener('click', () => {
  cardFormValidator.resetValidation();
  popupCreateCard.openPopup();
});
