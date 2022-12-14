import { fireEvent, render, screen } from '@testing-library/react';

import TopThreePlaces from './TopThreePlaces';

const context = describe;

let topThreePlaces;

const goPlaceDetailPage = jest.fn();

describe('TopThreePlaces', () => {
  function renderTopThreePlaces() {
    render(<TopThreePlaces
      topThreePlaces={topThreePlaces}
      goPlaceDetailPage={goPlaceDetailPage}
    />);
  }

  context('There is no places', () => {
    beforeEach(() => {
      topThreePlaces = [];
    });

    it('renders now loading texts', () => {
      renderTopThreePlaces();
      screen.getByText(/now loading.../);
    });
  });

  context('A user clicks top 3 menu', () => {
    beforeEach(() => {
      topThreePlaces = [
        {
          placeId: 4,
          name: '과천 서울랜드',
          address: {
            sido: '경기',
            sigungu: '과천시',
          },
          averageRate: '4.6',
        },
        {
          placeId: 5,
          name: '키즈카페 까블랑',
          address: {
            sido: '충청',
            sigungu: '아산시',
          },
          averageRate: '4.17',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
          address: {
            sido: '경기',
            sigungu: '가평군',
          },
          averageRate: '4.07',
        },
      ];
    });
    it('renders TopThreePlaces', () => {
      renderTopThreePlaces();

      screen.getByText('1위');
      screen.getByText('과천 서울랜드');
      screen.getByText('경기 과천시');
      screen.getByText('4.6');
      screen.getByText('2위');
      screen.getByText('키즈카페 까블랑');
      screen.getByText('4.17');
      screen.getByText('3위');
      screen.getByText('킹덤키즈풀빌라');
      screen.getByText('4.07');

      fireEvent.click(screen.getByText('과천 서울랜드'));

      expect(goPlaceDetailPage).toBeCalledWith(4);
    });
  });
});
