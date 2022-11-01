import { render, screen } from '@testing-library/react';
import LocationFilter from './LocationFilter';

const context = describe;

let selectedCityCode;
const handleCityChange = jest.fn();
const handleSigunguChange = jest.fn();

describe('LocationFilter', () => {
  function renderLocationFilter() {
    render(<LocationFilter
      code={selectedCityCode}
      handleCityChange={handleCityChange}
      handleSigunguChange={handleSigunguChange}
    />);
  }

  context('When a filter menu loaded', () => {
    beforeEach(() => {
      selectedCityCode = 0;
      renderLocationFilter();
      const sigungu = [
        {
          id: 0,
          city: 'seoul',
          sigunguLists: [
            { id: 0, name: '전체' },
            { id: 1, name: '양천구' },
            { id: 2, name: '성동구' },
          ],
        },
        {
          id: 1,
          city: 'kyoungki',
          sigunguLists: [
            { id: 0, name: '전체' },
            { id: 1, name: '양주시' },
            { id: 2, name: '일산동구' },
          ],
        }];
    });

    it('renders LocationFilter', () => {
      screen.getByText('서울');
    });
  });
});
