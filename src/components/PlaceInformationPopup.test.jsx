import { render, screen } from '@testing-library/react';
import PlaceInformationPopup from './PlaceInformationPopup';

const context = describe;

let selectedPlace;
const setIsSelected = jest.fn();

describe('PlaceInformationPopup', () => {
  function renderPlaceInformationPopup() {
    render(<PlaceInformationPopup
      selectedPlace={selectedPlace}
      setIsSelected={setIsSelected}
    />);
  }

  context('the place id 3 is selected', () => {
    beforeEach(() => {
      selectedPlace = {
        id: 3,
        title: '양양 쏠비치',
        position: {
          latitude: 38.086867,
          longitude: 128.665343,
        },
        address: {
          fullAddress: '강원도 양양군 손양면 선사유적로 678',
          city: '강원도',
          area: '양양군',
        },
        type: '숙박/캠핑',
        businessHours: '연중무휴',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      };
    });

    it('shows information of place id 3', () => {
      renderPlaceInformationPopup();

      screen.getByText('양양 쏠비치');
      screen.getByText('강원도 양양군');
      screen.getByText('숙박/캠핑');
      screen.getByText('연중무휴');
    });
  });
});
