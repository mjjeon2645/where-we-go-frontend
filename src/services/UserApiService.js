/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async sendKakaoAuthorizationCode(code) {
    const url = `${baseUrl}/oauth/kakao-token`;
    const { data } = await axios.get(url, { params: { code } });
    return data;
  }

  async sendNaverAuthorizationCode(code) {
    const url = `${baseUrl}/oauth/naver-token`;
    const { data } = await axios.get(url, { params: { code } });
    console.log(data);

    return data;
  }

  async fetchUserInformation(userId) {
    const url = `${baseUrl}/users/${userId}`;
    const { data } = await axios.get(url);

    return data;
  }

  async requestChangingNickname(userId, nickname) {
    const url = `${baseUrl}/users/${userId}/nickname`;
    const data = await axios.patch(url);
  }
}

export const userApiService = new UserApiService();
