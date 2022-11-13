import { render } from '@testing-library/react';
import PlaceUserReviewPage from './PlaceUserReviewPage';

const context = describe;
describe('PlaceUserReviewPage', () => {
  function renderPlaceUserReviewPage() {
    render(<PlaceUserReviewPage />);
  }

  context('A user clicks user review tap', () => {
    it('renders place user review page', () => {
      renderPlaceUserReviewPage();
    });
  });
});
