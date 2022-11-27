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

  async trialModeLogin(trialId, password) {
    const url = `${baseUrl}/trial-session`;
    const { data } = await axios.post(url, { trialId, password });

    return data;
  }

  async deleteTrialUser() {
    const url = `${baseUrl}/trial-session`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  async fetchUserInformation() {
    const url = `${baseUrl}/users`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }

  async requestChangingNickname(nickname) {
    const url = `${baseUrl}/users`;
    const response = await axios.patch(url, { nickname }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
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

  async fetchChildren() {
    const url = `${baseUrl}/children`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return response.data.children;
  }

  async addChild(birthday, gender) {
    const url = `${baseUrl}/children`;
    const response = await axios.post(url, {
      birthday, gender,
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data.children;
  }

  async deleteChild(childId) {
    const url = `${baseUrl}/children`;
    await axios.delete(url, {
      data: { childId },
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
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
}

export const userApiService = new UserApiService();
