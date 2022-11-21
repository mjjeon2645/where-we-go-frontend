import { render, screen } from '@testing-library/react';
import PlaceDetailPage from './PlaceDetailPage';

const context = describe;

const navigate = jest.fn();

jest.mock('../utils/KakaoMap');

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

let blogReviews;
const fetchBlogReviews = jest.fn();

jest.mock('../hooks/useBlogReviewStore', () => () => ({
  blogReviews,
  fetchBlogReviews,
}));

let selectedPlace;
let contact;
const fetchSelectedPlaceDetail = jest.fn();

jest.mock('../hooks/useMapStore', () => () => ({
  selectedPlace,
  contact,
  fetchSelectedPlaceDetail,
}));

const fetchUsersReviews = jest.fn();

jest.mock('../hooks/useUserReviewStore', () => () => ({
  fetchUsersReviews,
}));

describe('PlaceDetailPage', () => {
  function renderPlaceDetailPage() {
    render(<PlaceDetailPage />);
  }

  context('User click the place information popup', () => {
    beforeEach(() => {
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
    });

    it('render PlaceDetailPage', () => {
      renderPlaceDetailPage();

      screen.getByText(/뒤로가기/);
      screen.getByText('상세정보');
      screen.getByText(/블로그 리뷰/);
      screen.getByText('평점/리뷰');
      screen.getByText('편의시설');
      screen.getByText('예약');
      screen.getByText('주차');
      screen.getByText('외부음식');
      screen.getByText('수유실');
      screen.getByText('주소');
      screen.getByText('연락하기');
      screen.getByText('홈페이지');
    });
  });
});
