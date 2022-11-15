import { render, screen } from '@testing-library/react';

import TopThreePage from './TopThreePage';

const context = describe;

describe('TopThreePage', () => {
  function renderTopThreePage() {
    render(<TopThreePage />);
  }

  context('A user clicks top 3 menu', () => {
    it('renders Top three page', () => {
      renderTopThreePage();

      screen.getByText('Today\'s Top 3');
      screen.getByText('오늘은 어디가요? TOP 3');
      screen.getByText('Youtube로 보는 TOP 3');
    });
  });
});
