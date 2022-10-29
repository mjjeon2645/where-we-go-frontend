import MapStore from './MapStore';

const context = describe;

describe('MapStore', () => {
  let mapStore;

  beforeEach(() => {
    mapStore = new MapStore();
  });

  context('There is 5 elements array of positions in database', () => {
    it('positions variable has an empty array', () => {
      mapStore.fetchAllPositions();

      expect(mapStore.positions).toStrictEqual([
        {
          title: '덕수궁',
          latitude: 37.565804,
          longitude: 126.975146,
        },
        {
          title: '국립중앙박물관',
          latitude: 37.523850,
          longitude: 126.980470,
        },
        {
          title: '서울숲공원',
          latitude: 37.544387,
          longitude: 127.037442,
        },
        {
          title: '양양 쏠비치',
          latitude: 38.086867,
          longitude: 128.665343,
        },
        {
          title: '과천 서울랜드',
          latitude: 37.434156,
          longitude: 127.020126,
        },
      ]);
    });
  });
});
