import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Link({ to, children }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate() {
    return navigate;
  },
}));

const clearUserState = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  clearUserState,
}));

const context = describe;

describe('Header', () => {
  context('a user access the homepage', () => {
    it('renders with header', () => {
      render(<Header />);
      screen.getByText('장소 검색');
      screen.getByText('Top 3');
      screen.getByText('My메뉴');
      screen.getByText('로그인');
    });
  });

  context('with logged in', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));
    });

    it('renders with header', () => {
      render(<Header />);
      screen.getByText('로그아웃');
    });
  });

  context('clicks logout button', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));
    });

    it('renders header with login button and clears state', () => {
      render(<Header />);

      fireEvent.click(screen.getByText('로그아웃'));

      expect(clearUserState).toBeCalled();
      expect(navigate).toBeCalledWith('/top3');
    });
  });
});
