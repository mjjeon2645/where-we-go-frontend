import { userApiService } from '../services/UserApiService';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.nickname = '';
    this.userInformation = {};

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
    const changedNickname = await userApiService.requestChangingNickname(userId, text);

    this.nickname = changedNickname;
    this.publish();
  }

  async requestSignUp(userId, nickname) {
    try {
      const data = await userApiService.requestSignUp(userId, nickname);
      return data;
    } catch (error) {
      this.errorMessage = error.response.data;
      this.publish();
      console.log(this.errorMessage);
      return '';
    }
  }

  clearUserState() {
    this.nickname = '';
    this.publish();
  }
}

export const userStore = new UserStore();
