import { render, screen } from '@testing-library/react';
import MyChildren from './MyChildren';

test('MyChildren', () => {
  render(<MyChildren />);

  screen.getByText('아이 정보');
});
