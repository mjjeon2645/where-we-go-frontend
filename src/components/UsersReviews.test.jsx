import { render, screen } from '@testing-library/react';

import UsersReviews from './UsersReviews';

const context = describe;

let averageRate;
let userReviews;

describe('UsersReviews', () => {
  function renderUsersReviews() {
    render(<UsersReviews
      averageRate={averageRate}
      userReviews={userReviews}
    />);
  }

  context('A user clicks Rate and Review tap and there is no review', () => {
    beforeEach(() => {
      averageRate = '0';
      userReviews = [];
    });

    it('renders UserReviews without review', () => {
      renderUsersReviews();

      screen.getByText('0 / 5점');
      screen.getByText('0명 참여');
      screen.getByText('내가 남긴 리뷰');
      screen.getByText('회원님들의 리뷰');
      screen.getByText(/아직 리뷰가 없어요/);
      screen.getByText(/회원님들의 소중한 추억을 공유해주세요/);
    });
  });

  context('There are two reviews and 4.38 averageRate', () => {
    beforeEach(() => {
      averageRate = '4.38';
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

      screen.getByText('4.38 / 5점');
      screen.getByText('2명 참여');
      screen.getByText('내가 남긴 리뷰');
      screen.getByText('회원님들의 리뷰');
      screen.getByText('(방문일: 2022-10-21)');
    });
  });
});
