import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

const context = describe;

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
