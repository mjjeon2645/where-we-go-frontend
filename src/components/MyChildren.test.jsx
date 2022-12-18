import { fireEvent, render, screen } from '@testing-library/react';
import MyChildren from './MyChildren';

let userChildren;
const goToAddChildForm = jest.fn();
const deleteChild = jest.fn();

const context = describe;

describe('MyChildren', () => {
  function renderMyChildren() {
    render(<MyChildren
      userChildren={userChildren}
      goToAddChildForm={goToAddChildForm}
      deleteChild={deleteChild}
    />);
  }

  context('a user accesses my page', () => {
    beforeEach(() => {
      userChildren = [
        { id: 1, gender: '왕자님', birthday: '2022-01-01' },
        { id: 5, gender: '아직 몰라요', birthday: '2023-06-01' },
      ];
    });

    it('renders a page with my children', () => {
      renderMyChildren();

      screen.getByText('왕자님');
      screen.getByText('2023-06-01');

      fireEvent.click(screen.getByTestId(5));
      expect(deleteChild).toBeCalledWith(5);

      fireEvent.click(screen.getByText('추가'));
      expect(goToAddChildForm).toBeCalled();
    });
  });
});
