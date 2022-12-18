import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import UnauthorizedAccessModal from './UnauthorizedAccessModal';

let isAccessModalOpen;

const toggleModal = jest.fn();
const goToLogin = jest.fn();

const context = describe;

describe('UnauthorizedAccessModal', () => {
  function renderModal() {
    render(
      <ModalProvider>
        <UnauthorizedAccessModal
          isAccessModalOpen={isAccessModalOpen}
          toggleModal={toggleModal}
          goToLogin={goToLogin}
        />
      </ModalProvider>,
    );
  }

  context('a user accesses without login', () => {
    beforeEach(() => {
      isAccessModalOpen = true;
    });
    it('renders unauthorizedAccessModal', () => {
      renderModal();

      screen.getByText('회원분들께 제공되는 정보예요.');

      fireEvent.click(screen.getByText('로그인 하러가기'));

      expect(goToLogin).toBeCalled();

      fireEvent.click(screen.getByText('X'));

      expect(toggleModal).toBeCalled();
    });
  });
});
