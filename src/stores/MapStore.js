import { mapApiService } from '../services/MapApiService';

import Store from './Store';

export default class MapStore extends Store {
  constructor() {
    super();

    this.places = [];
    this.filteredPlaces = [];

    this.selectedPlace = {};

    this.sido = '전체';
    this.sigungu = '';
    this.category = '전체';

    this.imageNumber = 1;

    this.reservationState = 'possible';
    this.parking = 'possible';
    this.outsideFood = 'possible';
    this.nursingRoom = 'possible';

    this.copyState = false;
  }

  async fetchFilteredPlaces(sido, sigungu, category) {
    const places = await mapApiService.fetchFilteredPlaces(sido, sigungu, category);
    this.places = places;
    this.publish();
  }

  selectedPlaceShortInformation(id) {
    this.selectedPlace = this.places.find((value) => value.placeId === id);
    this.publish();
  }

  async fetchSelectedPlaceDetail(id) {
    const place = await mapApiService.fetchSelectedPlace(id);
    this.selectedPlace = place;
    this.reservationState = place.placeServices.reservation;
    this.parkingState = place.placeServices.parking;
    this.outsideFoodState = place.placeServices.outsideFood;
    this.nursingRoomState = place.placeServices.nursingRoom;
    this.publish();
  }

  changeSido(sido) {
    this.sido = sido;
    this.publish();
  }

  changeSigungu(sigungu) {
    this.sigungu = sigungu;
    this.publish();
  }

  changePlaceCategory(category) {
    this.category = category;
    this.publish();
  }

  async clearFilterState() {
    this.sido = '전체';
    this.sigungu = '';
    this.category = '전체';
    await this.fetchFilteredPlaces(this.sido, this.sigungu, this.category);
    this.publish();
  }

  increaseImageNumber() {
    if (this.imageNumber === 3) {
      this.imageNumber = 1;
      this.publish();
      return;
    }

    if (this.imageNumber !== 3) {
      this.imageNumber += 1;
      this.publish();
    }
  }

  decreaseImageNumber() {
    if (this.imageNumber === 1) {
      this.imageNumber = 3;
      this.publish();
      return;
    }

    if (this.imageNumber !== 1) {
      this.imageNumber -= 1;
      this.publish();
    }
  }

  setCopyState() {
    this.copyState = true;
    this.publish();

    setTimeout(() => this.setCopyStateReset(), 3000);
  }

  setCopyStateReset() {
    this.copyState = false;
    this.publish();
  }

  resetImageNumber() {
    this.imageNumber = 1;
  }
}

export const mapStore = new MapStore();
