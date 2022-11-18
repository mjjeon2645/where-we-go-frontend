import { render, waitFor } from '@testing-library/react';

import { loadKakaoMap } from '../utils/KakaoMap';

import MapPage from './MapPage';

jest.mock('../utils/KakaoMap');

const fetchFilteredPlaces = jest.fn();
const selectedPlaceShortInformation = jest.fn();
const changeSido = jest.fn();
const changeSigungu = jest.fn();
const changePlaceCategory = jest.fn();
const clearFilterState = jest.fn();

let places;
let selectedPlace;
let sido;
let sigungu;
let category;

jest.mock('../hooks/useMapStore', () => () => ({
  fetchFilteredPlaces,
  selectedPlaceShortInformation,
  changeSido,
  changeSigungu,
  changePlaceCategory,
  clearFilterState,
  places,
  selectedPlace,
  sido,
  sigungu,
  category,
}));

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => (
    navigate
  ),
}));

const context = describe;

describe('MapPage', () => {
  function renderMapPage() {
    render(
      <MapPage />,
    );
  }

  context('A user clicks map menu', () => {
    beforeEach(() => {
      loadKakaoMap.mockImplementation(() => 'KAKAO');
      sido = '';
      sigungu = '';
      category = '';
      places = [
        {
          placeId: 1,
          name: '과천 서울랜드',
          address: {
            fullAddress: '경기도 과천시 광명로 181',
            sido: '경기',
            sigungu: '과천시',
          },
          imageSource: {
            firstImage: 'url',
            secondImage: 'url',
            thirdImage: 'url',
          },
          category: '자연',
          firstImage: 'image',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
          address: {
            fullAddress: '경기도 가평군 설악면 미사리 320-1',
            sido: '경기',
            sigungu: '가평군',
          },
          imageSource: {
            firstImage: 'url',
            secondImage: 'url',
            thirdImage: 'url',
          },
          category: '숙박/캠핑',
          firstImage: 'image',
        },
      ];
    });

    it('renders MapPage', async () => {
      renderMapPage();

      await waitFor(() => {
        expect(fetchFilteredPlaces).toBeCalled();
        expect(loadKakaoMap).toBeCalled();
      });
    });
  });
});
