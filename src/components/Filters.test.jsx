import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filters from './Filters';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));
const context = describe;

const setFilteredPositions = jest.fn();
const handleFilterCloseClick = jest.fn();
const setSido = jest.fn();
const setSigungu = jest.fn();
const setPlaceCategory = jest.fn();
const setFilterPageOn = jest.fn();
const setFilterResultBarOn = jest.fn();

let sido;
let sigungu;
let category;

describe('Filters', () => {
  function renderFilter() {
    render(
      <Filters
        setFilteredPositions={setFilteredPositions}
        handleFilterCloseClick={handleFilterCloseClick}
        setSido={setSido}
        setSigungu={setSigungu}
        setPlaceCategory={setPlaceCategory}
        setFilterPageOn={setFilterPageOn}
        setFilterResultBarOn={setFilterResultBarOn}
        sido={sido}
        sigungu={sigungu}
        category={category}
      />,
    );
  }

  context('renders Filters', () => {
    beforeEach(() => {
      renderFilter();
    });

    it('renders title and filter options', () => {
      screen.getByText(/돌아가기/);
      screen.getByText('필터 적용하기');
    });
  });

  // context('select all filter options and submit', () => {
  //   beforeEach(() => {
  //     renderFilter();
  //   });

  // TODO. option(select box) 선택방법 해결안됨

  // it('filters places', () => {
  //   fireEvent.click(screen.getByText('서울'));
  //   userEvent.selectOptions(screen.getByRole('option', { name: '전체' }));
  //   fireEvent.click(screen.getByText('자연'));
  //   fireEvent.click(screen.getByText('필터 적용하기'));

  //   expect(setFilteredPositions).toBeCalled();
  //   expect(handleFilterCloseClick).toBeCalled();
  //   expect(setSido).toBeCalled();
  //   expect(setSigungu).toBeCalled();
  //   expect(setPlaceCategory).toBeCalled();
  //   expect(navigate).toBeCalledWith(navigate('/map?sido=경상&sigungu=울산시&type=키즈존 맛집'));
  // });
  // });
});
