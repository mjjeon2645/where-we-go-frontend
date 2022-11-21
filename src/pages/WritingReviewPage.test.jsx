import { render, screen } from '@testing-library/react';
import WritingReviewPage from './WritingReviewPage';

const context = describe;

const ko = {};
jest.mock('react-datepicker/dist/react-datepicker.css', () => null);

jest.mock('date-fns/esm/locale', () => () => ({
  ko,
}));

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate
  ,
}));

let myDateOfVisit;
let myRate;
let myReview;

jest.mock('../hooks/useUserReviewStore', () => () => ({
  myDateOfVisit,
  myRate,
  myReview,
}));

describe('WritingReviewPage', () => {
  function renderWritingReviewPage() {
    render(<WritingReviewPage />);
  }

  context('A user clicks user review menu', () => {
    beforeEach(() => {
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
      screen.getByText('욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.');
    });
  });
});
