import MapStore from './MapStore';

const context = describe;

describe('MapStore', () => {
  let mapStore;

  beforeEach(() => {
    mapStore = new MapStore();
  });

  context('There is no array of positions in database', () => {
    it('positions variable has an empty array', () => {
      mapStore.fetchAllPositions();

      expect(mapStore.positions).toBe([]);
    });
  });
});
