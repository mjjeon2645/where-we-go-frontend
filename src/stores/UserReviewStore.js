/* eslint-disable class-methods-use-this */
import { userReviewApiService } from '../services/UserReviewApiService';
import { formatDate, visitOfDateFormatter } from '../utils/dateOfVisitFormatter';
import Store from './Store';

export default class UserReviewStore extends Store {
  constructor() {
    super();

    this.averageRate = '';
    this.userReviews = [];
    this.myReviewAtThePlace = {};

    this.myDateOfVisit = new Date();
    this.myRate = 0;
    this.myReview = '';

    this.error = '';
    this.errorMessage = '';
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
    this.myDateOfVisit = '';
    this.myRate = 0;
    this.myReview = '';
    this.publish();
  }

  async postMyReview(placeId, date, rate, review) {
    if (typeof (date) === 'object') {
      await userReviewApiService.postMyReview(placeId, formatDate(date), rate, review);
      this.publish();
      return;
    }

    await userReviewApiService.postMyReview(placeId, visitOfDateFormatter(date), rate, review);
    this.publish();
  }

  async deleteReview(placeId, reviewId) {
    await userReviewApiService.deleteReview(reviewId);
    this.fetchUsersReviews(placeId);
  }

  setError(errorState, errorMessage) {
    this.errorState = errorState;
    this.errorMessage = errorMessage;
    this.publish();
  }

  clearError() {
    this.errorState = '';
    this.errorMessage = '';
  }

  get isDateOfVisitEmpty() {
    return this.errorState === 'dateOfVisit';
  }

  get isRateEmpty() {
    return this.errorState === 'rate';
  }

  get isReviewEmpty() {
    return this.errorState === 'review';
  }
}

export const userReviewStore = new UserReviewStore();
