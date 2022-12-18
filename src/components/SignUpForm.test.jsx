import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

const signUp = jest.fn();

let errorMessage;

const context = describe;

describe('SignUpForm', () => {
  function renderSignUpForm() {
    render(<SignUpForm
      signUp={signUp}
      errorMessage={errorMessage}
    />);
  }

  context('a user accesses sign up page', () => {
    it('renders sign up form', () => {
      renderSignUpForm();

      screen.getByText('사용하실 닉네임을 입력해주세요');
      fireEvent.change(screen.getByPlaceholderText('한글, 영어, 숫자 3~7자 이내'), {
        target: { value: '민지룽룽' },
      });

      fireEvent.click(screen.getByText('다음으로'));

      expect(signUp).toBeCalled();
    });
  });

  context('a user signs up, but duplicated nickname', () => {
    errorMessage = '이미 다른 분이 사용 중이예요';
    it('renders an error message', () => {
      renderSignUpForm();

      screen.getByText('사용하실 닉네임을 입력해주세요');
      fireEvent.change(screen.getByPlaceholderText('한글, 영어, 숫자 3~7자 이내'), {
        target: { value: '민지룽룽' },
      });

      fireEvent.click(screen.getByText('다음으로'));

      screen.getByText('이미 다른 분이 사용 중이예요');
    });
  });
});
