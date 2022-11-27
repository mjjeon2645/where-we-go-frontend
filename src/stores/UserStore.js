import { userApiService } from '../services/UserApiService';
import formatDate from '../utils/dateOfVisitFormatter';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.nickname = '';
    this.userInformation = {};
    this.bookmarks = [];
    this.children = [];

    this.gender = '';
    this.birthday = formatDate(new Date());

    this.errorCode = 0;
    this.errorMessage = '';
  }

  async sendKakaoAuthorizationCode(code) {
    try {
      const {
        userId, accessToken, nickname, state,
      } = await userApiService.sendKakaoAuthorizationCode(code);

      this.nickname = nickname;
      this.publish();

      return { userId, accessToken, state };
    } catch (error) {
      return '';
    }
  }

  async sendNaverAuthorizationCode(code) {
    try {
      const {
        userId, accessToken, nickname, state,
      } = await userApiService.sendNaverAuthorizationCode(code);

      this.nickname = nickname;
      this.publish();

      return { accessToken, state };
    } catch (error) {
      return '';
    }
  }

  async trialModeLogin(trialId, password) {
    try {
      const {
        accessToken, nickname, state,
      } = await userApiService.trialModeLogin(trialId, password);

      this.nickname = nickname;
      this.publish();

      return { accessToken, state };
    } catch (error) {
      return '';
    }
  }

  async stopTrialMode() {
    await userApiService.deleteTrialUser();
    this.publish();
  }

  async fetchUserInformation() {
    const information = await userApiService.fetchUserInformation();

    this.userInformation = information;

    this.publish();
  }

  async changeNickname(text) {
    try {
      const changedNickname = await userApiService.requestChangingNickname(text);
      this.clearError();
      this.nickname = changedNickname;
      this.publish();
      return changedNickname;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
  }

  async requestSignUp(nickname) {
    try {
      const data = await userApiService.requestSignUp(nickname);
      this.clearError();
      return data;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
  }

  async fetchChildren() {
    const data = await userApiService.fetchChildren();
    this.children = data;
    this.publish();
  }

  setBirthday(birthday) {
    this.birthday = birthday;
  }

  setGender(gender) {
    this.gender = gender;
  }

  // TODO. clear state

  async addChild() {
    try {
      const children = await userApiService.addChild(this.birthday, this.gender);
      this.children = children;
      this.publish();
      return children;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
  }

  async deleteChild(childId) {
    await userApiService.deleteChild(childId);
    this.fetchChildren();
  }

  async toggleBookmark(placeId) {
    try {
      const bookmarks = await userApiService.toggleBookmark(placeId);
      this.bookmarks = bookmarks;
      this.publish();
      return bookmarks;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
  }

  async fetchBookmarks() {
    try {
      const data = await userApiService.fetchBookmarks();
      this.bookmarks = data;
      this.publish();
      return data;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
  }

  clearUserState() {
    this.nickname = '';
    this.publish();
  }

  clearError() {
    this.errorCode = 0;
    this.errorMessage = '';
    this.publish();
  }

  clearAddChildState() {
    this.gender = '';
    this.birthday = formatDate(new Date());
  }
}

export const userStore = new UserStore();
