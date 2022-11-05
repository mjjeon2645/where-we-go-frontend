import styled from 'styled-components';

const Container = styled.div`
  z-index: 15;
`;

export default function PlaceLocationFilter({
  setSido, setSigungu, sido, sigungu,
}) {
  const sidoArray = [
    { id: 0, en: 'total', ko: '전체' },
    { id: 1, en: 'seoul', ko: '서울' },
    { id: 2, en: 'kyoungki', ko: '경기' },
    { id: 3, en: 'incheon', ko: '인천' },
    { id: 4, en: 'kyeongsang', ko: '경상' },
    { id: 5, en: 'chungcheong', ko: '충청' },
    { id: 6, en: 'jeonla', ko: '전라' },
    { id: 7, en: 'kangwon', ko: '강원' },
    { id: 8, en: 'busan', ko: '부산' },
    { id: 9, en: 'jeju', ko: '제주' },
  ];

  const sigunguArray = [
    {
      id: 0,
      city: '전체',
      sigunguLists: [
        { id: 0, name: '전체' },
      ],
    },
    {
      id: 1,
      city: '서울',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양천구' },
        { id: 2, name: '성동구' },
      ],
    },
    {
      id: 2,
      city: '경기',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '양주시' },
        { id: 2, name: '일산동구' },
      ],
    },
    {
      id: 3,
      city: '인천',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '계양구' },
        { id: 2, name: '부평구' },
      ],
    },
    {
      id: 4,
      city: '경상',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '구미시' },
        { id: 2, name: '울산시' },
      ],
    },
    {
      id: 5,
      city: '충청',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '대전시' },
        { id: 2, name: '세종시' },
      ],
    },
    {
      id: 6,
      city: '전라',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '목포시' },
        { id: 2, name: '익산시' },
      ],
    },
    {
      id: 7,
      city: '강원',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '춘천시' },
        { id: 2, name: '양양군' },
      ],
    },
    {
      id: 8,
      city: '부산',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '해운대구' },
        { id: 2, name: '동래구' },
        { id: 3, name: '111' },
      ],
    },
    {
      id: 9,
      city: '제주',
      sigunguLists: [
        { id: 0, name: '전체' },
        { id: 1, name: '제주시' },
        { id: 2, name: '서귀포시' },
        { id: 3, name: '테스트' },
      ],
    },
  ];

  const handleSidoChange = (event) => {
    setSido(event.ko);
    setSigungu('');
  };

  const handleSigunguChange = (event) => {
    setSigungu(event.target.value);
  };

  return (
    <Container>
      {/* <select onChange={() => handleSidoChange(this)}>
        <option selected disabled hidden>선택</option>
        {sidoArray.map((value) => (
          <option key={value.id} value={value.ko}>
            {value.ko}
          </option>
        ))}
      </select> */}
      {sidoArray.map((value) => (
        <button
          key={value.id}
          type="button"
          value={value.ko}
          onClick={() => handleSidoChange(value)}
        >
          {value.ko}
        </button>
      ))}
      <select form="filter" onChange={handleSigunguChange}>
        <option selected={sigungu === ''} disabled hidden>선택</option>
        {sigunguArray.find((value) => value.city === sido)
          ? (sigunguArray.find((value) => value.city === sido).sigunguLists.map((value) => (
            <option
              key={value.id}
              value={value.name}
            >
              {value.name}
            </option>
          )))
          : ('')}
      </select>
    </Container>
  );
}
