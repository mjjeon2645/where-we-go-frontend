import { fireEvent, render, screen } from '@testing-library/react';
import FilteredPlacesList from './FilteredPlacesList';

let positions;

const handleListPageCloseClick = jest.fn();
const handleOnePlaceClick = jest.fn();

const context = describe;

describe('FilteredPlacesList', () => {
  function renderFilteredPlacesList() {
    render(<FilteredPlacesList
      positions={positions}
      handleListPageCloseClick={handleListPageCloseClick}
      handleOnePlaceClick={handleOnePlaceClick}
    />);
  }

  context('if there are two places after filtering', () => {
    beforeEach(() => {
      positions = [
        {
          placeId: 1,
          name: '과천 서울랜드',
          fullAddress: '경기도 과천시 광명로 181',
          category: '자연',
          firstImage: 'image',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
          fullAddress: '경기도 가평군 설악면 미사리 320-1',
          category: '숙박/캠핑',
          firstImage: 'image',
        },
      ];
      renderFilteredPlacesList();
    });

    it('render filteredPlacesList with positions', () => {
      screen.getByText('총 2개 장소');
      screen.getByText(/과천 서울랜드/);
      screen.getByText('경기도 과천시 광명로 181');
      screen.getByText('자연');
      screen.getByText('킹덤키즈풀빌라');
      screen.getByText('경기도 가평군 설악면 미사리 320-1');
      screen.getByText('숙박/캠핑');

      fireEvent.click(screen.getByRole('button', { name: '뒤로가기' }));
      expect(handleListPageCloseClick).toBeCalled();

      fireEvent.click(screen.getByText('과천 서울랜드'));
      expect(handleOnePlaceClick).toBeCalled();
    });
  });
});
