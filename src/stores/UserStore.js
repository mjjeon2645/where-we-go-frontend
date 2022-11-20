import { userApiService } from '../services/UserApiService';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.accessToken = '';
    this.nickname = '';
  }

  async sendKakaoAuthorizationCode(code) {
    const userInformation = await userApiService.sendKakaoAuthorizationCode(code);

    this.accessToken = userInformation.accessToken;
    this.nickname = userInformation.nickname;
    this.publish();
  }

  async sendNaverAuthorizationCode(code) {
    const userInformation = await userApiService.sendNaverAuthorizationCode(code);

    this.accessToken = userInformation.accessToken;
    this.nickname = userInformation.nickname;
    this.publish();
  }
}

export const userStore = new UserStore();
