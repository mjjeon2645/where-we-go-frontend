import { fireEvent, render, screen } from '@testing-library/react';

import PlaceLocationFilter from './PlaceLocationFilter';

const context = describe;

const setSido = jest.fn();
const setSigungu = jest.fn();

let sido;
let sigungu;

describe('LocationFilter', () => {
  function renderPlaceLocationFilter() {
    render(<PlaceLocationFilter
      setSido={setSido}
      setSigungu={setSigungu}
      sido={sido}
      sigungu={sigungu}
    />);
  }

  context('When a filter menu loaded', () => {
    it('renders LocationFilter', () => {
      renderPlaceLocationFilter();

      screen.getByText('어디로 갈까요?');
      screen.getByText('시/도');
      screen.getAllByText('전체');
      screen.getByText('서울');
      screen.getByText('경기');
      screen.getByText('인천');
      screen.getByText('경상');
      screen.getByText('충청');
      screen.getByText('전라');
      screen.getByText('강원');
      screen.getByText('부산');
      screen.getByText('제주');
      screen.getByText('시/군/구');
      screen.getByText('선택');
    });
  });

  context('When a user click 서울, 용산구', () => {
    sido = '서울';
    sigungu = '용산구';

    it('changes state of sido', () => {
      renderPlaceLocationFilter();

      fireEvent.click(screen.getByText('서울'));
      expect(setSido).toBeCalled();

      fireEvent.click(screen.getByText('용산구'));
      expect(setSigungu).toBeCalled();
    });
  });
});
