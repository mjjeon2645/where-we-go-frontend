// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupPlaces() {
    this.amOnPage(`${backdoorBaseUrl}/setup-place-database`);
  },

  setupPlaceId0() {
    this.amOnPage(`${backdoorBaseUrl}/setup-id0-place-database`);
  },

  setupBlogReviews() {
    this.amOnPage(`${backdoorBaseUrl}/setup-blog-review-database`);
  },

  setUpBlogReviewId0() {
    this.amOnPage(`${backdoorBaseUrl}/setup-blog-review-database-id0`);
  },

  setupUserReviews() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user-review-database`);
  },

  setupUserReviewsId0() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user-review-database-id0`);
  },
});
