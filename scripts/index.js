/* f создания карточек */
function createCard(object) {
  const cardItem = cardElementTemplate.querySelector('.elements__item').cloneNode(true);
  const cardTrash = cardItem.querySelector('.element__del-button');
  const cardImage = cardItem.querySelector('.element__img');
  const cardCaption = cardItem.querySelector('.element__text');
  const cardLike = cardItem.querySelector('.element__like');

  cardItem.querySelector('.element').ariaLabel = object.name;
  cardCaption.textContent = object.name;
  cardImage.alt = object.name;
  cardImage.src = object.link;

  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('element__like_type_active');
  });

  cardTrash.addEventListener('click', () => {
    cardItem.remove();
  });

  cardImage.addEventListener('click', () => {
    openPopup(popupView);
    popupImg.src = object.link;
    popupImg.alt = object.name;
    popupCapt.textContent = object.name;
  });

  return cardItem;
}

/* заполнения страницы карточками из массива*/
initialCards.forEach((element) => {
  const card = createCard(element);
  cardList.append(card);
})

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
  } else {
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
  resetSettingsValidationErrorAndButtonSubmitWhenOpeningPopup(profileForm);
  popupProfileInputName.value = profileTitle.textContent;
  popupProfileInputJob.value = profileDescription.textContent;
  openPopup(popupProfile);

});

/* Слушатель клика на кнопку добавления карточек в секции Card */
profileBtnAdd.addEventListener('click', () => {
  resetSettingsValidationErrorAndButtonSubmitWhenOpeningPopup(cardForm);
  openPopup(popupAddCard);

});

/* Слушатель клика на кнопку Сохранить в секции Profile */
profileForm.addEventListener('submit', handleFormProfileSubmit);

/* Слушатель клика на кнопку Создать в секции Card */
cardForm.addEventListener('submit', handleFormAddCardSubmit);

/* Слушатель клика по оверлею */
popupElements.forEach((popupItem) => popupItem.addEventListener('click', closePopupByClickOnOverlay))




















