import { fireEvent, render, screen } from '@testing-library/react';
import MyNicknameForm from './MyNicknameForm';

const context = describe;

const modifyNickname = jest.fn();
const goPrevPage = jest.fn();

describe('MyNicknameForm', () => {
  function renderMyNicknameForm() {
    render(<MyNicknameForm
      modifyNickname={modifyNickname}
      goPrevPage={goPrevPage}
    />);
  }

  context('a new user completes login', () => {
    it('renders myNicknameForm', () => {
      renderMyNicknameForm();

      screen.getByText('원하시는 닉네임을 입력해주세요.');
      screen.getByText('변경');
      screen.getByText('취소');
    });
  });

  context('a new user input nickname and clicks submit button', () => {
    it('process his nickname', () => {
      renderMyNicknameForm();

      fireEvent.change(screen.getByLabelText('원하시는 닉네임을 입력해주세요.'), {
        target: { value: '민지룽룽' },
      });

      fireEvent.click(screen.getByText('변경'));

      expect(modifyNickname).toBeCalled();
    });
  });

  context('a new clicks a cancel button', () => {
    it('calls a goPrevPage function', () => {
      renderMyNicknameForm();

      fireEvent.click(screen.getByText('취소'));

      expect(goPrevPage).toBeCalled();
    });
  });
});
