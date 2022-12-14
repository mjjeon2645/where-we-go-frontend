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
          fullAddress: 'μμΈμ',
        },
      };

      bookmarks = [];
    });

    it('render PlaceDetailPage', () => {
      renderPlaceDetailPage();

      expect(fetchSelectedPlaceDetail).toBeCalledWith('5');

      screen.getByText('μμΈμ λ³΄');
      screen.getByText(/λΈλ‘κ·Έ λ¦¬λ·°/);
      screen.getByText('νμ /λ¦¬λ·°');
      screen.getByText('νΈμμμ€');
      screen.getByText('μμ½');
      screen.getByText('μ£Όμ°¨');
      screen.getByText('μΈλΆμμ');
      screen.getByText('μμ μ€');
      screen.getByText('μ£Όμ');
      screen.getByText('μ°λ½μ² μλ΄');
      screen.getByText('ννμ΄μ§');
    });
  });
});
