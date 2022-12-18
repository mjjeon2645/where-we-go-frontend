import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import PlaceUserReviewPage from './PlaceUserReviewPage';

const navigate = jest.fn();
let location;

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  useLocation: () => location,
}));

let averageRate;
let userReviews;
let myReviewAtThePlace;

const fetchUsersReviews = jest.fn();
const deleteReview = jest.fn();

jest.mock('../hooks/useUserReviewStore', () => () => ({
  averageRate,
  userReviews,
  myReviewAtThePlace,
  fetchUsersReviews,
  deleteReview,
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
      location = {
        pathname: '/places/4',
      };

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

      myReviewAtThePlace = {
        id: 10,
        nickname: '민지룽룽',
        rate: 5,
        dateOfVisit: '2022-10-21',
        body: '여기 좋아요~!!',
      };
    });

    it('renders place user review page', async () => {
      renderPlaceUserReviewPage();

      await waitFor(() => {
        expect(fetchUsersReviews).toBeCalledWith('4');
        expect(fetchBlogReviews).toBeCalledWith('4');
        expect(fetchUsersReviews).toBeCalledWith('4');
      });

      fireEvent.click(screen.getByText('삭제하기'));

      expect(deleteReview).toBeCalledWith('4', 10);
    });
  });
});
