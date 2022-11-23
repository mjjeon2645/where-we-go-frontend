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

  async requestSignUp(userId, nickname) {
    const url = `${baseUrl}/users/${userId}`;
    const response = await axios.post(url, { nickname });
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

    console.log(userId);
    console.log(birthday);
    console.log(gender);

    return response;
  }
}

export const userApiService = new UserApiService();
