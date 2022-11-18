import { userApiService } from '../services/UserApiService';
import Store from './Store';

/* eslint-disable class-methods-use-this */
export default class UserStore extends Store {
  constructor() {
    super();

    this.authorizationCode = '';
  }

  sendKakaoAuthorizationCode(code) {
    const accessToken = userApiService.sendKakaoAuthorizationCode(code);

    this.publish();
  }
}

export const userStore = new UserStore();
