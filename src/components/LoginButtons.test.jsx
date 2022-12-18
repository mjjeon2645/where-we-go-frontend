import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import LoginButtons from './LoginButtons';

let naverRedirectUrl;
let kakaoRedirectUrl;
const getTrialAccessAuth = jest.fn();

test('LoginButtons', () => {
  render(<LoginButtons
    naverUrl={naverRedirectUrl}
    kakaoUrl={kakaoRedirectUrl}
    getTrialAccessAuth={getTrialAccessAuth}
  />);

  fireEvent.click(screen.getByRole('button'));

  expect(getTrialAccessAuth).toBeCalled();
});
