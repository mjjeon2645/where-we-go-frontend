import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { loadKakaoMap } from '../utils/KakaoMap';

import MapPage from './MapPage';

jest.mock('../utils/KakaoMap');

const fetchFilteredPositions = jest.fn();

jest.mock('../hooks/useMapStore', () => () => ({
  fetchFilteredPositions,
}));

describe('MapPage', () => {
  beforeEach(() => {
    loadKakaoMap.mockImplementation(() => 'KAKAO');
  });

  it('renders title', () => {
    render(
      <MemoryRouter>
        <MapPage />
      </MemoryRouter>,
    );

    expect(loadKakaoMap).toBeCalled();
    expect(fetchFilteredPositions).toBeCalled();
  });
});
