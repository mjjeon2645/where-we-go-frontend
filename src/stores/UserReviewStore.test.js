import UserReviewStore from './UserReviewStore';

const context = describe;

describe('UserReviewStore', () => {
  let userReviewStore;

  beforeEach(() => {
    userReviewStore = new UserReviewStore();
  });

  context('A user clicks a user review tap about place id 4', () => {
    it('loads user reviews related the place id 4', () => {
      // TODO
      userReviewStore.fetchUsersReviews(4);
    });
  });
});
