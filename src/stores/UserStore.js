import { userApiService } from '../services/UserApiService';

/* eslint-disable class-methods-use-this */
export default class UserStore {
  constructor() {
    this.listeners = new Set();

    this.authorizationCode = '';
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  sendKakaoAuthorizationCode(code) {
    const accessToken = userApiService.sendKakaoAuthorizationCode(code);

    this.publish();
  }
}

export const userStore = new UserStore();
