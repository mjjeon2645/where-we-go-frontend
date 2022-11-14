import { fireEvent, render, screen } from '@testing-library/react';

import Filters from './Filters';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));
const context = describe;

const goBackFromFilterPage = jest.fn();
const runFiltering = jest.fn();
const setSido = jest.fn();
const setSigungu = jest.fn();
const setPlaceCategory = jest.fn();

let sido;
let sigungu;
let category;

describe('Filters', () => {
  function renderFilters() {
    render(
      <Filters
        goBackFromFilterPage={goBackFromFilterPage}
        runFiltering={runFiltering}
        setSido={setSido}
        setSigungu={setSigungu}
        setPlaceCategory={setPlaceCategory}
        sido={sido}
        sigungu={sigungu}
        category={category}
      />,
    );
  }

  context('renders Filters', () => {
    beforeEach(() => {
      renderFilters();
    });

    it('renders title and filter options', () => {
      screen.getByText(/돌아가기/);
      screen.getByText(/어디로 갈까요?/);
      screen.getByText('시/도');
      screen.getByText('어떤 곳을 원하세요?');
      screen.getByText('필터 적용하기');

      fireEvent.click(screen.getByText(/돌아가기/));
      expect(goBackFromFilterPage).toBeCalled();
    });
  });
});
