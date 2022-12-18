import { fireEvent, render, screen } from '@testing-library/react';

import PlaceBlogReviewPage from './PlaceBlogReviewPage';

const context = describe;

const navigate = jest.fn();
let location;

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  useLocation: () => location,
}));

let blogReviews;
const fetchBlogReviews = jest.fn();

jest.mock('../hooks/useBlogReviewStore', () => () => ({
  blogReviews,
  fetchBlogReviews,
}));

describe('PlaceBlogReviewPage', () => {
  function renderPlaceBlogReviewPage() {
    render(<PlaceBlogReviewPage />);
  }

  context('A user clicks the blog menu', () => {
    beforeEach(() => {
      location = {
        pathname: '/places/3',
      };

      blogReviews = [
        {
          url: 'url', imageSource: 'imageSource', title: 'title', date: 'date', author: 'author',
        },
      ];
    });

    it('renders blog review menu', () => {
      renderPlaceBlogReviewPage();

      expect(fetchBlogReviews).toBeCalledWith('3');

      fireEvent.click(screen.getByText('상세정보'));

      expect(navigate).toBeCalledWith('/places/3');

      fireEvent.click(screen.getByText('블로그 리뷰 1'));

      expect(navigate).toBeCalledWith('/places/3/blog-review');

      fireEvent.click(screen.getByText('평점/리뷰'));

      expect(navigate).toBeCalledWith('/places/3/user-review');
    });
  });
});
