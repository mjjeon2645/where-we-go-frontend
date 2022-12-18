import { render, screen } from '@testing-library/react';
import WritingReviewPage from './WritingReviewPage';

const context = describe;

const ko = {};
jest.mock('react-datepicker/dist/react-datepicker.css', () => null);

jest.mock('date-fns/esm/locale', () => () => ({
  ko,
}));

const navigate = jest.fn();
let location;

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
  useLocation: () => location,
}));

let myDateOfVisit;
let myRate;
let myReview;
let errorMessage;
let isDateOfVisitEmpty;
let isRateEmpty;
let isReviewEmpty;

const setError = jest.fn();
const postMyReview = jest.fn();
const clearWritingReviewState = jest.fn();
const clearError = jest.fn();
const setMyDateOfVisit = jest.fn();
const setMyRate = jest.fn();
const setMyReview = jest.fn();

jest.mock('../hooks/useUserReviewStore', () => () => ({
  myDateOfVisit,
  myRate,
  myReview,
  errorMessage,
  isDateOfVisitEmpty,
  isRateEmpty,
  isReviewEmpty,
  setError,
  postMyReview,
  clearWritingReviewState,
  clearError,
  setMyDateOfVisit,
  setMyRate,
  setMyReview,
}));

describe('WritingReviewPage', () => {
  function renderWritingReviewPage() {
    render(<WritingReviewPage />);
  }

  context('A user clicks user review menu', () => {
    beforeEach(() => {
      location = {
        pathname: '/reviews/5',
      };

      myReview = '안녕';
    });
    it('renders user review page', () => {
      renderWritingReviewPage();

      screen.getByText(/이 곳, 어떠셨나요?/);
      screen.getByText('방문일');
      screen.getByText('평점');
      screen.getByText('한 줄 리뷰');
      screen.getByText('2 / 50자');
      screen.getByText('등록하기');
      screen.getByText(/욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다./);
    });
  });
});
