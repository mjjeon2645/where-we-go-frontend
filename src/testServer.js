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

  rest.get(`${baseUrl}/map`, async (request, response, context) => {
    const sido = request.url.searchParams.get('sido');
    const sigungu = request.url.searchParams.get('sigungu');
    const category = request.url.searchParams.get('category');

    if (sido === '서울' && sigungu === '성동구' && category === '자연') {
      return response(context.json({
        places: [
          {
            placeId: 4,
            name: '과천 서울랜드',
            address: {
              fullAddress: '서울시 성동구 블라블라',
              sido: '서울',
              sigungu: '성동구',
            },
          },
          {
            placeId: 5,
            name: '서울숲 공원',
            address: {
              fullAddress: '서울시 성동구 블라블라',
              sido: '서울',
              sigungu: '성동구',
            },
          },
        ],
      }));
    }
  }),

  rest.get(`${baseUrl}/places/2`, async (request, response, context) => response(
    context.json({
      id: 2,
      name: '과천 서울랜드',
      address: {
        fullAddress: '경기도 과천시 블라블라',
        sido: '경기',
        sigungu: '과천시',
      },
      placeServices: {
        reservation: 'possible',
        parking: 'possible',
        outsideFood: 'impossible',
        nursingRoom: 'unchecked',
      },
    }),
  )),

  rest.get(`${baseUrl}/top-three-places`, async (request, response, context) => response(
    context.json({
      topThreePlaces: [
        {
          placeId: 4,
          name: '과천 서울랜드',
          address: {
            fullAddress: '경기도 과천시 블라블라',
            sido: '경기',
            sigungu: '과천시',
          },
          averageRate: '4.6',
        },
        {
          placeId: 5,
          name: '키즈카페 까블랑',
          address: {
            fullAddress: '충청 아산시 블라블라',
            sido: '충청',
            sigungu: '아산시',
          },
          averageRate: '4.17',
        },
        {
          placeId: 2,
          name: '킹덤키즈풀빌라',
          address: {
            fullAddress: '경기 가평군 블라블라',
            sido: '경기',
            sigungu: '가평군',
          },
          averageRate: '4.07',
        },
      ],
    }),
  )),

  rest.get(`${baseUrl}/user-reviews/4`, async (request, response, context) => response(
    context.json({
      averageRate: '4.25',
      userReviews: [
        {
          placeId: 4,
          dateOfVisit: '2022-01-03',
          rate: 4,
          body: '정말 재밌었어요 최고!',
        },
        {
          placeId: 4,
          dateOfVisit: '2022-03-03',
          rate: 5,
          body: '너무 재미있었어요!',
        },
      ],
    }),
  )),
);

export default server;

//
