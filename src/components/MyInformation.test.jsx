import { fireEvent, render, screen } from '@testing-library/react';
import MyInformation from './MyInformation';

const context = describe;

let userInformation;
const goToModifyNickname = jest.fn();

describe('MyInformation', () => {
  function renderMyInformation() {
    render(<MyInformation
      userInformation={userInformation}
      goToModifyNickname={goToModifyNickname}
    />);
  }

  beforeEach(() => {
    userInformation = {
      id: 1,
      nickname: '또또누나',
      email: 'angel2645@naver.com',
      authBy: 'naver',
    };
  });

  context('A user logins and clicks my menu', () => {
    it('renders myPage with my information section', () => {
      renderMyInformation();

      screen.getByText('내 정보');
      screen.getByText('닉네임');
      screen.getByText('또또누나');
      screen.getByText('이메일');
      screen.getByText('angel2645@naver.com');
      screen.getByText('소셜 로그인 정보');
      screen.getByText('네이버 로그인');
      fireEvent.click(screen.getByText('변경'));
      expect(goToModifyNickname).toBeCalled();
    });
  });
});
