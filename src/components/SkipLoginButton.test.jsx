import { fireEvent, render, screen } from '@testing-library/react';
import SkipLoginButton from './SkipLoginButton';

const context = describe;

const skipLogin = jest.fn();

describe('SkipLoginButton', () => {
  function renderSkipLoginButton() {
    render(<SkipLoginButton skipLogin={skipLogin} />);
  }

  context('A user accesses login page', () => {
    it('renders loginpage with skip login button', () => {
      renderSkipLoginButton();

      screen.getByText('천천히 둘러볼래요!');
      fireEvent.click(screen.getByText('천천히 둘러볼래요'));
      expect(skipLogin).toBeCalled();
    });
  });
});
