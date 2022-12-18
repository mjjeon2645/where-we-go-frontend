import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';

const navigate = jest.fn();

let location;

jest.mock('react-router-dom', () => ({
  Link({ to, children }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate: () => navigate,
  useLocation: () => location,
}));

const clearUserState = jest.fn();
const stopTrialMode = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  clearUserState,
  stopTrialMode,
}));

const context = describe;

describe('Header', () => {
  context('a user access the homepage', () => {
    beforeEach(() => {
      location = {
        pathname: '',
      };
    });

    it('renders with header', () => {
      render(<Header />);
      screen.getByText('장소 검색');
      screen.getByText('Top 3');
      screen.getByText('MyPage');
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
      expect(navigate).toBeCalledWith('/');
    });
  });
});
