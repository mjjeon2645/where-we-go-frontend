import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.positions = [];
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
    this.positions = mapApiService.fetchAllPositions();
    this.publish();
  }
}

export const mapStore = new MapStore();
