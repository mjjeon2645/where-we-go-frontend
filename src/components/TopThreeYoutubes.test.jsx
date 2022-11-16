import { render, screen } from '@testing-library/react';
import TopThreeYoutubes from './TopThreeYoutubes';

const context = describe;

describe('TopThreeYoutubes', () => {
  function renderTopThreeYoutubes() {
    render(<TopThreeYoutubes />);
  }

  context('A user clicks top3 menu', () => {
    it('renders top three youtubes', () => {
      renderTopThreeYoutubes();

      screen.getByText('Youtube로 보는 TOP 3');
    });
  });
});
