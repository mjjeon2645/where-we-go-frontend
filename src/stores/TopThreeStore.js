import { topThreeApiService } from '../services/TopThreeApiService';

export default class TopThreeStore {
  constructor() {
    this.listeners = new Set();

    this.firstPlace = {};
    this.secondPlace = {};
    this.thirdPlace = {};
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
    this.firstPlace = data[0];
    this.secondPlace = data[1];
    this.thirdPlace = data[2];
    this.publish();
  }
}

export const topThreeStore = new TopThreeStore();
