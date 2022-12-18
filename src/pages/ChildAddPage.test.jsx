import { fireEvent, render, screen } from '@testing-library/react';
import ChildAddPage from './ChildAddPage';

let ko;

jest.mock('date-fns/esm/locale', () => () => ({
  ko,
}));

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let errorMessage;

const setGender = jest.fn();
const setBirthday = jest.fn();
const addChild = jest.fn();
const clearError = jest.fn();
const clearAddChildState = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  errorMessage,
  setGender,
  setBirthday,
  addChild,
  clearError,
  clearAddChildState,
}));

const context = describe;

describe('ChildAddPage', () => {
  function renderChildAddPage() {
    render(<ChildAddPage />);
  }

  context('A user clicks to add his/her child information', () => {
    beforeEach(() => {
      // ko = new Date('2021-04-23T09:30:00+09:00');
    });

    it('renders ChildAddPage', () => {
      renderChildAddPage();

      screen.getByText('아이 정보 입력하기');

      fireEvent.change(screen.getByLabelText('성별을 선택해주세요.'), {
        target: { value: '왕자님' },
      });

      expect(setGender).toBeCalledWith('왕자님');

      // TODO. DatePicker 문제 해결 필요

      // fireEvent.change(screen.getByLabelText('생일(또는 예정일)을 입력해주세요.'), {
      //   target: { value: new Date('2019-01-26') },
      // });

      // expect(setBirthday).toBeCalledWith('');

      // fireEvent.click(screen.getByText('완료'));

      // expect(addChild).toBeCalled();

      // expect(navigate).toBeCalled();
    });
  });
});
