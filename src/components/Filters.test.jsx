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
    it('renders title and filter options', () => {
      renderFilters();

      screen.getByText(/뒤로가기/);
      screen.getByText(/어디로 갈까요?/);
      screen.getByText('시/도');
      screen.getByText('어떤 곳을 원하세요?');
      screen.getByText('필터 적용하기');

      fireEvent.click(screen.getByText(/뒤로가기/));
      expect(goBackFromFilterPage).toBeCalled();
    });
  });

  context('a user select conditions', () => {
    beforeEach(() => {
      sido = '서울';
      sigungu = '전체';
      category = '키즈존 맛집';
    });

    it('filter the locations', () => {
      renderFilters();

      fireEvent.click(screen.getByText('서울'));
      expect(setSido).toBeCalledWith('서울');

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: '전체' },
      });

      expect(setSigungu).toBeCalledWith('전체');

      fireEvent.click(screen.getByText('키즈존 맛집'));
      expect(setPlaceCategory).toBeCalledWith('키즈존 맛집');

      fireEvent.click(screen.getByText('필터 적용하기'));
      expect(runFiltering).toBeCalled();
    });
  });
});
