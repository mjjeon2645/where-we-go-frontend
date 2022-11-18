import { blogReviewApiService } from '../services/BlogReviewApiService';

import Store from './Store';

export default class BlogReviewStore extends Store {
  constructor() {
    super();

    this.blogReveiws = [];
  }

  async fetchBlogReviews(id) {
    const blogReviews = await blogReviewApiService.fetchBlogReviews(id);
    this.blogReviews = blogReviews;
    this.publish();
  }
}

export const blogReviewStore = new BlogReviewStore();
