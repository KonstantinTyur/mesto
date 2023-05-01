import Card from './Card.js'
import FormValidator from './FormValidator.js';


// /* f создания карточек */
function createCard(element) {
  const card = new Card(element, templateSelector, openPopupView);
  const cardElement = card.generateCard();
  return cardElement;
}

/* заполнения страницы карточками из массива*/
initialCards.forEach((element) => {
  cardList.append(createCard(element));
});

/* f открытия любого popup */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);
}

/* f закрытия любого popup */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnEsc);
}

/* f закрытия любого popup кликом по оверлею*/
function closePopupByClickOnOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  } {
    closePopup(evt.currentTarget);
  }
}

/* f закрытия любого popup по Esc */
function closePopupByClickOnEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

/* f редактирования данных на странице через popup Profile */
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileInputName.value;
  profileDescription.textContent = popupProfileInputJob.value;
  closePopup(popupProfile);
}

/* f добавления карточек на страницу через popup Card */
function handleFormAddCardSubmit(evt) {
  evt.preventDefault();
  cardList.prepend(createCard({ name: popupAddCardInputTitle.value, link: popupAddCardInputUrl.value }));
  closePopup(popupAddCard);
  evt.target.reset();
};

/* Слушатель клика на кнопку крестик в любом popup */
closeButtons.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
});

/* Слушатель клика на кнопку редактирования персональных данных  в секции Profile */
profileBtnEdit.addEventListener('click', () => {
  profileFormValidator.resetValidation();
  popupProfileInputName.value = profileTitle.textContent;
  popupProfileInputJob.value = profileDescription.textContent;
  openPopup(popupProfile);

});

/* Слушатель клика на кнопку добавления карточек в секции Card */
profileBtnAdd.addEventListener('click', () => {
  cardFormValidator.resetValidation();
  openPopup(popupAddCard);

});

/* Слушатель клика на кнопку Сохранить в секции Profile */
profileForm.addEventListener('submit', handleFormProfileSubmit);

/* Слушатель клика на кнопку Создать в секции Card */
cardForm.addEventListener('submit', handleFormAddCardSubmit);

/* Слушатель клика по оверлею */
popupElements.forEach((popupItem) => popupItem.addEventListener('click', closePopupByClickOnOverlay))

/* f открытия popupView*/
function openPopupView (object) {
  popupImg.src = object.link;
  popupImg.alt = object.name;
  popupCapt.textContent = object.name;
  openPopup(popupView);
}

/* Валидация popup Profile */
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

/* Валидация popup Profile */
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();
