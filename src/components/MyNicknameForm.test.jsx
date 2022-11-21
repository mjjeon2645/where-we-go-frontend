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
      screen.getByText('3글자 이상 7글자 이하 한글, 영문, 숫자 가능');
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
});
