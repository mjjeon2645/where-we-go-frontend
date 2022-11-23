/* eslint-disable class-methods-use-this */
import { userReviewApiService } from '../services/UserReviewApiService';
import formatDate from '../utils/dateOfVisitFormatter';
import Store from './Store';

export default class UserReviewStore extends Store {
  constructor() {
    super();

    this.averageRate = '';
    this.userReviews = [];
    this.myReviewAtThePlace = {};

    this.myDateOfVisit = formatDate(new Date());
    this.myRate = 0;
    this.myReview = '';
  }

  async fetchUsersReviews(placeId) {
    const {
      averageRate, userReviews, userReview,
    } = await userReviewApiService.fetchUsersReviews(placeId);
    this.averageRate = averageRate;
    this.userReviews = userReviews;
    this.myReviewAtThePlace = userReview;
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
    this.myDateOfVisit = new Date();
    this.myRate = 0;
    this.myReview = '';
    this.publish();
  }

  async postMyReview(placeId, date, rate, review) {
    await userReviewApiService.postMyReview(placeId, date, rate, review);
    this.publish();
  }

  async deleteReview(placeId, reviewId) {
    await userReviewApiService.deleteReview(reviewId);
    this.fetchUsersReviews(placeId);
  }
}

export const userReviewStore = new UserReviewStore();
