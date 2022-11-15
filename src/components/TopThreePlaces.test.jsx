import { render, screen } from '@testing-library/react';

import TopThreePlaces from './TopThreePlaces';

const context = describe;

describe('TopThreePlaces', () => {
  function renderTopThreePlaces() {
    render(<TopThreePlaces />);
  }

  context('A user clicks top 3 menu', () => {
    it('renders TopThreePlaces', () => {
      renderTopThreePlaces();

      screen.getByText('오늘은 어디가요? TOP 3');
      screen.getByText('오어디 회원님들이 추천하는 장소는 어디일까요?');
      screen.getByText('1위');
      screen.getByText('2위');
      screen.getByText('3위');
    });
  });
});
