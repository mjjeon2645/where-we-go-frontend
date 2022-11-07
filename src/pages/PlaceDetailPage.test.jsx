import { render, screen } from '@testing-library/react';
import PlaceDetailPage from './PlaceDetailPage';

const context = describe;

describe('PlaceDetailPage', () => {
  function renderPlaceDetailPage() {
    render(<PlaceDetailPage />);
  }

  context('User click the place information popup', () => {
    beforeEach(() => {
      renderPlaceDetailPage();
    });

    it('render PlaceDetailPage', () => {
      screen.getByText(/뒤로가기/);
      screen.getByText('상세정보');
      screen.getByText(/블로그 리뷰/);
      screen.getByText('평점/리뷰');
      screen.getByText('편의시설');
      screen.getByText('예약');
      screen.getByText('주차');
      screen.getByText('외부음식');
      screen.getByText('수유실');
      screen.getByText('주소');
      screen.getByText('연락하기');
      screen.getByText('홈페이지');
    });
  });
});
