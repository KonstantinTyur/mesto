export default class Section {
  constructor({ items, renderer }, sectionContainer) {
    this._sectionContainer = document.querySelector(sectionContainer);
    this._initialCards = items;
    this.renderer = renderer
  }

  initialCardsArray()  {
    this._initialCards.forEach(element => {
      this.addItem(this.renderer(element))
    })
  }

  addItem(domElement) {
      this._sectionContainer.prepend(domElement)
  }
}
