import { render, screen } from '@testing-library/react';

import { loadKakaoMap } from '../utils/KakaoMap';

import MapPage from './MapPage';

jest.mock('../utils/KakaoMap');

const fetchAllPositions = jest.fn();

jest.mock('../hooks/useMapStore', () => () => ({
  fetchAllPositions,
}));

describe('MapPage', () => {
  beforeEach(() => {
    loadKakaoMap.mockImplementation(() => 'KAKAO');
  });

  it('renders title', () => {
    render(<MapPage />);

    screen.getByText('Map Page');
    expect(loadKakaoMap).toBeCalled();
    expect(fetchAllPositions).toBeCalled();
  });
});
