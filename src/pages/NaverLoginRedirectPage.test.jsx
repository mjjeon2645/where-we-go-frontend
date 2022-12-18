import { render, waitFor } from '@testing-library/react';
import NaverLoginRedirectPage from './NaverLoginRedirectPage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let data;

const sendNaverAuthorizationCode = jest.fn(() => data);

jest.mock('../hooks/useUserStore', () => () => ({
  sendNaverAuthorizationCode,
}));

describe('NaverLoginRedirectPage', () => {
  function renderRedirectPage() {
    render(<NaverLoginRedirectPage />);
  }

  context('a user logins with a naver account', () => {
    beforeEach(() => {
      data = {
        accessToken: 'ACCESS.TOKEN',
        state: 'registered',
      };
    });

    it('renders this page', async () => {
      renderRedirectPage();

      expect(sendNaverAuthorizationCode).toBeCalled();
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/top3');
      });
    });
  });

  context('a user logins with a naver account but state is unregistered', () => {
    beforeEach(() => {
      data = {
        accessToken: 'ACCESS.TOKEN',
        state: 'unregistered',
      };
    });

    it('renders signup-page', async () => {
      renderRedirectPage();

      expect(sendNaverAuthorizationCode).toBeCalled();
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/signup');
      });
    });
  });
});
