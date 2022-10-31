import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.positions = [];

    this.selectedPlace = {};
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
}

export const mapStore = new MapStore();