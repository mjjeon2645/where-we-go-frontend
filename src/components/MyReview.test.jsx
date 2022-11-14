import { fireEvent, render, screen } from '@testing-library/react';
import MyReview from './MyReview';

const context = describe;

const goToReviewForm = jest.fn();

describe('MyReview', () => {
  function renderMyReview() {
    render(<MyReview
      goToReviewForm={goToReviewForm}
    />);
  }

  context('A user clicks 평점/리뷰 tap', () => {
    it('renders page with myReview', () => {
      renderMyReview();

      screen.getByText(/내가 남긴 리뷰/);
      screen.getByText(/아직 리뷰를 남기지 않으셨네요!/);
      screen.getByText(/마음에 드신 장소라면 다른 회원님들께도 추천해주세요/);
      fireEvent.click(screen.getByText('리뷰 남기기'));
      expect(goToReviewForm).toBeCalled();
    });
  });
});
