import { render, screen } from '@testing-library/react';

import NavigationBar from './NavigationBar';

jest.mock('react-router-dom', () => ({
  Link({ to, children }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('Navigation Bar', () => {
  render(<NavigationBar />);

  screen.getByText('지도 검색');
  screen.getByText('Top 3');
  screen.getByText('My메뉴');
});
