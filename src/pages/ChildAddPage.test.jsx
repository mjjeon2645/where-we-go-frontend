import { render, screen } from '@testing-library/react';
import ChildAddPage from './ChildAddPage';

const context = describe;

describe('ChildAddPage', () => {
  function renderChildAddPage() {
    render(<ChildAddPage />);
  }

  context('A user clicks to add his/her child information', () => {
    it('renders ChildAddPage', () => {
      renderChildAddPage();

      screen.getByText('아이 정보 입력하기');
    });
  });
});
