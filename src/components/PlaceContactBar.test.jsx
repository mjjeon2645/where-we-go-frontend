import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from 'styled-react-modal';
import PlaceContactBar from './PlaceContactBar';

const context = describe;

let contact;
let isContactModalOpen;

const toggleModal = jest.fn();
const getContactNumber = jest.fn();
const openHomePage = jest.fn();

describe('ContactBar', () => {
  function renderContactBar() {
    render(
      <ModalProvider>
        <PlaceContactBar
          contact={contact}
          isContactModalOpen={isContactModalOpen}
          toggleModal={toggleModal}
          getContactNumber={getContactNumber}
          openHomePage={openHomePage}
        />
      </ModalProvider>,
    );
  }

  context('A user accesses a place detail page', () => {
    beforeEach(() => {
      contact = {
        id: 1,
        homepage: 'url',
        phone: '1234',
      };

      isContactModalOpen = false;
    });

    it('renders the contact bar', () => {
      renderContactBar();

      screen.getByText('연락처 안내');
      screen.getByText('홈페이지');

      fireEvent.click(screen.getByText('연락처 안내'));
      expect(getContactNumber).toBeCalled();

      fireEvent.click(screen.getByText('홈페이지'));
      expect(openHomePage).toBeCalled();
    });
  });

  context('A user opens a modal', () => {
    beforeEach(() => {
      contact = {
        id: 1,
        homepage: 'url',
        phone: '1234',
      };

      isContactModalOpen = true;
    });

    it('renders the contact bar', () => {
      renderContactBar();

      screen.getByText('1234');

      fireEvent.click(screen.getByText('X'));

      expect(toggleModal).toBeCalled();
    });
  });
});
