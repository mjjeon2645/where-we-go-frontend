import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.positions = [];
    this.filteredPositions = [];

    this.selectedPlace = {};

    this.sido = '전체';
    this.sigungu = '';
    this.category = '';
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

  fetchSelectedPlaceInformation(id) {
    this.selectedPlace = this.positions.find((value) => value.placeId === id);
    this.publish();
  }

  async fetchFilteredPositions(sido, sigungu, category) {
    const positions = await mapApiService.fetchFilteredPositions(sido, sigungu, category);
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
