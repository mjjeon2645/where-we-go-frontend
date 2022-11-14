import { fireEvent, render, screen } from '@testing-library/react';
import PlaceDetailTap from './PlaceDetailTap';

const context = describe;

const goToPrevPage = jest.fn();
const handleBookmarkClick = jest.fn();
const goToPlaceDetail = jest.fn();
const goToBlogReview = jest.fn();
const goToUserReview = jest.fn();

let blogReviews;

describe('PlaceDetailTap', () => {
  function renderPlaceDetailTap() {
    render(<PlaceDetailTap
      goToPrevPage={goToPrevPage}
      handleBookmarkClick={handleBookmarkClick}
      goToPlaceDetail={goToPlaceDetail}
      goToBlogReview={goToBlogReview}
      goToUserReview={goToUserReview}
      size={blogReviews?.length || 0}
    />);
  }

  context('A user enters the place detail page', () => {
    beforeEach(() => {
      renderPlaceDetailTap();
    });

    it('renders PlaceDetailTap top on the page', () => {
      screen.getByText('상세정보');
      screen.getByText(/블로그 리뷰/);
      screen.getByText('평점/리뷰');
    });
  });

  context('A user clicks each tap and there are two reviews', () => {
    beforeEach(() => {
      blogReviews = [
        {
          id: 1,
          content: '',
        },
        {
          id: 2,
          content: '',
        },
      ];
    });

    it('renders PlaceDetailTap top on the page', () => {
      renderPlaceDetailTap();

      fireEvent.click(screen.getByText(/뒤로가기/));
      expect(goToPrevPage).toBeCalled();

      fireEvent.click(screen.getByText('상세정보'));
      expect(goToPlaceDetail).toBeCalled();

      fireEvent.click(screen.getByText('블로그 리뷰 2'));
      expect(goToBlogReview).toBeCalled();

      fireEvent.click(screen.getByText('평점/리뷰'));
      expect(goToUserReview).toBeCalled();
    });
  });
});
