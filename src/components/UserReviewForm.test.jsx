import {
  fireEvent, getByLabelText, render, screen,
} from '@testing-library/react';

import UserReviewForm from './UserReviewForm';

const context = describe;

// TODO. date picker 모킹방법 알아보기
jest.mock('react-datepicker');

const writeReview = jest.fn();
const setDateOfVisit = jest.fn();
const setRate = jest.fn();
const setMyReview = jest.fn();
const cancelWriting = jest.fn();

let startDate;
let myReview;

describe('UserReviewForm', () => {
  function renderUserReviewForm() {
    render(<UserReviewForm
      writeReview={writeReview}
      setDateOfVisit={setDateOfVisit}
      setRate={setRate}
      setMyReview={setMyReview}
      cancelWriting={cancelWriting}
      startDate={startDate}
      myReview={myReview}
    />);
  }

  context('a user clicks writing a review button', () => {
    it('renders user review page and form', () => {
      renderUserReviewForm();

      screen.getByText('방문일');
      screen.getByText('평점');
      screen.getByText('한 줄 리뷰');
      screen.getByText(/50자/);
      screen.getByText('등록하기');
      screen.getByText('욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.');
    });
  });

  context('a user writes a review and clicks a write button', () => {
    it('register the review', () => {
      renderUserReviewForm();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: '⭐️⭐️⭐️⭐️⭐️' },
      });

      expect(setRate).toBeCalledWith('⭐️⭐️⭐️⭐️⭐️');

      fireEvent.change(getByLabelText('한 줄 리뷰'), {
        target: { value: '이렇게 재밌는 곳은 정말 처음이예요!' },
      });
      expect(setMyReview).toBeCalledWith('이렇게 재밌는 곳은 정말 처음이예요!');

      fireEvent.click(screen.getByText('등록하기'));

      expect(writeReview).toBeCalled();
    });
  });
});
