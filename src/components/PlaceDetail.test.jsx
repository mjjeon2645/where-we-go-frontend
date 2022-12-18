import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import PlaceDetail from './PlaceDetail';

const context = describe;

let imageNumber;
let selectedPlace;
let copyState;
let bookmarks;

const seePrevImage = jest.fn();
const seeNextImage = jest.fn();
const toggleBookmark = jest.fn();
const copyAddress = jest.fn();

describe('PlaceDetail', () => {
  function renderPlaceDetail() {
    render(<PlaceDetail
      imageNumber={imageNumber}
      selectedPlace={selectedPlace}
      copyState={copyState}
      bookmarks={bookmarks}
      seePrevImage={seePrevImage}
      seeNextImage={seeNextImage}
      toggleBookmark={toggleBookmark}
      copyAddress={copyAddress}
    />);
  }

  context('A user click the popup of place information', () => {
    beforeEach(() => {
      imageNumber = '1';

      selectedPlace = {
        id: 1,
        name: 'KINTEX 뽀로로파크',
        address: {
          fullAddress: '경기도 고양시 일산서구 송포동 1396-43',
          sido: '경기',
          sigungu: '고양시',
        },
        imageSource: {
          firstImage: 'url',
          secondImage: 'image',
          thirdImage: 'image',
        },
        placeServices: {
          reservation: 'possible',
          parking: 'possible',
          outsideFood: 'impossible',
          nursingRoom: 'unchecked',
        },
      };

      bookmarks = [
        { placeId: 1, name: 'KINTEX 뽀로로파크', address: '경기도 고양시 일산서구 송포동 1396-43' },
        { placeId: 3, name: '에코유 캠핑장', address: '경기 동두천시 천보산로359번길 57' },
      ];
    });

    it('renders PlaceDetail', () => {
      renderPlaceDetail();

      screen.getByText('KINTEX 뽀로로파크');
      screen.getByText('1 / 3');
      screen.getByText('편의시설');
      screen.getByText('예약');
      screen.getByText('주차');
      screen.getByText('외부음식');
      screen.getByText('수유실');
      screen.getByText('주소');
      screen.getByText('경기도 고양시 일산서구 송포동 1396-43');
    });
  });

  context('A user clicks copy button', () => {
    it('copies address on clipboard', async () => {
      renderPlaceDetail();

      fireEvent.click(screen.getByTestId('copy-button'));
      expect(copyAddress).toBeCalled();
      screen.findByText('복사 완료!');

      fireEvent.click(screen.getByTestId('bookmark-button'));
      expect(toggleBookmark);
    });
  });

  context('A user clicks the button of prev & next image', () => {
    beforeEach(() => {
      imageNumber = 2;
    });

    it('changes the image', () => {
      renderPlaceDetail();

      screen.getByText('2 / 3');

      fireEvent.click(screen.getByText('<'));
      expect(seePrevImage).toBeCalled();

      fireEvent.click(screen.getByText('>'));
      expect(seeNextImage).toBeCalled();
    });
  });
});
