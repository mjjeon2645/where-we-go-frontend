import { fireEvent, render, screen } from '@testing-library/react';

import PlaceInformationPopup from './PlaceInformationPopup';

const context = describe;

let selectedPlace;

const handlePlaceInformationPopupCloseClick = jest.fn();

describe('PlaceInformationPopup', () => {
  function renderPlaceInformationPopup() {
    render(<PlaceInformationPopup
      selectedPlace={selectedPlace}
      handlePlaceInformationPopupCloseClick={handlePlaceInformationPopupCloseClick}
    />);
  }

  context('the place id 3 is selected', () => {
    beforeEach(() => {
      selectedPlace = {
        placeId: 3,
        name: '양양 쏠비치',
        position: {
          latitude: 38.086867,
          longitude: 128.665343,
        },
        address: {
          fullAddress: '강원도 양양군 손양면 선사유적로 678',
          sido: '강원도',
          sigungu: '양양군',
        },
        category: '숙박/캠핑',
        businessHours: {
          sunday: '연중무휴',
          monday: '연중무휴',
          tuesday: '연중무휴',
          wednesday: '연중무휴',
          thursday: '연중무휴',
          friday: '연중무휴',
          saturday: '연중무휴',
        },
        imageSource: {
          firstImage: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          secondImage: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          thirdImage: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      };
      renderPlaceInformationPopup();
    });

    it('shows information of place id 3', () => {
      screen.getByText('양양 쏠비치');
      screen.getByText('강원도 양양군');
      screen.getByText('숙박/캠핑');
      screen.getByText('연중무휴');
    });
  });

  context('user wants to close the popup', () => {
    it('is closed when user clicked the X button', () => {
      renderPlaceInformationPopup();

      fireEvent.click(screen.getByText('X'));

      expect(handlePlaceInformationPopupCloseClick).toBeCalled();
    });
  });
});
