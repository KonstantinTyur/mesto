export default class UserInfo {
  constructor(profileParameters) {
    this._profileName = document.querySelector(profileParameters.nameSelector);
    this._profileJob = document.querySelector(profileParameters.jobSelector);
    this._profileAvatar = document.querySelector(profileParameters.avatarSelector);
  }

  getUserInfo() {
    return { name: this._profileName.textContent, job: this._profileJob.textContent }
  }

  setUserInfo(userData) {
    if(userData.name) {this._profileName.textContent = userData.name}/* else {console.log('Не получено с сервера "userData.name"')}*/;
    if(userData.about) {this._profileJob.textContent = userData.about}/* else {console.log('Не получено с сервера "userData.about"')}*/;
    if(userData.avatar) {this._profileAvatar.src = userData.avatar}/* else {console.log('Не получено с сервера "userData.avatar"')}*/;
  }

  setId(id) {
    this._id = id
  }

  getId() {
    return this._id
  }
}
