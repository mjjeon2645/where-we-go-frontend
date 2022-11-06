import styled from 'styled-components';

const Container = styled.article`
  margin: 3em 1em;
`;

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
`;

const SidoSection = styled.section`
  background-color: #f6f6f6;
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
`;

const SidoList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const SigunguSection = styled.section`
  background-color: #f6f6f6;
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;

  select {
    margin-left: 2em;
    width: 10em;
    padding: .5em;
    border-radius: 4px;
  }
`;

const SidoOption = styled.button`
  background-color: #FFF;
  border: 1px solid #DDD;
  border-radius: 15px;
  padding: .6em 3em;
  margin: .3em 1em;

  
`;

export default function PlaceLocationFilter({
  setSido, setSigungu, sido, sigungu,
}) {
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

  const handleSidoChange = (event) => {
    setSido(event.ko);
    setSigungu('');
  };

  const handleSigunguChange = (event) => {
    setSigungu(event.target.value);
  };

  return (
    <Container>
      <Title>어디로 갈까요?</Title>
      {/* <select onChange={() => handleSidoChange(this)}>
        <option selected disabled hidden>선택</option>
        {sidoArray.map((value) => (
          <option key={value.id} value={value.ko}>
            {value.ko}
          </option>
        ))}
      </select> */}
      <SidoSection>
        <p>시/도</p>
        <SidoList>
          {sidoArray.map((value) => (
            <li key={value.id}>
              <SidoOption
                type="button"
                value={value.ko}
                onClick={() => handleSidoChange(value)}
                isSelected={value.selected}
                style={sido === value.ko ? { color: '#FFF', background: '#FFA200' } : { backgroundColor: '#FFF' }}
              >
                {value.ko}
              </SidoOption>
            </li>
          ))}
        </SidoList>
      </SidoSection>
      <SigunguSection>
        <label htmlFor="filter">시/군/구</label>
        <select id="filter" onChange={handleSigunguChange}>
          <option selected={sigungu === ''} disabled hidden>선택</option>
          {sigunguArray.find((value) => value.sido === sido)
            ? (sigunguArray.find((value) => value.sido === sido).sigunguLists.map((value) => (
              <option
                key={value.id}
                value={value.name}
              >
                {value.name}
              </option>
            )))
            : ('')}
        </select>
      </SigunguSection>
    </Container>
  );
}
