import { userApiService } from '../services/UserApiService';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.accessToken = '';
    this.nickName = '';
  }

  async sendKakaoAuthorizationCode(code) {
    const userInformation = await userApiService.sendKakaoAuthorizationCode(code);

    this.accessToken = userInformation.accessToken;
    this.nickName = userInformation.nickName;
    this.publish();
  }
}

export const userStore = new UserStore();
