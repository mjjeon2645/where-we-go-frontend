export function loadSidoOptions() {
  const sidoArray = [
    {
      id: 0, en: 'total', ko: '전체', selected: false,
    },
    {
      id: 1, en: 'seoul', ko: '서울', selected: false,
    },
    {
      id: 2, en: 'kyoungki', ko: '경기', selected: false,
    },
    {
      id: 3, en: 'incheon', ko: '인천', selected: false,
    },
    {
      id: 4, en: 'kyeongsang', ko: '경상', selected: false,
    },
    {
      id: 5, en: 'chungcheong', ko: '충청', selected: false,
    },
    {
      id: 6, en: 'jeonla', ko: '전라', selected: false,
    },
    {
      id: 7, en: 'kangwon', ko: '강원', selected: false,
    },
    {
      id: 8, en: 'busan', ko: '부산', selected: false,
    },
    {
      id: 9, en: 'jeju', ko: '제주', selected: false,
    },
  ];

  return sidoArray;
}

export function loadSigunguOptions() {
  const sigunguArray = [
    {
      id: 0,
      sido: '전체',
      sigunguLists: [
        { id: 0, name: '전체' },
      ],
    },
    {
      id: 1,
      sido: '서울',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양천구' },
        { id: 2, name: '성동구' },
      ],
    },
    {
      id: 2,
      sido: '경기',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양주시' },
        { id: 2, name: '일산동구' },
      ],
    },
    {
      id: 3,
      sido: '인천',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '계양구' },
        { id: 2, name: '부평구' },
      ],
    },
    {
      id: 4,
      sido: '경상',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '구미시' },
        { id: 2, name: '울산시' },
      ],
    },
    {
      id: 5,
      sido: '충청',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '대전시' },
        { id: 2, name: '세종시' },
      ],
    },
    {
      id: 6,
      sido: '전라',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '목포시' },
        { id: 2, name: '익산시' },
      ],
    },
    {
      id: 7,
      sido: '강원',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '춘천시' },
        { id: 2, name: '양양군' },
      ],
    },
    {
      id: 8,
      sido: '부산',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '해운대구' },
        { id: 2, name: '동래구' },
        { id: 3, name: '111' },
      ],
    },
    {
      id: 9,
      sido: '제주',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '제주시' },
        { id: 2, name: '서귀포시' },
        { id: 3, name: '테스트' },
      ],
    },
  ];

  return sigunguArray;
}

// TODO: Delete This!
export const xxx = '';
