import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Childform from './ChildForm';

const context = describe;

const ko = {};

jest.mock('date-fns/esm/locale', () => () => ({
  ko,
}));

let date;
let errorMessage;

const setGender = jest.fn();
const setBirthday = jest.fn();
const addChild = jest.fn();
const goBackPrevPage = jest.fn();

describe('ChildForm', () => {
  function renderChildForm() {
    render(<Childform
      date={date}
      errorMessage={errorMessage}
      setGender={setGender}
      setBirthday={setBirthday}
      addChild={addChild}
      goBackPrevPage={goBackPrevPage}
    />);
  }

  context('A user clicks to add his/her child information', () => {
    it('renders MyChildForm', async () => {
      renderChildForm();

      screen.getByText('성별을 선택해주세요.');
      screen.getByText('왕자님');
      screen.getByText('공주님');
      screen.getByText('아직 몰라요');
      screen.getByText('생일(또는 예정일)을 입력해주세요.');
      screen.getByText('완료');

      fireEvent.change(screen.getByLabelText('성별을 선택해주세요.'), {
        target: { value: '왕자님' },
      });

      expect(setGender).toBeCalledWith('왕자님');

      fireEvent.change(screen.getByLabelText('생일(또는 예정일)을 입력해주세요.'), {
        target: { value: '2022-11-10' },
      });

      expect(setBirthday).toBeCalled();

      fireEvent.click(screen.getByText('완료'));

      await waitFor(() => {
        expect(addChild).toBeCalled();
      });
    });
  });

  context('A user did not input gender of child', () => {
    beforeEach(() => {
      errorMessage = '모든 항목을 정확히 입력해주세요!';
    });

    it('calls an error message', async () => {
      renderChildForm();

      fireEvent.change(screen.getByLabelText('생일(또는 예정일)을 입력해주세요.'), {
        target: { value: '2022-11-10' },
      });

      expect(setBirthday).toBeCalled();

      fireEvent.click(screen.getByText('완료'));

      screen.getByText('모든 항목을 정확히 입력해주세요!');
    });
  });
});
