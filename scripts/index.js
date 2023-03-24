
/* ~ по работе с секцией profile */
const profileBtnEdit = document.querySelector('.profile__edit-button');
const profileBtnAdd = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

/* ~ по выборке popup кнопок закрыть у всех попапов */
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelectorAll('.popup__close-button');


/* ~ по работе с popup Profile*/
const popupProfile = document.querySelector('.popup_type_profile');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupProfileInputName = popupProfile.querySelector('.popup__input-box_type_name');
const popupProfileInputJob = popupProfile.querySelector('.popup__input-box_type_job');

/* ~ по работе с popup Card*/
const popupAddCard = document.querySelector('.popup_type_card');
const popupFormCard = popupAddCard.querySelector('.popup__form');
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

/* ~ по выбору содержимого тега template */
const cardElementTemplate = document.querySelector('#cardElementTemplate').content;

/* ~ для выбора места вставки в список ul */
const cardList = document.querySelector('.elements');

/* f создания карточек */
function createCard (object) {
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
    popupCapt.textContent = object.name;;
  });

  return cardItem;
}

/* заполнения страницы карточками из массива*/
initialCards.forEach((element) => {
  const card = createCard(element);
  cardList.append(card);
})


/* f открытия любого popup */
function openPopup (popup) {
    popup.classList.add('popup_opened');
}

/* f закрытия любого popup */
function closePopup (popup) {
    popup.classList.remove('popup_opened');
}


/* f редактирования данных на странице через popup Profile */
function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent =  popupProfileInputName.value;
    profileDescription.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
}


/* f добавления карточек на страницу через popup Card */
function handleFormAddCardSubmit (evt) {
  evt.preventDefault();
  cardList.prepend(createCard({name: popupAddCardInputTitle.value, link: popupAddCardInputUrl.value}));
  closePopup(popupAddCard);
  evt.target.reset();
  };


  /* Слушатель клика на кнопку крестик в любом popup */
popupBtnClose.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
});

/* Слушатель клика на кнопку редактирования персональных данных  в секции Profile */
profileBtnEdit.addEventListener('click', () => {
  popupProfileInputName.value = profileTitle.textContent;
  popupProfileInputJob.value = profileDescription.textContent;
  openPopup(popupProfile);
});

/* Слушатель клика на кнопку добавления карточек в секции Card */
profileBtnAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
});








/* Слушатель клика на кнопку Сохранить в секции Profile */
popupFormProfile.addEventListener('submit', handleFormProfileSubmit);

/* Слушатель клика на кнопку Создать в секции Card */
popupFormCard.addEventListener('submit', handleFormAddCardSubmit);
















