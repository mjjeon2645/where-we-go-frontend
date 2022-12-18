import { fireEvent, render, screen } from '@testing-library/react';
import TopThreeYoutubes from './TopThreeYoutubes';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

const context = describe;

let youtubes;

describe('TopThreeYoutubes', () => {
  function renderTopThreeYoutubes() {
    render(<TopThreeYoutubes
      youtubes={youtubes}
    />);
  }

  context('A user clicks top3 menu', () => {
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

    it('renders top three youtubes', () => {
      renderTopThreeYoutubes();

      screen.getByText('Youtube로 보는 TOP 3');
      screen.getByText('서울랜드 재미있어요!');
      screen.getByText('에버랜드 재미있어요!');
      screen.getByText('롯데월드 재미있어요!');

      fireEvent.click(screen.getByText('롯데월드 재미있어요!'));

      expect(navigate).toBeCalledWith('/video?id=3');
    });
  });
});
