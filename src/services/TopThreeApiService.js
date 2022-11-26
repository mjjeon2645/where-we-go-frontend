/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class TopThreeApiService {
  async fetchTopThreePlaces() {
    const url = `${baseUrl}/top-three-places`;
    const { data } = await axios.get(url);
    console.log(data.topThreePlaces);
    return data.topThreePlaces;
  }
}

export const topThreeApiService = new TopThreeApiService();
