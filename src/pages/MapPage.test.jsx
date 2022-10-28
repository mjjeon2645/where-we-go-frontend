import { render, screen } from '@testing-library/react';

import MapPage from './MapPage';

jest.mock('../modules/KakaoMapModule', () => () => ({
  KakaoMap() {
    return {};
  },
}));

test('MapPage', () => {
  render(<MapPage />);

  screen.getByText('Map Page');
});
