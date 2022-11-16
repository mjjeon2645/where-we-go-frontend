import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

const context = describe;

describe('LoginPage', () => {
  function renderLoginPage() {
    render(<LoginPage />);
  }

  context('When a user accesses a login page', () => {
    it('renders LoginPage', () => {
      renderLoginPage();

      screen.getByText('아빠! 오늘은 어디가요?');
      screen.getByText(/사랑스러운 우리 아이를 위해/);
      screen.getByText(/기억에 남을 멋진 장소를 추천해 드릴게요./);
      screen.getByText('이제 넉넉한 마음만 준비하세요 :)');
      screen.getByText('천천히 둘러볼래요!');
    });
  });
});
