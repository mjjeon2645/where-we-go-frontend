import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

const context = describe;

describe('filterBar', () => {
  function renderFilterBar() {
    render(<FilterBar />);
  }

  context('when a user clicks the 지도 검색 menu', () => {
    beforeEach(() => {
      renderFilterBar();
    });

    it('renders filter bar', () => {
      screen.getByText('필터 조건을 설정해주세요');
    });
  });
});
