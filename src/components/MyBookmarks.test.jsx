import { render, screen } from '@testing-library/react';
import MyBookmarks from './MyBookmarks';

test('MyBookmarks', () => {
  render(<MyBookmarks />);

  screen.getByText('즐겿자기');
});
