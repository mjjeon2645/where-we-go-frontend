/* eslint-disable class-methods-use-this */
import { userReviewApiService } from '../services/UserReviewApiService';

export default class UserReviewStore {
  constructor() {
    this.listeners = new Set();

    this.averageRate = '';
    this.userReveiws = [];

    this.myDateOfVisit = '';
    this.myRate = 0;
    this.myReview = '';
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

  async fetchUsersReviews(placeId) {
    const { averageRate, userReviews } = await userReviewApiService.fetchUsersReviews(placeId);
    this.averageRate = averageRate;
    this.userReviews = userReviews;
    this.publish();
  }

  setMyDateOfVisit(date) {
    this.myDateOfVisit = date;
    this.publish();
  }

  setMyRate(rate) {
    switch (rate) {
    case '⭐️⭐️⭐️⭐️⭐️':
      this.myRate = 5;
      break;

    case '⭐️⭐️⭐️⭐️':
      this.myRate = 4;
      break;

    case '⭐️⭐️⭐️':
      this.myRate = 3;
      break;

    case '⭐️⭐️':
      this.myRate = 2;
      break;

    case '⭐️':
      this.myRate = 1;
      break;

    default:
      break;
    }
    this.publish();
  }

  setMyReview(body) {
    this.myReview = body;
    this.publish();
  }

  clearWritingReviewState() {
    this.myDateOfVisit = '';
    this.myRate = 0;
    this.myReview = '';
    this.publish();
  }

  async postMyReview(placeId, date, rate, review) {
    await userReviewApiService.postMyReview(placeId, date, rate, review);

    // TODO. publish를 해줘야하나????
    this.publish();
  }
}

export const userReviewStore = new UserReviewStore();
