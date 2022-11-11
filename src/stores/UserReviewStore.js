import { userReviewApiService } from '../services/UserReviewApiService';

export default class UserReviewStore {
  constructor() {
    this.listeners = new Set();

    this.averageRate = '';
    this.userReveiws = [];
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

  async fetchUserReviews(placeId) {
    const { averageRate, userReviews } = await userReviewApiService.fetchUserReviews(placeId);
    this.averageRate = averageRate;
    this.userReviews = userReviews;
    this.publish();
  }
}

export const userReviewStore = new UserReviewStore();
