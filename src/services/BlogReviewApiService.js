/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class BlogReviewApiService {
  async fetchBlogReviews(id) {
    const url = `${baseUrl}/blog-reviews/${id}`;
    const { data } = await axios.get(url);
    return data;
  }
}

export const blogReviewApiService = new BlogReviewApiService();
