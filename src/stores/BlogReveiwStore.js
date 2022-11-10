import { blogReviewApiService } from '../services/BlogReviewApiService';

export default class BlogReviewStore {
  constructor() {
    this.listeners = new Set();

    this.blogReveiws = [];
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  async fetchBlogReviews(id) {
    const blogReviews = await blogReviewApiService.fetchBlogReviews(id);
    this.blogReviews = blogReviews;
    this.publish();
  }
}

export const blogReviewStore = new BlogReviewStore();
