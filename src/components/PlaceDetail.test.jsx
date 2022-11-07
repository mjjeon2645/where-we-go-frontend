import { render, screen } from '@testing-library/react';
import PlaceDetail from './PlaceDetail';

const context = describe;

describe('PlaceDetail', () => {
  function renderPlaceDetail() {
    render(<PlaceDetail />);
  }

  context('A user click the popup of place information', () => {
    beforeEach(() => {
      renderPlaceDetail();
    });

    it('rendes PlaceDetail', () => {
      screen.getByText('KINTEX 뽀로로파크');
      screen.getByText('편의시설');
      screen.getByText('예약');
      screen.getByText('주차');
      screen.getByText('외부음식');
      screen.getByText('수유실');
      screen.getByText('주소');
      screen.getByText('경기도 고양시 일산서구 송포동 1396-43');
    });
  });
});
