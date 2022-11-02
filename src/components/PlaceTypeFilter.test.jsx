import { fireEvent, render, screen } from '@testing-library/react';
import PlaceTypeFilter from './PlaceTypeFilter';

const handlePlaceTypeClick = jest.fn();

const context = describe;

describe('PlaceTypesFilter', () => {
  function renderPlaceTypeFilter() {
    render(<PlaceTypeFilter handlePlaceTypeClick={handlePlaceTypeClick} />);
  }

  beforeEach(() => {
    renderPlaceTypeFilter();
  });

  context('When PlaceTypesFilter is loading', () => {
    it('renders buttons of PlaceTypesFilter', () => {
      screen.getByText('전체');
      screen.getByText('스포츠 레저');
      screen.getByText('교육 체험');
      screen.getByText('숙박 캠핑');
      screen.getByText('전시 공연');
      screen.getByText('자연');
      screen.getByText('키즈카페');
      screen.getByText('키즈존 맛집');
      screen.getByText('유적지');
    });
  });

  context('When a user clicks the 스포츠/레저 button', () => {
    it('called the function related the button user clicked', () => {
      fireEvent.click(screen.getByText('스포츠 레저'));

      // TODO. 추가 테스트가 가능한 것 넣기
      expect(handlePlaceTypeClick).toBeCalled();
    });
  });
});
