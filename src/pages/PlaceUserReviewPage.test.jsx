import { render, waitFor } from '@testing-library/react';
import PlaceUserReviewPage from './PlaceUserReviewPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

let averageRate;
let userReviews;
const fetchUsersReviews = jest.fn();
jest.mock('../hooks/useUserReviewStore', () => () => ({
  averageRate,
  userReviews,
  fetchUsersReviews,
}));

let blogReviews;
const fetchBlogReviews = jest.fn();
jest.mock('../hooks/useBlogReviewStore', () => () => ({
  blogReviews,
  fetchBlogReviews,
}));

const context = describe;

describe('PlaceUserReviewPage', () => {
  function renderPlaceUserReviewPage() {
    render(<PlaceUserReviewPage />);
  }

  context('A user clicks user review tap with reviews', () => {
    beforeEach(() => {
      averageRate = 4.5;

      userReviews = [
        {
          id: 1,
          placeId: 4,
          dateOfVisit: '2022-01-03',
          rate: 4,
          body: '정말 재밌었어요 최고!',
        },
        {
          id: 5,
          placeId: 4,
          dateOfVisit: '2022-03-03',
          rate: 5,
          body: '너무 재미있었어요!',
        },
      ];
    });

    it('renders place user review page', async () => {
      renderPlaceUserReviewPage();

      await waitFor(() => {
        expect(fetchUsersReviews).toBeCalled();
        expect(fetchBlogReviews).toBeCalled();
      });
    });
  });
});
