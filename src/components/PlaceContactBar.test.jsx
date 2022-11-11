import { render, screen } from '@testing-library/react';
import PlaceContactBar from './PlaceContactBar';

const context = describe;

let contact;

const toggleContactModal = jest.fn();
const isContactModalOpen = jest.fn();
const handlePlaceContactClick = jest.fn();

describe('ContactBar', () => {
  function renderContactBar() {
    render(<PlaceContactBar
      contact={contact}
      toggleContactModal={toggleContactModal}
      isContactModalOpen={isContactModalOpen}
      handlePlaceContactClick={handlePlaceContactClick}
    />);
  }

  context('A user click the popup of place information', () => {
    it('renders the contact bar', () => {
      renderContactBar();

      screen.getByText('연락하기');
      screen.getByText('홈페이지');
    });
  });
});
