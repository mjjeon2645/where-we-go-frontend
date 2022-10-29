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
    const positions = mapApiService.fetchAllPositions();
    this.positions = positions;
    this.publish();
  }
}

export const mapStore = new MapStore();
