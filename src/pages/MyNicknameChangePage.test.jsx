import { fireEvent, render, screen } from '@testing-library/react';
import MyNicknameChangePage from './MyNicknameChangePage';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

const changeNickName = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  changeNickName,
}));

describe('MyNicknameChangePage', () => {
  function renderMyNicknameChangePage() {
    render(<MyNicknameChangePage />);
  }

  context('A user clicks nickname change button', () => {
    it('renders nickname change page', () => {
      renderMyNicknameChangePage();

      screen.getByText('닉네임 변경하기');
    });
  });
});
