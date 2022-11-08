import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.places = [];
    this.filteredPlaces = [];

    this.selectedPlace = {};

    this.sido = '전체';
    this.sigungu = '';
    this.category = '전체';
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

  // async fetchAllPositions() {
  //   const positions = await mapApiService.fetchAllPositions();
  //   this.positions = positions;
  //   this.publish();
  // }

  async fetchSelectedPlace(id) {
    this.selectedPlace = await mapApiService.fetchSelectedPlace(id);
    this.publish();
  }

  async fetchFilteredPlaces(sido, sigungu, category) {
    const places = await mapApiService.fetchFilteredPlaces(sido, sigungu, category);
    this.places = places;
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

  clearFilterState() {
    this.sido = '';
    this.sigungu = '';
    this.category = '';
  }
}

export const mapStore = new MapStore();
