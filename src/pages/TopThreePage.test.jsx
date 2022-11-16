import { render, screen, waitFor } from '@testing-library/react';

import TopThreePage from './TopThreePage';

const context = describe;

describe('TopThreePage', () => {
  function renderTopThreePage() {
    render(<TopThreePage />);
  }

  context('A user clicks top 3 menu', () => {
    it('renders Top three page', async () => {
      renderTopThreePage();

      await waitFor(() => {
        screen.getByText('Today\'s Top 3');
      });
    });
  });
});
