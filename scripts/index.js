const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__container');
const nameInput = form.querySelector('.popup__input-box_type_name');
const jobInput = form.querySelector('.popup__input-box_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');



function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', handleFormSubmit);

