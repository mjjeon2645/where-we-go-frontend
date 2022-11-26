/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserApiService {
  constructor() {
    this.accessToken = '';

    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: { Authorization: `Bearer ${this.accessToken}` },
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async sendKakaoAuthorizationCode(code) {
    const { data } = await this.instance
      .get('/oauth/kakao-token', { params: { code } });
    return data;
  }

  async sendNaverAuthorizationCode(code) {
    const url = `${baseUrl}/oauth/naver-token`;
    const { data } = await axios.get(url, { params: { code } });

    return data;
  }

  async fetchUserInformation(userId) {
    const url = `${baseUrl}/users/${userId}`;
    const { data } = await axios.get(url);

    return data;
  }

  async requestChangingNickname(userId, nickname) {
    const url = `${baseUrl}/users/${userId}`;
    const response = await axios.patch(url, { nickname });
    return response;
  }

  async requestSignUp(nickname) {
    const url = `${baseUrl}/users`;
    const response = await axios.post(url, { nickname }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data;
  }

  async toggleBookmark(placeId) {
    const url = `${baseUrl}/bookmarks/${placeId}`;
    const response = await axios.post(url, {}, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data.bookmarkedPlaces;
  }

  async fetchBookmarks() {
    const url = `${baseUrl}/bookmarks`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data.bookmarkedPlaces;
  }

  async fetchChildren(userId) {
    const url = `${baseUrl}/children/${userId}`;
    const response = await axios.get(url);

    return response.data.children;
  }

  async addChild(userId, birthday, gender) {
    const url = `${baseUrl}/children/${userId}`;
    const response = await axios.post(url, {
      birthday, gender,
    });
    return response.data.children;
  }

  async deleteChild(userId, childId) {
    const url = `${baseUrl}/children/${userId}`;
    await axios.delete(url, {
      data: {
        userId, childId,
      },
    });
  }
}

export const userApiService = new UserApiService();
