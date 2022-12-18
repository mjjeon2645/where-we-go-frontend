import { render, waitFor } from '@testing-library/react';
import KakaoLoginRedirectPage from './KakaoLoginRedirectPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let data;

const sendKakaoAuthorizationCode = jest.fn(() => data);

jest.mock('../hooks/useUserStore', () => () => ({
  sendKakaoAuthorizationCode,
}));

describe('KakaoLoginRedirectPage', () => {
  function renderRedirectPage() {
    render(<KakaoLoginRedirectPage />);
  }

  context('a user logins with a kakao account', () => {
    beforeEach(() => {
      data = {
        accessToken: 'ACCESS.TOKEN',
        state: 'registered',
      };
    });

    it('renders this page', async () => {
      renderRedirectPage();

      expect(sendKakaoAuthorizationCode).toBeCalled();
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/top3');
      });
    });
  });

  context('a user logins with a kakao account but state is unregistered', () => {
    beforeEach(() => {
      data = {
        accessToken: 'ACCESS.TOKEN',
        state: 'unregistered',
      };
    });

    it('renders signup-page', async () => {
      renderRedirectPage();

      expect(sendKakaoAuthorizationCode).toBeCalled();
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/signup');
      });
    });
  });
});
