// /* eslint-disable class-methods-use-this */
// import axios from 'axios';
// import youtubeConfig from '../youtube.config';

// const baseUrl = youtubeConfig.youtubeApiBaseUrl;
// const { apiKey } = youtubeConfig;

// export default class YoutubeApiService {
//   async fetchYoutubeData(keyword) {
//     const url = `${baseUrl}/search`;
//     const { data } = await axios.get(url, {
//       params: {
//         part: 'snippet',
//         maxResults: 2,
//         order: 'relevance',
//         q: `${keyword}`,
//         type: 'video',
//         safeSearch: 'strict',
//         videoEmbeddable: true,
//         videoDuration: 'medium',
//         key: apiKey,
//       },
//       header: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true,
//       },
//     });

//     return data.items;
//   }
// }

// export const youtubeApiService = new YoutubeApiService();
