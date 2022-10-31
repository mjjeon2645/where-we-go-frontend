import { render, screen } from '@testing-library/react';

import TopThreePlaces from './TopThreePlaces';

test('TopThreePlaces', () => {
  render(<TopThreePlaces />);

  screen.getByText('Top 3 Page');
});
