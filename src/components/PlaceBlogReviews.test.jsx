import { render, screen } from '@testing-library/react';
import PlaceBlogReviews from './PlaceBlogReviews';

const context = describe;

describe('PlaceBlogReviews', () => {
  function renderPlaceBlogReviews() {
    render(<PlaceBlogReviews />);
  }

  context('A user click placeBlogReviews tap', () => {
    beforeEach(() => {
      renderPlaceBlogReviews();
    });

    it('renders PlaceBlogReviews', () => {
      screen.getByText('네이버 블로그 리뷰');
    });
  });
});
