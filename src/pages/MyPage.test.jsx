import { fireEvent, render, screen } from '@testing-library/react';

import MyPage from './MyPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

let userInformation;
let bookmarks;
let children;

const fetchUserInformation = jest.fn();
const fetchChildren = jest.fn();
const fetchBookmarks = jest.fn();
const clearError = jest.fn();
const deleteChild = jest.fn();
const toggleBookmark = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  userInformation,
  bookmarks,
  children,
  fetchUserInformation,
  fetchChildren,
  fetchBookmarks,
  clearError,
  deleteChild,
  toggleBookmark,
}));

const context = describe;

describe('MyPage', () => {
  function renderMyPage() {
    render(<MyPage />);
  }

  context('a user clicks myPageMenu with logged in', () => {
    beforeEach(() => {
      userInformation = {
        nickname: '민지룽룽',
        email: 'angel2645@naver.com',
        authBy: 'naver',
      };
      children = [
        { id: 1, gender: '공주님', birthday: '2022-10-10' },
        { id: 2, gender: '아직 몰라요', birthday: '2023-05-30' },
      ];
      bookmarks = [
        { placeId: 5, name: '서울랜드', address: '서울 과천' },
        { placeId: 6, name: '에버랜드', address: '경기 용인시' },
      ];
    });

    it('renders mypage with information', () => {
      renderMyPage();

      expect(fetchUserInformation).toBeCalled();
      expect(fetchChildren).toBeCalled();
      expect(fetchBookmarks).toBeCalled();
      screen.getByText('내 정보');
      screen.getByText(/민지룽룽/);
      screen.getByText('소셜 로그인 정보');
      screen.getByText('네이버 로그인');

      fireEvent.click(screen.getByTestId(2));
      expect(deleteChild).toBeCalledWith(2);

      fireEvent.click(screen.getByTestId(6));
      expect(toggleBookmark).toBeCalledWith(6);
    });
  });
});
