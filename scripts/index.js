

const profileBtnEdit = document.querySelector('.profile__edit-button');
const profileBtnAdd = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelectorAll('.popup__close-button');

const popupProfile = document.querySelector('.popup_type_profile');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupProfileInputName = popupProfile.querySelector('.popup__input-box_type_name');
const popupProfileInputJob = popupProfile.querySelector('.popup__input-box_type_job');



const popupAddCard = document.querySelector('.popup_type_card');
const popupAddCardInputLegend = popupAddCard.querySelector('.popup__input-box_type_legend');
const popupAddCardInputUrl = popupAddCard.querySelector('.popup__input-box_type_url');

const cardElementTemplate = document.querySelector('#cardElementTemplate').content;
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

function openPopup (popup) {
    popup.classList.add('popup_opened');

}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent =  popupProfileInputName.value;
    profileDescription.textContent = popupProfileInputJob.value;
    closePopup(popupProfile);
}

function handleFormAddCardSubmit (evt) {
  evt.preventDefault();
}



profileBtnEdit.addEventListener('click', () => {
  popupProfileInputName.value = profileTitle.textContent;
  popupProfileInputJob.value = profileDescription.textContent;
  openPopup(popupProfile);
});

profileBtnAdd.addEventListener('click', () => {
  popupAddCardInputLegend.value =

  openPopup(popupAddCard);
})





popupBtnClose.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => closePopup(popup));
});


