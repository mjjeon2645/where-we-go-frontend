import { fireEvent, render, screen } from '@testing-library/react';

import FilterResultBar from './FilterResultBar';

const goFilteredPlaceListPage = jest.fn();
let places;

const context = describe;

describe('FilterResultBar', () => {
  function renderFilterResultBar() {
    render(<FilterResultBar
      goFilteredPlaceListPage={goFilteredPlaceListPage}
      places={places}
    />);
  }

  context('there are two places after filtering conditions', () => {
    beforeEach(() => {
      places = [
        {
          placeId: 1,
          name: '과천 서울랜드',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
        },
      ];
    });

    it('renders filter result bar contained 2개 words', () => {
      renderFilterResultBar();

      fireEvent.click(screen.getByText('2개 장소 보러가기'));
      expect(goFilteredPlaceListPage).toBeCalled();
    });
  });

  context('there is no place after filtering conditions', () => {
    beforeEach(() => {
      places = [];

      renderFilterResultBar();
    });

    it('renders filter result bar contained 조건에 맞는 장소', () => {
      screen.getByText('조건에 맞는 장소가 없습니다.');
    });
  });
});
