export default class Section {
  constructor(renderer, sectionContainer) {
    this._sectionContainer = document.querySelector(sectionContainer);
    // this._initialCards = items;
    this.renderer = renderer
  }

  initialCardsArray(items) {
    items.forEach(item => {
      this.renderer(item)
    })
  }

  addItemPrepend(domElement) {
    this._sectionContainer.prepend(domElement)
  }

  addItemAppend(domElement) {
    this._sectionContainer.append(domElement)
  }
}
