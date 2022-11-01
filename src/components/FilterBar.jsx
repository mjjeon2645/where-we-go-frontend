import { useState } from 'react';
import styled from 'styled-components';

// import FilterIcon from '../images/filter.png';
// const FilterIcon = require('../images/filter.png');

const Wrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  background-color: #EEE;
  padding: .6em;
`;

const Button = styled.button`
`;

const Image = styled.img`
  width: 10px;
  height: 10px;
  object-fit: cover;
`;

export default function FilterBar({ handleFilterClick }) {
  return (
    <Wrapper>
      <p>필터 조건을 설정해주세요</p>
      <Button id="filter" type="button" onClick={handleFilterClick}>
        <Image src="https://user-images.githubusercontent.com/104840243/199137682-691f67c0-af83-4eba-981d-f722257d2921.png" alt="" />
      </Button>
    </Wrapper>
  );
}
