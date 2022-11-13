import styled from 'styled-components';

// import FilterIcon from '../images/filter.png';
// const FilterIcon = require('../images/filter.png');

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  background-color: #ff9d13;
  padding: .6em;

  p {
    font-size: 1.1em;
    font-weight: bold;
    color: #FFF;
    margin-right: 1em;
  }
`;

const Button = styled.button`
  background-color: #FFF;
  border: none;
  margin-inline: .3em;
`;

// const Image = styled.img`
//   width: 10px;
//   height: 10px;
//   object-fit: cover;
// `;

export default function FilterBar({
  goFilterPage, resetFilter, sido, sigungu, category,
}) {
  const handleFilterPageOnClick = () => {
    goFilterPage();
  };

  const handleFilterResetClick = () => {
    resetFilter();
  };

  return (
    <Wrapper>
      {sido && sigungu && category ? (
        <p>
          {sido}
          {' '}
          -
          {' '}
          {sigungu}
          {' '}
          -
          {' '}
          {category}
        </p>
      ) : (
        <p>필터 조건을 설정해주세요</p>
      )}
      <Button name="filter" type="button" onClick={handleFilterPageOnClick}>
        필터
      </Button>
      <Button name="reset-filter" type="button" onClick={handleFilterResetClick}>리셋하기</Button>
    </Wrapper>
  );
}

{ /* <Image src="https://user-images.githubusercontent.com/104840243/199137682-691f67c0-af83-4eba-981d-f722257d2921.png" alt="" /> */ }
