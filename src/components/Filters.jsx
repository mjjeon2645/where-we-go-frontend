import { useNavigate } from 'react-router-dom';

import LocationFilter from './LocationFilter';
import PlaceTypeFilter from './PlaceTypeFilter';

export default function Filters({
  setFilteredPositions, handleFilterCloseClick, setSido, setSigungu,
  setPlaceType, sido, sigungu, placeType,
}) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setFilteredPositions({ sido, sigungu, placeType });
    navigate(`/map?city=${sido}&type=${sigungu}`);
  };

  const handlePlaceTypeClick = (type) => {
    console.log(type);
    setPlaceType(type);
  };

  return (
    <div>
      <button type="button" onClick={handleFilterCloseClick}>뒤로가기</button>
      <p>필터 조건</p>
      <form onSubmit={handleSubmit}>
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
            handlePlaceTypeClick={handlePlaceTypeClick}
            placeType={placeType}
          />
        </div>
        <button type="submit">
          필터 적용하기
        </button>
      </form>
    </div>
  );
}
