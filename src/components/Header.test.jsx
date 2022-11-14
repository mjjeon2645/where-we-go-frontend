import { render, screen } from '@testing-library/react';

import Header from './Header';

jest.mock('react-router-dom', () => ({
  Link({ to, children }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
}));

test('Header', () => {
  render(<Header />);

  screen.getByText('장소 검색');
  screen.getByText('Top 3');
  screen.getByText('My메뉴');
});
