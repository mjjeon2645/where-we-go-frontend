import { fireEvent } from '@testing-library/react';
import MapStore from './MapStore';

const context = describe;

describe('MapStore', () => {
  let mapStore;

  beforeEach(() => {
    mapStore = new MapStore();
  });

  context('There is 5 elements array of positions in database', () => {
    it('loads an array of positions of five places', () => {
      mapStore.fetchAllPositions();

      expect(mapStore.positions).toStrictEqual([
        {
          id: 0,
          title: '덕수궁',
          latitude: 37.565804,
          longitude: 126.975146,
        },
        {
          id: 1,
          title: '국립중앙박물관',
          latitude: 37.523850,
          longitude: 126.980470,
        },
        {
          id: 2,
          title: '서울숲 공원',
          latitude: 37.544387,
          longitude: 127.037442,
        },
        {
          id: 3,
          title: '양양 쏠비치',
          latitude: 38.086867,
          longitude: 128.665343,
        },
        {
          id: 4,
          title: '과천 서울랜드',
          latitude: 37.434156,
          longitude: 127.020126,
        },
      ]);
    });
  });

  context('User clicks a marker its id is 4', () => {
    it('loads pop-up about information of the cliked place', () => {
      mapStore.fetchSelectedPlaceInformation(4);

      expect(mapStore.selectedPlace).toStrictEqual({
        id: 4,
        title: '과천 서울랜드',
        position: {
          latitude: 37.434156,
          longitude: 127.020126,
        },
        address: {
          fullAddress: '경기도 과천시 광명로 181',
          city: '경기도',
          area: '과천시',
        },
        type: '자연',
        businessHours: '토요일: 09:00~22:00',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      });
    });
  });

  context('A user filtered places he wanted to go', () => {
    it('loads filtered positions of places', () => {
      mapStore.fetchFilteredPositions('서울', '자연');

      expect(mapStore.positions).toStrictEqual([
        {
          id: 2,
          title: '서울숲 공원',
          latitude: 37.544387,
          longitude: 127.037442,
        },
      ]);
    });
  });
});
