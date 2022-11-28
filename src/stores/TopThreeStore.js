import { topThreeApiService } from '../services/TopThreeApiService';
import { youtubeApiService } from '../services/YoutubeApiService';
import Store from './Store';

export default class TopThreeStore extends Store {
  constructor() {
    super();

    this.topThreePlaces = [];
    this.youtubes = [];

    this.firstPlace = {};
    this.secondPlace = {};
    this.thirdPlace = {};

    this.firstPlaceYoutubeData = {};
    this.secondPlaceYoutubeData = [];
    this.thirdPlaceYoutubeData = [];
  }

  // TODO. 구글 할당량 정책으로 인해 현재 영상 1개만 가져오도록 함. 추후 리팩터링 필요
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
    this.firstPlaceYoutubeData = firstPlaceYoutubeData;

    // const secondPlaceYoutubeData = await this.fetchYoutubeData(secondPlace.name);
    // const thirdPlaceYoutubeData = await this.fetchYoutubeData(thirdPlace.name);

    // this.youtubes = [
    //   firstPlaceYoutubeData,
    //   secondPlaceYoutubeData,
    //   thirdPlaceYoutubeData,
    // ];

    this.publish();
  }

  async fetchYoutubeData(keyword) {
    try {
      const data = await youtubeApiService.fetchYoutubeData(`${keyword} 아기랑`);
      this.publish();
      return data;
    } catch (error) {
      return '';
    }
  }
}

export const topThreeStore = new TopThreeStore();
