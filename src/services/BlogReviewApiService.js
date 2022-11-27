/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class BlogReviewApiService {
  async fetchBlogReviews(placeId) {
    const url = `${baseUrl}/blog-reviews/${placeId}`;
    const { data } = await axios.get(url);
    console.log(data, 'apiservice');

    return data;
  }
}

export const blogReviewApiService = new BlogReviewApiService();
