/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class UserReviewApiService {
  async fetchUsersReviews(placeId) {
    const url = `${baseUrl}/user-reviews/${placeId}`;
    const { data } = await axios.get(url);
    return data;
  }

  async postMyReview(placeId, dateOfVisit, rate, body) {
    // TODO. 추후 headers 보내서 작성자가 누군지 확인해야 함(닉네임 추가 필요)
    const url = `${baseUrl}/user-reviews/${placeId}`;

    const { data } = await axios.post(url, {
      placeId, dateOfVisit, rate, body,
    });

    return data;
  }
}

export const userReviewApiService = new UserReviewApiService();
