import { render, screen } from '@testing-library/react';
import PlaceDetailPage from './PlaceDetailPage';

const context = describe;

jest.mock('../utils/KakaoMap');

const navigate = jest.fn();
let location;

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
  useLocation: () => location,
}));

let blogReviews;
const fetchBlogReviews = jest.fn();

jest.mock('../hooks/useBlogReviewStore', () => () => ({
  blogReviews,
  fetchBlogReviews,
}));

let selectedPlace;
let imageNumber;
let copyState;
let contact;
const fetchSelectedPlaceDetail = jest.fn();
const resetImageNumber = jest.fn();
const decreaseImageNumber = jest.fn();
const increaseImageNumber = jest.fn();
const setCopyState = jest.fn();

jest.mock('../hooks/useMapStore', () => () => ({
  selectedPlace,
  imageNumber,
  copyState,
  contact,
  fetchSelectedPlaceDetail,
  resetImageNumber,
  decreaseImageNumber,
  increaseImageNumber,
  setCopyState,
}));

const fetchUsersReviews = jest.fn();

jest.mock('../hooks/useUserReviewStore', () => () => ({
  fetchUsersReviews,
}));

let bookmarks;

const fetchBookmarks = jest.fn();
const toggleBookmark = jest.fn();

jest.mock('../hooks/useUserStore', () => () => ({
  bookmarks,
  fetchBookmarks,
  toggleBookmark,
}));

describe('PlaceDetailPage', () => {
  function renderPlaceDetailPage() {
    render(<PlaceDetailPage />);
  }

  context('User click the place information popup', () => {
    beforeEach(() => {
      location = {
        pathname: '/places/5',
      };

      selectedPlace = {
        imageSource: {
          firstImage: '',
          secondImage: '',
          thirdImage: '',
        },
        contact: {
          number: '010-5555-5555',
          homepage: 'url',
        },
        placeServices: {
          reservation: 'possible',
          parking: 'impossible',
          outdoorFood: 'possible',
        },
        address: {
          fullAddress: '서울시',
        },
      };

      bookmarks = [];
    });

    it('render PlaceDetailPage', () => {
      renderPlaceDetailPage();

      expect(fetchSelectedPlaceDetail).toBeCalledWith('5');

      screen.getByText('상세정보');
      screen.getByText(/블로그 리뷰/);
      screen.getByText('평점/리뷰');
      screen.getByText('편의시설');
      screen.getByText('예약');
      screen.getByText('주차');
      screen.getByText('외부음식');
      screen.getByText('수유실');
      screen.getByText('주소');
      screen.getByText('연락처 안내');
      screen.getByText('홈페이지');
    });
  });
});
