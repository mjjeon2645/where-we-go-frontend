import { useNavigate } from 'react-router-dom';

import LocationFilter from './PlaceLocationFilter';
import PlaceTypeFilter from './PlaceCategoryFilter';

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
    setPlaceCategory(data);
  };

  return (
    <div>
      <button type="button" onClick={handleFilterCloseClick}>뒤로가기</button>
      <p>필터 조건</p>
      <form id="filter" onSubmit={handleSubmit}>
        <h2>어디로 갈까요?</h2>
        <LocationFilter
          setSido={setSido}
          setSigungu={setSigungu}
          sido={sido}
          sigungu={sigungu}
        />
        <div className="placetype">
          <h2>어떤 곳을 원하세요?</h2>
          <PlaceTypeFilter
            handlePlaceCategoryClick={handlePlaceCategoryClick}
          />
        </div>
        <button type="submit">
          필터 적용하기
        </button>
      </form>
    </div>
  );
}
