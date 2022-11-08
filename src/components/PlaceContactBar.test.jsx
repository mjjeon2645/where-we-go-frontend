import { render, screen } from '@testing-library/react';
import PlaceContactBar from './PlaceContactBar';

const context = describe;

describe('ContactBar', () => {
  function renderContactBar() {
    render(<PlaceContactBar />);
  }

  context('A user click the popup of place information', () => {
    beforeEach(() => {
      renderContactBar();
    });

    it('renders the contact bar', () => {
      screen.getByText('연락하기');
      screen.getByText('홈페이지');
    });
  });
});
