import { fireEvent, render, screen } from '@testing-library/react';

import MyPage from './MyPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let userInformation;
const fetchUserInformation = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  userInformation,
  fetchUserInformation,
}));

const context = describe;

describe('MyPage', () => {
  function renderMyPage() {
    render(<MyPage />);
  }

  context('a user clicks myPageMenu with logged in', () => {
    beforeEach(() => {
      userInformation = {
        nickname: '민지룽룽',
        authBy: 'naver',
      };

      localStorage.setItem('userId', 1);
    });

    it('renders mypage with information', () => {
      renderMyPage();

      expect(fetchUserInformation).toBeCalled();
      screen.getByText('MyPage');
      screen.getByText('내 정보');
      screen.getByText(/민지룽룽/);
      screen.getByText('소셜 로그인 정보');
      screen.getByText('네이버 로그인');
    });
  });

  context('a user clicks a nickname modify button', () => {
    beforeEach(() => {
      userInformation = {
        nickname: '민지룽룽',
        authBy: 'naver',
      };
    });

    it('redirects nickname change page', () => {
      renderMyPage();

      fireEvent.click(screen.getByText('변경'));
      expect(navigate).toBeCalledWith('/mypage/1/nicknameform');
    });
  });
});
