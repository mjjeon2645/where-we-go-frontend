import UserReviewStore from './UserReviewStore';

const context = describe;

describe('UserReviewStore', () => {
  let userReviewStore;

  beforeEach(() => {
    userReviewStore = new UserReviewStore();
  });

  context('A user clicks a user review tap about place id 4', () => {
    it('loads user reviews related the place id 4', async () => {
      await userReviewStore.fetchUsersReviews(4);

      expect(userReviewStore.averageRate).toBe('4.25');
      expect(userReviewStore.userReviews).toStrictEqual(
        [
          {
            placeId: 4,
            dateOfVisit: '2022-01-03',
            rate: 4,
            body: '정말 재밌었어요 최고!',
          },
          {
            placeId: 4,
            dateOfVisit: '2022-03-03',
            rate: 5,
            body: '너무 재미있었어요!',
          },
        ],
      );
    });
  });
});
