import { fireEvent, render, screen } from '@testing-library/react';
import PlaceContactBar from './PlaceContactBar';

const context = describe;

let contact;
let isContactModalOpen;

const toggleModal = jest.fn();
const getContactNumber = jest.fn();
const openHomePage = jest.fn();

describe('ContactBar', () => {
  function renderContactBar() {
    render(<PlaceContactBar
      contact={contact}
      isContactModalOpen={isContactModalOpen}
      toggleModal={toggleModal}
      getContactNumber={getContactNumber}
      openHomePage={openHomePage}
    />);
  }

  context('A user click the popup of place information', () => {
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

      screen.getByText('연락하기');
      screen.getByText('홈페이지');

      fireEvent.click(screen.getByText('연락하기'));
      expect(getContactNumber).toBeCalled();

      fireEvent.click(screen.getByText('홈페이지'));
      expect(openHomePage).toBeCalled();
    });
  });
});
