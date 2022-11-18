import { waitFor } from '@testing-library/react';
import MapStore from './MapStore';

const context = describe;

describe('MapStore', () => {
  let mapStore;

  beforeEach(() => {
    mapStore = new MapStore();
  });

  context('A user filtered places he wanted to go', () => {
    it('loads filtered places', async () => {
      await mapStore.fetchFilteredPlaces('서울', '성동구', '자연');

      expect(mapStore.places).toStrictEqual([
        {
          placeId: 4,
          name: '과천 서울랜드',
          address: {
            fullAddress: '서울시 성동구 블라블라',
            sido: '서울',
            sigungu: '성동구',
          },
        },
        {
          placeId: 5,
          name: '서울숲 공원',
          address: {
            fullAddress: '서울시 성동구 블라블라',
            sido: '서울',
            sigungu: '성동구',
          },
        },
      ]);
    });
  });

  context('User clicks a marker its id is 4', () => {
    it('loads pop-up about information of the cliked place', async () => {
      await mapStore.fetchFilteredPlaces('서울', '성동구', '자연');
      await mapStore.selectedPlaceShortInformation(4);

      await waitFor(() => {
        expect(mapStore.selectedPlace).toStrictEqual(
          {
            placeId: 4,
            name: '과천 서울랜드',
            address: {
              fullAddress: '서울시 성동구 블라블라',
              sido: '서울',
              sigungu: '성동구',
            },
          },
        );
      });
    });
  });

  context('User clicks a short information its id is 2', () => {
    it('loads details of place id 2', async () => {
      await mapStore.fetchSelectedPlaceDetail(2);

      expect(mapStore.selectedPlace).toStrictEqual(
        {
          id: 2,
          name: '과천 서울랜드',
          address: {
            fullAddress: '경기도 과천시 블라블라',
            sido: '경기',
            sigungu: '과천시',
          },
          placeServices: {
            reservation: 'possible',
            parking: 'possible',
            outsideFood: 'impossible',
            nursingRoom: 'unchecked',
          },
        },
      );
    });
  });
});
