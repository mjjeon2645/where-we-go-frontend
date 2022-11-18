import { topThreeApiService } from '../services/TopThreeApiService';
import Store from './Store';

export default class TopThreeStore extends Store {
  constructor() {
    super();

    this.topThreePlaces = [];
  }

  async fetchTopThreePlaces() {
    const data = await topThreeApiService.fetchTopThreePlaces();
    this.topThreePlaces = data;

    this.publish();
  }
}

export const topThreeStore = new TopThreeStore();
