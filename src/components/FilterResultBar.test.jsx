import { render, screen } from '@testing-library/react';

import FilterResultBar from './FilterResultBar';

const handleFilterResultClick = jest.fn();
let positions;

const context = describe;

describe('FilterResultBar', () => {
  function renderFilterResultBar() {
    render(<FilterResultBar
      handleFilterResultClick={handleFilterResultClick}
      positions={positions}
    />);
  }

  context('there are two places after filtering conditions', () => {
    beforeEach(() => {
      positions = [
        {
          placeId: 1,
          name: '과천 서울랜드',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
        },
      ];

      renderFilterResultBar();
    });

    it('renders filter result bar contained 2개 words', () => {
      screen.getByText('2개 장소 보러가기');
    });
  });

  context('there is no place after filtering conditions', () => {
    beforeEach(() => {
      positions = [];

      renderFilterResultBar();
    });

    it('renders filter result bar contained 조건에 맞는 장소', () => {
      screen.getByText('조건에 맞는 장소가 없습니다.');
    });
  });
});
