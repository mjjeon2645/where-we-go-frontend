import { render, screen } from '@testing-library/react';

import PlaceBlogReviewPage from './PlaceBlogReviewPage';

const context = describe;

describe('PlaceBlogReviewPage', () => {
  function renderPlaceBlogReviewPage() {
    render(<PlaceBlogReviewPage />);
  }

  context('A user clicks the blog menu', () => {
    it('renders blog review menu', () => {
      renderPlaceBlogReviewPage();

      screen.getByText(/블로그 리뷰/);
    });
  });
});
