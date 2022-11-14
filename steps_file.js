// in this file you can append custom step methods to 'I' object

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetAndSetupPlaces() {
    this.amOnPage(`${backdoorBaseUrl}/setup-place-database`);
  },

  resetAndSetupBlogReviews() {
    this.amOnPage(`${backdoorBaseUrl}/setup-blog-review-database`);
  },

  resetAndSetupUserReviews() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user-review-database`);
  },
});
