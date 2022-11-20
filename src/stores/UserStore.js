import { userApiService } from '../services/UserApiService';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.nickname = '';
  }

  async sendKakaoAuthorizationCode(code) {
    try {
      const {
        accessToken, nickname, state,
      } = await userApiService.sendKakaoAuthorizationCode(code);

      this.nickname = nickname;
      this.publish();

      return { accessToken, state };
    } catch (error) {
      return '';
    }
  }

  async sendNaverAuthorizationCode(code) {
    try {
      const {
        accessToken, nickname, state,
      } = await userApiService.sendNaverAuthorizationCode(code);

      this.nickname = nickname;
      this.publish();

      return { accessToken, state };
    } catch (error) {
      return '';
    }
  }
}

export const userStore = new UserStore();
