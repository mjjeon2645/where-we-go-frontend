import { fireEvent, render, screen } from '@testing-library/react';

import PlaceBlogReviews from './PlaceBlogReviews';

const context = describe;

let blogReviews;

const handleToBlogPageClick = jest.fn();

describe('PlaceBlogReviews', () => {
  function renderPlaceBlogReviews() {
    render(<PlaceBlogReviews
      blogReviews={blogReviews}
      handleToBlogPageClick={handleToBlogPageClick}
    />);
  }

  context('A user click placeBlogReviews tap', () => {
    beforeEach(() => {
      blogReviews = [
        {
          id: 0,
          placeId: 4,
          title: '봄이의 22개월 기록. 운 좋게 피해갔던 코로나 19',
          author: '작성자0',
          date: '2022-04-21',
          imageSource: 'https://',
          url: 'https://',
        },
        {
          id: 1,
          placeId: 4,
          title: '내돈내산 3월 가족여행 1탄. 양양 쏠비치 할인가격으로 예약하는법',
          author: '작성자1',
          date: '2022-05-23',
          imageSource: 'https://',
          url: 'https://',
        },
        {
          id: 2,
          placeId: 4,
          title: '내돈내산! 아기텐트 코아코아 아이스크림마켓 키즈텐트',
          author: '작성자2',
          date: '2022-10-21',
          imageSource: 'https://',
          url: 'https://',
        },
      ];
    });

    it('renders PlaceBlogReviews', () => {
      renderPlaceBlogReviews();

      screen.getByText(/네이버/);
      screen.getByText(/블로그 리뷰/);
      screen.getByText('내돈내산! 아기텐트 코아코아 아이스크림마켓 키즈텐트');
    });
  });

  context('A user click a blog review', () => {
    beforeEach(() => {
      blogReviews = [
        {
          id: 2,
          placeId: 4,
          title: '내돈내산! 아기텐트 코아코아 아이스크림마켓 키즈텐트',
          author: '작성자2',
          date: '2022-10-21',
          imageSource: 'https://',
          url: 'https://',
        },
      ];
    });

    it('links to url on new page', () => {
      renderPlaceBlogReviews();

      fireEvent.click(screen.getByText('내돈내산! 아기텐트 코아코아 아이스크림마켓 키즈텐트'));
      expect(handleToBlogPageClick).toBeCalled();
    });
  });

  context('There is no review', () => {
    beforeEach(() => {
      blogReviews = [];
    });

    it('renders message without blog reviews', () => {
      renderPlaceBlogReviews();

      screen.getByText(/등록된 리뷰가 없습니다/);
    });
  });
});
