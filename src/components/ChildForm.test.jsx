import { render, screen } from '@testing-library/react';
import Childform from './ChildForm';

const context = describe;

describe('ChildForm', () => {
  function renderChildForm() {
    render(<Childform />);
  }

  context('A user clicks to add his/her child information', () => {
    it('renders MyChildForm', () => {
      renderChildForm();

      screen.getByText('성별');
      screen.getByText('왕자님');
      screen.getByText('공주님');
      screen.getByText('아직 몰라요');
      screen.getByText('생일');
      screen.getByText('완료');
    });
  });
});
