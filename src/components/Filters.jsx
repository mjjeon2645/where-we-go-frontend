import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import PlaceLocationFilter from './PlaceLocationFilter';
import PlaceCategoryFilter from './PlaceCategoryFilter';

const Wrapper = styled.article`
  padding-bottom: 5em;
`;

const BackButton = styled.button`
  color: #AAA;
  font-size: 1em;
  background-color: #FFF;
  border: none;
  margin: 3em .5em 0 .5em;
`;

const FilterButton = styled.button`
  color: #FFF;
  border: none;
  border-radius: 10px;
  display: block;
  padding: 1em 5em;
  margin: auto;
  background-color: #ffae00;
`;

export default function Filters({
  setFilteredPositions, handleFilterCloseClick, setSido, setSigungu,
  setPlaceCategory, setFilterPageOn, setFilterResultBarOn, sido, sigungu, category,
}) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sigungu === '선택' || !sigungu) {
      alert('가고싶은 지역을 선택해주세요!');
      return;
    }

    if (!category) {
      alert('가고싶은 장소의 유형을 선택해주세요!');
      return;
    }

    setFilterPageOn(false);
    setFilterResultBarOn(true);
    setFilteredPositions(sido, sigungu, category);
    navigate(`/map?sido=${sido}&sigungu=${sigungu}&type=${category}`);
  };

  const handlePlaceCategoryClick = (data) => {
    setPlaceCategory(data.category);
  };

  return (
    <Wrapper>
      <BackButton type="button" onClick={handleFilterCloseClick}> &lt; 돌아가기</BackButton>
      <form id="filter" onSubmit={handleSubmit}>
        <PlaceLocationFilter
          setSido={setSido}
          setSigungu={setSigungu}
          sido={sido}
          sigungu={sigungu}
        />
        <div className="placetype">
          <PlaceCategoryFilter
            handlePlaceCategoryClick={handlePlaceCategoryClick}
            category={category}
          />
        </div>
        <FilterButton type="submit">
          필터 적용하기
        </FilterButton>
      </form>
    </Wrapper>
  );
}
