import { fireEvent, render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

const context = describe;

const handleFilterClick = jest.fn();

describe('filterBar', () => {
  function renderFilterBar() {
    render(<FilterBar handleFilterClick={handleFilterClick} />);
  }

  context('when a user clicks the 지도 검색 menu', () => {
    beforeEach(() => {
      renderFilterBar();
    });

    it('renders filter bar', () => {
      screen.getByText('필터 조건을 설정해주세요');
    });
  });

  context('when a user clicks the filter button', () => {
    beforeEach(() => {
      renderFilterBar();
    });

    it('changes pages to filters', () => {
      fireEvent.click(screen.getByRole('button', { type: 'button' }));
      expect(handleFilterClick).toBeCalled();
    });
  });
});
