import styled from 'styled-components';

import { loadSidoOptions, loadSigunguOptions } from '../utils/LocationOptions';

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
  const sidoArray = loadSidoOptions();

  const sigunguArray = loadSigunguOptions();

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
