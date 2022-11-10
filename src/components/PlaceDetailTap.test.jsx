import { render, screen } from '@testing-library/react';
import { contextId } from 'process';
import PlaceDetailTap from './PlaceDetailTap';

const context = describe;
describe('PlaceDetailTap', () => {
  function renderPlaceDetailTap() {
    render(<PlaceDetailTap />);
  }

  context('A user enters the place detail page', () => {
    beforeEach(() => {
      renderPlaceDetailTap();
    });

    it('renders PlaceDetailTap top on the page', () => {
      screen.getByText('상세정보');
      screen.getByText('블로그 리뷰');
      screen.getByText('평점/리뷰');
    });
  });
});
