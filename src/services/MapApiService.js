/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class MapApiService {
  // async fetchAllPositions() {
  //   const url = `${baseUrl}/map`;
  //   const { data } = await axios.get(url);
  //   return data.places;
  // }

  async fetchFilteredPlaces(sido, sigungu, category) {
    const url = `${baseUrl}/map`;
    const params = { sido, sigungu, category };
    const { data } = await axios.get(url, { params });
    return data.places;
  }

  async fetchSelectedPlace(id) {
    const url = `${baseUrl}/places`;
    const params = { id };
    const { data } = await axios.get(url, { params });
    return data;
  }
}

export const mapApiService = new MapApiService();
