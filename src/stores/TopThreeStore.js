/* eslint-disable class-methods-use-this */
import { topThreeApiService } from '../services/TopThreeApiService';
import { youtubeApiService } from '../services/YoutubeApiService';
import Store from './Store';

export default class TopThreeStore extends Store {
  constructor() {
    super();

    this.topThreePlaces = [];
    this.youtubes = [];
  }

  // TODO. 구글 할당량 정책 고려할 것.
  async fetchTopThreePlaces() {
    const data = await topThreeApiService.fetchTopThreePlaces();

    this.topThreePlaces = data;

    const firstPlace = data[0];
    this.firstPlace = firstPlace;

    const secondPlace = data[1];
    this.secondPlace = secondPlace;

    const thirdPlace = data[2];
    this.thirdPlace = thirdPlace;

    const firstPlaceYoutubeData = await this.fetchYoutubeData(firstPlace.name);
    const secondPlaceYoutubeData = await this.fetchYoutubeData(secondPlace.name);
    const thirdPlaceYoutubeData = await this.fetchYoutubeData(thirdPlace.name);

    this.youtubes = [
      ...firstPlaceYoutubeData,
      ...secondPlaceYoutubeData,
      ...thirdPlaceYoutubeData,
    ];

    this.publish();
  }

  async fetchYoutubeData(keyword) {
    try {
      const data = await youtubeApiService.fetchYoutubeData(`${keyword} 아기랑`);
      return data;
    } catch (error) {
      return '';
    }
  }
}

export const topThreeStore = new TopThreeStore();
