import { fireEvent, render, screen } from '@testing-library/react';
import PlaceDetail from './PlaceDetail';

const context = describe;

let imageNumber;
let selectedPlace;

const seePrevImage = jest.fn();
const seeNextImage = jest.fn();
const copyAddress = jest.fn();

describe('PlaceDetail', () => {
  function renderPlaceDetail() {
    render(<PlaceDetail
      imageNumber={imageNumber}
      selectedPlace={selectedPlace}
      seePrevImage={seePrevImage}
      seeNextImage={seeNextImage}
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
    it('copies address on clipboard', () => {
      renderPlaceDetail();

      fireEvent.click(screen.getByText('복사하기'));
      expect(copyAddress).toBeCalled();
    });
  });

  context('A user clicks the button of prev & next image', () => {
    it('changes the image', () => {
      renderPlaceDetail();

      fireEvent.click(screen.getByText('<'));
      expect(seePrevImage).toBeCalled();

      fireEvent.click(screen.getByText('>'));
      expect(seeNextImage).toBeCalled();
    });
  });
});
