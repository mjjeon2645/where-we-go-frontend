import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

const context = describe;

const navigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => ({
    navigate,
  }),
}));

const requestSignUp = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  requestSignUp,
}));

describe('SignUpPage', () => {
  function renderSignupPage() {
    render(<SignUpPage />);
  }

  context('A new user logins with SNS, then', () => {
    it('renders sigupPage', () => {
      renderSignupPage();

      screen.getByText('SignUp');
    });
  });
});
