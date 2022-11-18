/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserApiService {
  async sendKakaoAuthorizationCode(code) {
    const url = `${baseUrl}/oauth/kakao-token`;
    const { data } = await axios.get(url, { params: { code } });

    return data;
  }
}

export const userApiService = new UserApiService();