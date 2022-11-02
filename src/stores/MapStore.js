import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.positions = [];

    this.selectedPlace = {};

    this.sido = '기본값';
    this.sigungu = '';
    this.placeType = '';
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  fetchAllPositions() {
    const positions = mapApiService.fetchAllPositions();
    this.positions = positions;
    this.publish();
  }

  fetchSelectedPlaceInformation(id) {
    const place = mapApiService.fetchPlaceInformation(id);
    this.selectedPlace = place;
    this.publish();
  }

  fetchFilteredPositions({ sido, sigungu, placetype }) {
    const positions = mapApiService.fetchFilteredPositions(sido, sigungu, placetype);
    this.positions = positions;
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

  changePlaceType(placeType) {
    this.placeType = placeType;
    this.publish();
  }

  clearFilterState() {
    this.sido = '';
    this.sigungu = '';
    this.placeType = '';
  }
}

export const mapStore = new MapStore();
