import { useState } from 'react';
import LocationFilter from './LocationFilter';
import PlaceTypeFilter from './PlaceTypeFilter';

export default function Filters() {
  const [selectedCityCode, setSelectedCityCode] = useState(0);

  const handlePlaceTypeClick = (type) => {
    //
  };

  const handleCityChange = (event) => {
    setSelectedCityCode(event.target.value);
  };

  const handleSigunguChange = (event) => {
    console.log(event.target.value);
  };

  const handleFilterConditionsSetClick = () => {
    //
  };

  return (
    <div>
      <p>필터 조건</p>
      <h2>어디로 갈까요?</h2>
      <LocationFilter
        selectedCityCode={selectedCityCode}
        handleCityChange={handleCityChange}
        handleSigunguChange={handleSigunguChange}
      />
      <div className="placetype">
        <h2>어떤 곳을 원하세요?</h2>
        <PlaceTypeFilter handlePlaceTypeClick={handlePlaceTypeClick} />
      </div>
      <button type="button" onClick={handleFilterConditionsSetClick}>
        필터 적용하기
      </button>
    </div>
  );
}
