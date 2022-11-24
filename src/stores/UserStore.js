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

      return { userId, accessToken, state };
    } catch (error) {
      return '';
    }
  }

  async fetchUserInformation(userId) {
    const information = await userApiService.fetchUserInformation(userId);

    this.userInformation = information;

    this.publish();
  }

  async changeNickname(userId, text) {
    try {
      const changedNickname = await userApiService.requestChangingNickname(userId, text);
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

  async requestSignUp(userId, nickname) {
    try {
      const data = await userApiService.requestSignUp(userId, nickname);
      this.clearError();
      return data;
    } catch (error) {
      this.errorCode = error.response.data.code;
      this.errorMessage = error.response.data.message;
      this.publish();
      return '';
    }
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

  async fetchChildren(userId) {
    const data = await userApiService.fetchChildren(userId);
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

  async addChild(userId) {
    try {
      const children = await userApiService.addChild(userId, this.birthday, this.gender);
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

  async deleteChild(userId, childId) {
    await userApiService.deleteChild(userId, childId);
    this.fetchChildren(userId);
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
