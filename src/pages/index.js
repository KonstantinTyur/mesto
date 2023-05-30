import '../pages/index.css';
import Card from '../scripts/components/Card.js'
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWhithForm from '../scripts/components/PopupWithForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard';
import {
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
} from '../scripts/utils/constants.js';

import Api from '../scripts/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '7e564180-9564-4e45-ae8e-cf9b53a2c512',
    'Content-Type': 'application/json'
  }
})

const userInfo = new UserInfo(profileParameters);

const popupViewImage = new PopupWithImage(popupViewImageSelector);
popupViewImage.setEventListeners();

/* Попап удаления карточки */
const popupDeleteFormCard = new PopupDeleteCard(popupDeleteCardSelector, ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      popupDeleteFormCard.closePopup();
    })
    .catch(error => console.error(`Проблема при удалении карточки: ${error}`))
    .finally()
});
popupDeleteFormCard.setEventListeners();

/* f создания карточки */
function createCard(initialCard) {
  const card = new Card(initialCard, templateSelector, popupViewImage.openPopup, popupDeleteFormCard.openPopup, (likeElement, cardId) => {
    if (likeElement.classList.contains('element__like_type_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.toggelLike(res.likes)
        })
        .catch(error => console.error(`Проблема при удалении лайка: ${error}`))
    } else {
      api.addLike(cardId)
        .then(res => {
          card.toggelLike(res.likes)
        })
        .catch(error => console.error(`Проблема при добавлении лайка: ${error}`))
    }
  });
  return card.generateCard();
}

/* Создание начальных карточек */
const section = new Section((element) => {
  section.addItemAppend(createCard(element))
},
  cardListSelector);

/* Попап редактирования данных профиля. Отправляем на сервер измененные данные и послед подтверждения меняем их на странице*/
const popupProfileForm = new PopupWhithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)//отправили данные на сервер
    .then(res => {                    //когда все прошло нормально получили объект с новыми свойствами name, job, avatar
      userInfo.setUserInfo(res)
    })
    .catch(error => console.error(`Проблема при редактировании данных пользователя на странице: ${error}`))
    .finally(() => popupProfileForm.setdefaultTextBtn())
  popupProfileForm.closePopup();
});
popupProfileForm.setEventListeners();

/* Попап создания карточки */
const popupCreateCard = new PopupWhithForm(popupCardSelector, (data) => {
  api.addNewCard(data)
    .then(initialCard => {
      initialCard.myId = userInfo.getId();
      section.addItemPrepend(createCard(initialCard));
      popupCreateCard.closePopup();
    })
    .catch(error => console.error(`Проблема при создании новой карточки на странице: ${error}`))
    .finally(() => popupCreateCard.setdefaultTextBtn())
});
popupCreateCard.setEventListeners();

/* Попап обновления иконки аватара*/
const popupUpdateAvatar = new PopupWhithForm(popupAvatarSelector, (data) => {
  api.setAvatar(data)
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch(error => console.error(`Проблема при изменении аватара на странице: ${error}`))
    .finally(() => popupUpdateAvatar.setdefaultTextBtn())
  // document.querySelector('.profile__avatar').src = data.avatar;
  popupUpdateAvatar.closePopup();
});
popupUpdateAvatar.setEventListeners();


/* Валидация popup Profile */
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

/* Валидация popup Card */
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();

/*Валидация popup Avatar */
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

/* Слушатель клика на кнопку редактирования персональных данных  в секции Profile */
profileBtnEdit.addEventListener('click', () => {
  profileFormValidator.resetValidation();
  popupProfileForm.setInputValues(userInfo.getUserInfo());
  popupProfileForm.openPopup();
});

/* Слушатель клика на кнопку добавления карточек в секции Card */
profileBtnAdd.addEventListener('click', () => {
  cardFormValidator.resetValidation();
  popupCreateCard.openPopup();
});

/* Слушатель клика на иконку аватара */
profileBtnAvatarUpdate.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  popupUpdateAvatar.openPopup();
});

/* Получаем с сервера данные пользователя  и сами карточки. Вставляем их на страницу */
Promise.all([api.getUser(), api.getCards()])
  .then(([dataUser, initialCards]) => {
    initialCards.forEach((initialCard) => { initialCard.myId = dataUser._id })
    userInfo.setId(dataUser._id);
    userInfo.setUserInfo(dataUser);
    section.initialCardsArray(initialCards);

  })
  .catch(error => console.error(`Проблема при первоначальном заполнении страницы данными с сервера: ${error}`))
