import { useState } from 'react';

export default function Test() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const sido = [
    { id: 0, en: 'seoul', ko: '서울' },
    { id: 1, en: 'kyoungki', ko: '경기' },
    { id: 2, en: 'incheon', ko: '인천' },
    { id: 3, en: 'kyeongsang', ko: '경상' },
    { id: 4, en: 'chungcheong', ko: '충청' },
    { id: 5, en: 'jeonla', ko: '전라' },
    { id: 6, en: 'kangwon', ko: '강원' },
    { id: 7, en: 'busan', ko: '부산' },
    { id: 8, en: 'jeju', ko: '제주' },
  ];

  //   const sigungu = [
  //     {
  //       id: 0,
  //       city: '서울',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '양천구' },
  //         { id: 2, name: '성동구' },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       city: '경기',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '양주시' },
  //         { id: 2, name: '일산동구' },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       city: '인천',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '계양구' },
  //         { id: 2, name: '부평구' },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       city: '경상',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '구미시' },
  //         { id: 2, name: '울산시' },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       city: '충청',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '대전시' },
  //         { id: 2, name: '세종시' },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       city: '전라',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '목포시' },
  //         { id: 2, name: '익산시' },
  //       ],
  //     },
  //     {
  //       id: 6,
  //       city: '강원',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '춘천시' },
  //         { id: 2, name: '양양군' },
  //       ],
  //     },
  //     {
  //       id: 7,
  //       city: '부산',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '해운대구' },
  //         { id: 2, name: '동래구' },
  //       ],
  //     },
  //     {
  //       id: 8,
  //       city: '제주',
  //       sigunguLists: [
  //         { id: 0, name: '전체' },
  //         { id: 1, name: '제주시' },
  //         { id: 2, name: '서귀포시' },
  //         { id: 3, name: '테스트' },
  //       ],
  //     },
  //   ];

  //   console.log(sigungu.filter((el) => el.city === val1));
  //   const test = sigungu.filter((el) => el.city === val1)[0].sigunguLists;
  //   console.log(test);

  const sigungu = [
    {
      id: 0,
      city: '서울',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양천구' },
        { id: 2, name: '성동구' },
      ],
    },
    {
      id: 1,
      city: '경기',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양주시' },
        { id: 2, name: '일산동구' },
      ],
    },
    {
      id: 2,
      city: '인천',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '계양구' },
        { id: 2, name: '부평구' },
      ],
    },
    {
      id: 3,
      city: '경상',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '구미시' },
        { id: 2, name: '울산시' },
      ],
    },
    {
      id: 4,
      city: '충청',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '대전시' },
        { id: 2, name: '세종시' },
      ],
    },
    {
      id: 5,
      city: '전라',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '목포시' },
        { id: 2, name: '익산시' },
      ],
    },
    {
      id: 6,
      city: '강원',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '춘천시' },
        { id: 2, name: '양양군' },
      ],
    },
    {
      id: 7,
      city: '부산',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '해운대구' },
        { id: 2, name: '동래구' },
      ],
    },
    {
      id: 8,
      city: '제주',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '제주시' },
        { id: 2, name: '서귀포시' },
        { id: 3, name: '테스트' },
      ],
    },
  ];

  console.log(val1);
  console.log(val2);

  return (
    <div>
      <h1>{`${val1}-${val2}`}</h1>
      <select onChange={(e) => {
        setVal1(e.target.value);
        setVal2('');
      }}
      >
        <option selected="true">선택</option>
        {sido.map((el) => (
          <option key={el.id} value={el.ko}>
            {el.ko}
          </option>
        ))}
      </select>
      <select onChange={(e) => setVal2(e.target.value)}>
        <option selected>선택</option>
        {sigungu.find((el) => el.city === val1)
          ? (sigungu.find((el) => el.city === val1).sigunguLists.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          )))
          : ('')}
      </select>
    </div>
  );
}
