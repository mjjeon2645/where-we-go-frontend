import { fireEvent, render, screen } from '@testing-library/react';

import FilteredPlacesList from './FilteredPlacesList';

let places;

const handleListPageCloseClick = jest.fn();
const handleOnePlaceClick = jest.fn();

const context = describe;

describe('FilteredPlacesList', () => {
  function renderFilteredPlacesList() {
    render(<FilteredPlacesList
      places={places}
      handleListPageCloseClick={handleListPageCloseClick}
      handleOnePlaceClick={handleOnePlaceClick}
    />);
  }

  context('if there are two places after filtering', () => {
    beforeEach(() => {
      places = [
        {
          placeId: 1,
          name: '과천 서울랜드',
          address: {
            fullAddress: '경기도 과천시 광명로 181',
            sido: '경기',
            sigungu: '과천시',
          },
          imageSource: {
            firstImage: 'url',
            secondImage: 'url',
            thirdImage: 'url',
          },
          category: '자연',
          firstImage: 'image',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
          address: {
            fullAddress: '경기도 가평군 설악면 미사리 320-1',
            sido: '경기',
            sigungu: '가평군',
          },
          imageSource: {
            firstImage: 'url',
            secondImage: 'url',
            thirdImage: 'url',
          },
          category: '숙박/캠핑',
          firstImage: 'image',
        },
      ];
    });

    it('render filteredPlacesList with positions', () => {
      renderFilteredPlacesList();

      screen.getByText('2개 장소를 찾았어요! 어디로 가볼까요?');
      screen.getByText(/과천 서울랜드/);
      screen.getByText('경기도 과천시 광명로 181');
      screen.getByText('자연');
      screen.getByText('킹덤키즈풀빌라');
      screen.getByText('경기도 가평군 설악면 미사리 320-1');
      screen.getByText('숙박/캠핑');

      fireEvent.click(screen.getByRole('button', { name: /돌아가기/ }));
      expect(handleListPageCloseClick).toBeCalled();

      fireEvent.click(screen.getByText('과천 서울랜드'));
      expect(handleOnePlaceClick).toBeCalled();
    });
  });
});
