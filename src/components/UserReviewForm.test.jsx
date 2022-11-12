import { render, screen } from '@testing-library/react';

import UserReviewForm from './UserReviewForm';

const context = describe;

describe('UserReviewForm', () => {
  function renderUserReviewForm() {
    render(<UserReviewForm />);
  }

  context('a user clicks writing a review button', () => {
    it('renders user review page and form', () => {
      renderUserReviewForm();

      screen.getByText('방문일');
      screen.getByText('평점');
      screen.getByText('한 줄 리뷰');
      screen.getByText(/50자/);
      screen.getByText('등록하기');
    });
  });
});
