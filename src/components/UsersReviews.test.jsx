import { render, screen } from '@testing-library/react';

import UsersReviews from './UsersReviews';

const context = describe;

let userReviews;

describe('UsersReviews', () => {
  function renderUsersReviews() {
    render(<UsersReviews
      userReviews={userReviews}
    />);
  }

  context('A user clicks Rate and Review tap and there is no review', () => {
    beforeEach(() => {
      userReviews = [];
    });

    it('renders UserReviews without review', () => {
      renderUsersReviews();

      screen.getByText('회원님들의 리뷰');
      screen.getByText(/아직 리뷰가 없어요/);
      screen.getByText(/회원님들의 소중한 추억을 공유해주세요/);
    });
  });

  context('There are two reviews', () => {
    beforeEach(() => {
      userReviews = [
        {
          id: 0,
          placeId: 4,
          userId: 1,
          rate: 4,
          body: '여기 진짜 재밌어요!',
          dateOfVisit: '2022-09-20',
        },
        {
          id: 2,
          placeId: 4,
          userId: 2,
          rate: 5,
          body: '신나요!',
          dateOfVisit: '2022-10-21',
        },
      ];
    });

    it('renders UserReviews without review', () => {
      renderUsersReviews();

      screen.getByText('회원님들의 리뷰');
      screen.getByText('여기 진짜 재밌어요!');
      screen.getByText('(방문일: 2022-10-21)');
    });
  });
});
