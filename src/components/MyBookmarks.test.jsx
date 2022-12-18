import { fireEvent, render, screen } from '@testing-library/react';
import MyBookmarks from './MyBookmarks';

const goPlaceDetailPage = jest.fn();
const removeBookmark = jest.fn();
let bookmarks;

const context = describe;
describe('MyBookmarks', () => {
  function renderMyBookmarks() {
    render(<MyBookmarks
      goPlaceDetailPage={goPlaceDetailPage}
      removeBookmark={removeBookmark}
      bookmarks={bookmarks}
    />);
  }

  context('a user accesses mypage', () => {
    beforeEach(() => {
      bookmarks = [
        { placeId: 1, name: '서울랜드', address: '서울 과천' },
        { placeId: 3, name: '서울숲', address: '서울시 성동구~' },
      ];
    });

    it('renders a page with mybookmarks', () => {
      renderMyBookmarks();

      screen.getByText('서울랜드');
      screen.getByText('서울시 성동구~');

      fireEvent.click(screen.getByTestId(1));

      expect(removeBookmark).toBeCalled();
    });
  });

  context('a user accesses mypage, but there are no bookmarks', () => {
    beforeEach(() => {
      bookmarks = [];
    });

    it('renders a page with mybookmarks', () => {
      renderMyBookmarks();

      screen.getByText('즐겨찾기 한 장소가 없습니다');
    });
  });
});
