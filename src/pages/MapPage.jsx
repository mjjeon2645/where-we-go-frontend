import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import useMapStore from '../hooks/useMapStore';

import { loadKakaoMap } from '../utils/KakaoMap';

import PlaceInformationPopup from '../components/PlaceInformationPopup';
import FilterBar from '../components/FilterBar';
import Filters from '../components/Filters';

const MapArea = styled.div`
  display: relative;
  max-width: 700px;
  min-width: 500px;
  max-height: 700px;
  min-height: 500px;
  width: 50%;
  height: 50vw;
`;

export default function MapPage() {
  const [filterPageOn, setFilterPageOn] = useState(true);
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  const handleFilterClick = () => {
    setFilterPageOn(false);
  };

  const mapStore = useMapStore();

  const kakaoMap = useRef(null);

  const makeClickListener = (placeId) => {
    mapStore.fetchSelectedPlaceInformation(placeId);
    setIsPlaceSelected(true);

    // TODO. 클릭 시 마커 이미지 바꿔보기
    // marker.setImage(selectedMarkerImage);
  };

  useEffect(() => {
    mapStore.fetchAllPositions();

    const { positions } = mapStore;

    loadKakaoMap(kakaoMap.current, positions, makeClickListener);
  }, []);

  const { selectedPlace } = mapStore;

  const handleCloseClick = () => {
    setIsPlaceSelected(false);
  };

  return (
    <div>
      {filterPageOn ? (
        <div>
          <h1>
            Map Page
          </h1>
          <p>지도</p>
          <FilterBar handleFilterClick={handleFilterClick} />
          <MapArea ref={kakaoMap}>
            {isPlaceSelected && (
              <PlaceInformationPopup
                selectedPlace={selectedPlace}
                handleCloseClick={handleCloseClick}
              />
            )}
          </MapArea>
        </div>
      ) : (
        <Filters />
      )}
    </div>
  );
}
