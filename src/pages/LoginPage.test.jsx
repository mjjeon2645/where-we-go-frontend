import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import LoginPage from './LoginPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let accessToken;

const trialModeLogin = jest.fn(() => accessToken);

jest.mock('../hooks/useUserStore', () => () => ({
  trialModeLogin,
}));

describe('LoginPage', () => {
  function renderLoginPage() {
    render(<LoginPage />);
  }

  context('When a user accesses a login page', () => {
    it('renders LoginPage', () => {
      renderLoginPage();

      screen.getByText(/사랑스러운 우리 아이를 위해/);
      screen.getByText(/기억에 남을 멋진 장소를 추천해 드릴게요./);
      screen.getByText('이제 넉넉한 마음만 준비하세요 :)');
      screen.getByText('SNS 간편 로그인');
      screen.getByText('카카오톡');
      screen.getByText('네이버');
      screen.getByText('둘러보기');
    });
  });

  context('When a user clicks skip button', () => {
    beforeEach(() => {
      accessToken = 'ACCESS.TOKEN';
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('mode', JSON.stringify('trial'));
    });

    it('redirects top3 page', async () => {
      renderLoginPage();

      fireEvent.click(screen.getByTestId('trial-button'));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/top3');
      });
    });
  });
});
