export default class Section {
  constructor(renderer, sectionContainer) {
    this._sectionContainer = document.querySelector(sectionContainer);
    this.renderer = renderer
  }

  renderItems(items) {
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
