import { topThreeApiService } from '../services/TopThreeApiService';

export default class TopThreeStore {
  constructor() {
    this.listeners = new Set();

    this.topThreePlaces = [];
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

  async fetchTopThreePlaces() {
    const data = await topThreeApiService.fetchTopThreePlaces();
    this.topThreePlaces = data;

    this.publish();
  }
}

export const topThreeStore = new TopThreeStore();
