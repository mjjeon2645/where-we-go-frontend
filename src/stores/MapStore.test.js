import { fireEvent, waitFor } from '@testing-library/react';
import MapStore from './MapStore';

const context = describe;

describe('MapStore', () => {
  let mapStore;

  beforeEach(() => {
    mapStore = new MapStore();
  });

  context('User clicks a marker its id is 4', () => {
    it('loads pop-up about information of the cliked place', async () => {
      mapStore.fetchSelectedPlaceInformation(4);

      await waitFor(() => {
        expect(mapStore.selectedPlace).toStrictEqual({
          placeId: 4,
          name: '과천 서울랜드',
          latitude: 37.434156,
          longitude: 127.020126,
          fullAddress: '경기도 과천시 광명로 181',
          sido: '경기',
          sigungu: '과천시',
          category: '자연',
        });
      });
    });
  });

  // context('A user filtered places he wanted to go', () => {
  //   it('loads filtered positions of places', () => {
  //     mapStore.fetchFilteredPositions('서울', '성동구', '자연');

  //     expect(mapStore.positions).toStrictEqual([
  //       {
  //         placeId: 2,
  //         name: '서울숲 공원',
  //         latitude: 37.544387,
  //         longitude: 127.037442,
  //         fullAddress: '서울특별시 성동구 뚝섬로 273',
  //         sido: '서울',
  //         sigungu: '성동구',
  //         category: '자연',

  //       },
  //     ]);
  //   });
  // });
});
