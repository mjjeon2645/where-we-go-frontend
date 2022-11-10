import { render, screen } from '@testing-library/react';
import PlaceRateAndReview from './PlaceRateAndReview';

const context = describe;
describe('PlaceRateAndReview', () => {
  function renderPlaceRateandReview() {
    render(<PlaceRateAndReview />);
  }

  context('A user clicks Rate and Review tap', () => {
    beforeEach(() => {
      renderPlaceRateandReview();
    });

    it('renders PlaceRateAndReview', () => {
      screen.getByText('내가 남긴 리뷰');
      screen.getByText('회원님들의 리뷰');
    });
  });
});
