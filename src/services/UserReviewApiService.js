/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserReviewApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async fetchUsersReviews(placeId) {
    const url = `${baseUrl}/user-reviews/${placeId}`;
    const { data } = await axios.get(url);
    return data;
  }

  async postMyReview(placeId, dateOfVisit, rate, body) {
    const url = `${baseUrl}/user-reviews/${placeId}`;

    const { data } = await axios.post(url, {
      placeId, dateOfVisit, rate, body,
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }
}

export const userReviewApiService = new UserReviewApiService();
