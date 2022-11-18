/* eslint-disable class-methods-use-this */
import { userReviewApiService } from '../services/UserReviewApiService';
import formatDate from '../utils/dateOfVisitFormatter';
import Store from './Store';

export default class UserReviewStore extends Store {
  constructor() {
    super();

    this.averageRate = '';
    this.userReviews = [];

    this.myDateOfVisit = formatDate(new Date());
    this.myRate = 0;
    this.myReview = '';
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
    this.myDateOfVisit = new Date();
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
