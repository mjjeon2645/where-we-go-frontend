import { render, screen } from '@testing-library/react';

import MyPage from './MyPage';

test('MyPage', () => {
  render(<MyPage />);

  screen.getByText('My Page');
});
