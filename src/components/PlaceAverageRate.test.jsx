import { render, screen } from '@testing-library/react';
import PlaceAverageRate from './PlaceAverageRate';

const context = describe;

let averageRate;
let userReviews;

describe('PlaceAverageRate', () => {
  function renderPlaceAverageRate() {
    render(<PlaceAverageRate
      averageRate={averageRate}
      userReviews={userReviews}
    />);
  }

  context('A user clicks 평점/리뷰 tap', () => {
    beforeEach(() => {
      averageRate = 3.5;
      userReviews = [
        {
          id: 1,
          title: 'review1',
        },
        {
          id: 2,
          title: 'review2',
        },
      ];
    });

    it('renders page with PlaceAverageRate of 3.5 rate, 2 reviews', () => {
      renderPlaceAverageRate();

      screen.getByText('3.5 / 5점');
      screen.getByText('2명 참여');
    });
  });
});
