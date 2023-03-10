const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__container');
const popupSaveButton = form.querySelector('.popup__save-button');
const nameInput = form.querySelector('.popup__input-box popup__input-box_place_name');
const jobInput = form.querySelector('.popup__input-box popup__input-box_place_job');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');



function openPopup () {
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');

}

function closePopupByClickOnOverlay (event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    closePopup();
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();

}


popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('click', closePopupByClickOnOverlay);
form.addEventListener('submit', handleFormSubmit);

