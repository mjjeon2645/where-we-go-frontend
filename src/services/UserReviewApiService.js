/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserReviewApiService {
  async fetchUserReviews(placeId) {
    const url = `${baseUrl}/user-reviews/${placeId}`;
    const { data } = await axios.get(url);
    return data;
  }
}

export const userReviewApiService = new UserReviewApiService();
