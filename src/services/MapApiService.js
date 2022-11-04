/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class MapApiService {
  async fetchAllPositions() {
    const url = `${baseUrl}/map`;
    const { data } = await axios.get(url);
    return data.places;
  }

  async fetchFilteredPositions(sido, sigungu, category) {
    const url = `${baseUrl}/map`;
    const params = { sido, sigungu, category };
    const { data } = await axios.get(url, { params });
    return data.places;
  }
}

export const mapApiService = new MapApiService();
