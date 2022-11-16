import TopThreeStore from './TopThreeStore';

const context = describe;

describe('TopThreeStore', () => {
  let topThreeStore;

  beforeEach(() => {
    topThreeStore = new TopThreeStore();
  });

  context('User clicks the top three menu', () => {
    it('loads information of top three places', async () => {
      await topThreeStore.fetchTopThreePlaces();

      expect(topThreeStore.topThreePlaces.length).toBe(3);
      expect(topThreeStore.topThreePlaces[0]).toStrictEqual({
        placeId: 4,
        name: '과천 서울랜드',
        address: {
          fullAddress: '경기도 과천시 블라블라',
          sido: '경기',
          sigungu: '과천시',
        },
        averageRate: '4.6',
      });
    });
  });
});
