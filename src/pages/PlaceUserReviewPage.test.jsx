import { render } from '@testing-library/react';
import PlaceUserReviewPage from './PlaceUserReviewPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

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
