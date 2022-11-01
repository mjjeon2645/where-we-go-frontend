import { render, screen } from '@testing-library/react';
import Filters from './Filters';

describe('Filter', () => {
  function renderFilter() {
    render(<Filters />);
  }

  beforeEach(() => {
    renderFilter();
  });

  it('renders title and filter options', () => {
    screen.getByText('필터 조건');
    screen.getByText('어디로 갈까요?');
    screen.getByText('어떤 곳을 원하세요?');
    screen.getByText('필터 적용하기');
  });
});
