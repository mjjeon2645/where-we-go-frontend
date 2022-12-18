import { fireEvent, render, screen } from '@testing-library/react';
import MyReview from './MyReview';

const context = describe;

let myReviewAtThePlace;

const goToReviewForm = jest.fn();
const deleteReview = jest.fn();

describe('MyReview', () => {
  function renderMyReview() {
    render(<MyReview
      myReviewAtThePlace={myReviewAtThePlace}
      goToReviewForm={goToReviewForm}
      deleteReview={deleteReview}
    />);
  }

  context('A user clicks 평점/리뷰 tap', () => {
    myReviewAtThePlace = {
      id: 4,
      nickname: '민지룽룽',
      rate: 4,
      dateOfVisit: '2022-10-21',
      body: '정말 좋은곳이었어요! 다음에 또 가고싶어요~',
    };

    it('renders page with myReview', () => {
      renderMyReview();

      screen.getByText('정말 좋은곳이었어요! 다음에 또 가고싶어요~');

      fireEvent.click(screen.getByText('삭제하기'));

      expect(deleteReview).toBeCalledWith(4);
    });
  });

  context('A user clicks 평점/리뷰 tap, but there are no reviews', () => {
    beforeEach(() => {
      myReviewAtThePlace = {};
    });

    it('renders page with a message', () => {
      renderMyReview();

      screen.getByText(/내가 남긴 리뷰/);
      screen.getByText(/아직 리뷰를 남기지 않으셨네요!/);
      screen.getByText(/마음에 드신 장소라면 다른 회원님들께도 추천해주세요/);

      fireEvent.click(screen.getByText('리뷰 작성하기'));
      expect(goToReviewForm).toBeCalled();
    });
  });
});
