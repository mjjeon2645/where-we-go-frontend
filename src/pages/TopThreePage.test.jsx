import { fireEvent, render, screen } from '@testing-library/react';

import TopThreePage from './TopThreePage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let topThreePlaces;
let youtubes;

const fetchTopThreePlaces = jest.fn();

jest.mock('../hooks/useTopThreeStore', () => () => ({
  topThreePlaces,
  youtubes,
  fetchTopThreePlaces,
}));

const context = describe;

describe('TopThreePage', () => {
  function renderTopThreePage() {
    render(<TopThreePage />);
  }

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

      youtubes = [
        {
          id: {
            videoId: 1,
          },
          snippet: {
            thumbnails: {
              medium: {
                url: 'youtubeUrl1',
              },
            },
            title: '서울랜드 재미있어요!',
          },
        },
        {
          id: {
            videoId: 2,
          },
          snippet: {
            thumbnails: {
              medium: {
                url: 'youtubeUrl2',
              },
            },
            title: '에버랜드 재미있어요!',
          },
        },
        {
          id: {
            videoId: 3,
          },
          snippet: {
            thumbnails: {
              medium: {
                url: 'youtubeUrl3',
              },
            },
            title: '롯데월드 재미있어요!',
          },
        },
      ];
    });

    it('renders Top three page', () => {
      renderTopThreePage();
      expect(fetchTopThreePlaces).toBeCalled();
      screen.getByText('오어디 회원님들이 추천하는 장소는 어디일까요?');

      fireEvent.click(screen.getByText('과천 서울랜드'));

      expect(navigate).toBeCalledWith('/places/4');
    });
  });
});
