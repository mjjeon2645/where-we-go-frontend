import { fireEvent, render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

const context = describe;

const goFilterPage = jest.fn();
const resetFilter = jest.fn();

let sido;
let sigungu;
let category;

describe('filterBar', () => {
  function renderFilterBar() {
    render(<FilterBar
      goFilterPage={goFilterPage}
      resetFilter={resetFilter}
      sido={sido}
      sigungu={sigungu}
      category={category}
    />);
  }

  context('when a user clicks the 지도 검색 menu', () => {
    beforeEach(() => {
      sido = '전체';
      sigungu = '';
      category = '전체';
    });

    it('renders filter bar', () => {
      renderFilterBar();
      screen.getByText('필터 조건을 설정해주세요');
    });
  });

  context('when a user filtered with 서울, 양천구, 전체', () => {
    beforeEach(() => {
      sido = '서울';
      sigungu = '양천구';
      category = '전체';
    });

    it('renders filter bar', () => {
      renderFilterBar();
      screen.getByText(/서울 - 양천구 - 전체/);
    });
  });

  context('when a user clicks the filter button', () => {
    beforeEach(() => {
      renderFilterBar();
    });

    it('changes pages to filters', () => {
      fireEvent.click(screen.getByRole('button', { name: '필터' }));
      expect(goFilterPage).toBeCalled();
    });
  });

  context('when a user wants to reset filter conditions', () => {
    beforeEach(() => {
      sido = '서울';
      sigungu = '양천구';
      category = '전체';
    });

    it('changes texts on a filter bar', () => {
      renderFilterBar();

      screen.getByText(/서울 - 양천구 - 전체/);
      fireEvent.click(screen.getByText('리셋하기'));
      expect(resetFilter).toBeCalled();
    });
  });
});
