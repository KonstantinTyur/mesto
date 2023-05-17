export default class UserInfo {
  constructor(profileParameters) {
    this._profileName = document.querySelector(profileParameters.nameSelector);
    this._profileJob = document.querySelector(profileParameters.jobSelector);
  }
getUserInfo () {
  return {name: this._profileName.textContent, job: this._profileJob.textContent}
}
setUserInfo(objectUser) {
  this._profileName.textContent = objectUser.name;
  this._profileJob.textContent = objectUser.job;
}
}
