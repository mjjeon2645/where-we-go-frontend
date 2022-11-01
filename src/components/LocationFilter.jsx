export default function LocationFilter(
  { selectedCityCode, handleCityChange, handleSigunguChange },
) {
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

  const sigungu = [
    {
      id: 0,
      city: 'seoul',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양천구' },
        { id: 2, name: '성동구' },
      ],
    },
    {
      id: 1,
      city: 'kyoungki',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양주시' },
        { id: 2, name: '일산동구' },
      ],
    },
    {
      id: 2,
      city: 'incheon',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '계양구' },
        { id: 2, name: '부평구' },
      ],
    },
    {
      id: 3,
      city: 'kyeongsang',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '구미시' },
        { id: 2, name: '울산시' },
      ],
    },
    {
      id: 4,
      city: 'chungcheong',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '대전시' },
        { id: 2, name: '세종시' },
      ],
    },
    {
      id: 5,
      city: 'jeonla',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '목포시' },
        { id: 2, name: '익산시' },
      ],
    },
    {
      id: 6,
      city: 'kangwon',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '춘천시' },
        { id: 2, name: '양양군' },
      ],
    },
    {
      id: 7,
      city: 'busan',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '해운대구' },
        { id: 2, name: '동래구' },
      ],
    },
    {
      id: 8,
      city: 'jeju',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '제주시' },
        { id: 2, name: '서귀포시' },
        { id: 3, name: '테스트' },
      ],
    },
  ];

  return (
    <div>
      <select className="sido" onChange={handleCityChange}>
        {sido.map((value) => (
          <option key={value.id} value={value.id}>
            {value.ko}
          </option>
        ))}
      </select>
      <select className="sigungu" onChange={handleSigunguChange}>
        {sigungu[selectedCityCode].sigunguLists.map((value) => (
          <option key={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}
