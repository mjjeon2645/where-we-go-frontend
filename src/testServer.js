/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/blog-reviews/4`, async (request, response, context) => response(
    context.json({
      blogReviews: [
        {
          id: 0,
          placeId: 4,
          title: '봄이의 22개월 기록. 운 좋게 피해갔던 코로나 19',
          author: '작성자0',
          date: '2022-04-21',
          imageSource: 'https://',
          url: 'https://',
        },
        {
          id: 1,
          placeId: 4,
          title: '내돈내산 3월 가족여행 1탄. 양양 쏠비치 할인가격으로 예약하는법',
          author: '작성자1',
          date: '2022-05-23',
          imageSource: 'https://',
          url: 'https://',
        },
        {
          id: 2,
          placeId: 4,
          title: '내돈내산! 아기텐트 코아코아 아이스크림마켓 키즈텐트',
          author: '작성자2',
          date: '2022-10-21',
          imageSource: 'https://',
          url: 'https://',
        },
      ],
    }),
  )),
);

export default server;
