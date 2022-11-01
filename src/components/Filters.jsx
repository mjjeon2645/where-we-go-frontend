import { useState } from 'react';
import LocationFilter from './LocationFilter';
import PlaceTypeFilter from './PlaceTypeFilter';

export default function Filters() {
  const [selectedCityCode, setSelectedCityCode] = useState(0);

  const handleSubmit = (event) => {
    console.log(event.target);

    event.preventDefault();
  };

  const handlePlaceTypeClick = (type) => {
    console.log(type);
  };

  const handleCityChange = (event) => {
    setSelectedCityCode(event.target.value);
  };

  // const handleSigunguChange = (event) => {
  //   console.log(event.target.value);
  // };

  const cityChange = (event) => {
    console.log(event.target.value);
  };

  const handleFilterConditionsSetClick = () => {
    //
  };

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

  return (
    <div>
      <p>필터 조건</p>
      <form onSubmit={handleSubmit}>
        <h2>어디로 갈까요?</h2>
        <select onChange={cityChange}>
          <option key="1" value="seoul">서울</option>
          <option key="2" value="incheon">인천</option>
        </select>
        {/* <select className="sido" onChange={handleCityChange}>
          {sido.map((value) => (
            <option key={value.id} value={value.ko}>
              {value.ko}
            </option>
          ))}
        </select> */}
        {/* <LocationFilter
          selectedCityCode={selectedCityCode}
          handleCityChange={handleCityChange}
        // handleSigunguChange={handleSigunguChange}
        /> */}
        {/* <div className="placetype">
          <h2>어떤 곳을 원하세요?</h2>
          <PlaceTypeFilter handlePlaceTypeClick={handlePlaceTypeClick} />
        </div> */}
        <button type="submit" onClick={handleFilterConditionsSetClick}>
          필터 적용하기
        </button>
      </form>
    </div>
  );
}
