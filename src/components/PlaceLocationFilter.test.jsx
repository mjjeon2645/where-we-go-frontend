import { render, screen } from '@testing-library/react';

import PlaceLocationFilter from './PlaceLocationFilter';

const context = describe;

let selectedCityCode;
const handleCityChange = jest.fn();
const handleSigunguChange = jest.fn();

describe('LocationFilter', () => {
  function renderPlaceLocationFilter() {
    render(<PlaceLocationFilter
      code={selectedCityCode}
      handleCityChange={handleCityChange}
      handleSigunguChange={handleSigunguChange}
    />);
  }

  context('When a filter menu loaded', () => {
    beforeEach(() => {
      selectedCityCode = 0;
      renderPlaceLocationFilter();
      const sigungu = [
        {
          id: 0,
          sido: 'seoul',
          sigunguLists: [
            { id: 0, name: '전체' },
            { id: 1, name: '양천구' },
            { id: 2, name: '성동구' },
          ],
        },
        {
          id: 1,
          sido: 'kyoungki',
          sigunguLists: [
            { id: 0, name: '전체' },
            { id: 1, name: '양주시' },
            { id: 2, name: '일산동구' },
          ],
        }];
    });

    it('renders LocationFilter', () => {
      screen.getByText('어디로 갈까요?');
      screen.getByText('시/도');
      screen.getAllByText('전체');
      screen.getByText('서울');
      screen.getByText('경기');
      screen.getByText('인천');
      screen.getByText('경상');
      screen.getByText('충청');
      screen.getByText('전라');
      screen.getByText('강원');
      screen.getByText('부산');
      screen.getByText('제주');
      screen.getByText('시/군/구');
      screen.getByText('선택');
    });
  });
});
