/* eslint-disable class-methods-use-this */

export default class MapApiService {
  fetchAllPositions() {
    return [
      {
        id: 0,
        title: '덕수궁',
        latitude: 37.565804,
        longitude: 126.975146,
      },
      {
        id: 1,
        title: '국립중앙박물관',
        latitude: 37.523850,
        longitude: 126.980470,
      },
      {
        id: 2,
        title: '서울숲 공원',
        latitude: 37.544387,
        longitude: 127.037442,
      },
      {
        id: 3,
        title: '양양 쏠비치',
        latitude: 38.086867,
        longitude: 128.665343,
      },
      {
        id: 4,
        title: '과천 서울랜드',
        latitude: 37.434156,
        longitude: 127.020126,
      },
    ];
  }

  fetchPlaceInformation(id) {
    const places = [
      {
        id: 0,
        title: '덕수궁',
        position: {
          latitude: 37.565804,
          longitude: 126.975146,
        },
        address: {
          fullAddress: '서울특별시 중구 세종대로 99',
          city: '서울시',
          area: '중구',
        },
        type: '교육/체험',
        businessHours: '토요일: 10:00~18:00',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      },
      {
        id: 1,
        title: '국립중앙박물관',
        position: {
          latitude: 37.523850,
          longitude: 126.980470,
        },
        address: {
          fullAddress: '서울특별시 용산구 서빙고로 137',
          city: '서울시',
          area: '용산구',
        },
        type: '교육/체험',
        businessHours: '토요일: 10:00~18:00',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      },
      {
        id: 2,
        title: '서울숲 공원',
        position: {
          latitude: 37.544387,
          longitude: 127.037442,
        },
        address: {
          fullAddress: '서울특별시 성동구 뚝섬로 273',
          city: '서울시',
          area: '성동구',
        },
        type: '자연',
        businessHours: '연중무휴',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      },
      {
        id: 3,
        title: '양양 쏠비치',
        position: {
          latitude: 38.086867,
          longitude: 128.665343,
        },
        address: {
          fullAddress: '강원도 양양군 손양면 선사유적로 678',
          city: '강원도',
          area: '양양군',
        },
        type: '숙박/캠핑',
        businessHours: '연중무휴',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      },
      {
        id: 4,
        title: '과천 서울랜드',
        position: {
          latitude: 37.434156,
          longitude: 127.020126,
        },
        address: {
          fullAddress: '경기도 과천시 광명로 181',
          city: '경기도',
          area: '과천시',
        },
        type: '자연',
        businessHours: '토요일: 09:00~22:00',
        imageSources: {
          first: 'https://user-images.githubusercontent.com/104840243/198858240-ef8949d2-c294-4ab8-8a4c-fc42717bee8e.png',
          second: 'https://user-images.githubusercontent.com/104840243/198858244-29a83802-3ebe-42c8-894a-151c0962b8da.png',
          third: 'https://user-images.githubusercontent.com/104840243/198858249-0e5eb65b-1a68-4549-bace-b906aa550413.png',
        },
      },
    ];

    return places.filter((place) => place.id === id)[0];
  }
}

export const mapApiService = new MapApiService();
