import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import useMapStore from '../hooks/useMapStore';

import { loadKakaoMap } from '../utils/KakaoMap';

import PlaceInformationPopup from '../components/PlaceInformationPopup';

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
  const [state, setState] = useState(false);

  const mapStore = useMapStore();

  const kakaoMap = useRef(null);

  const makeClickListener = (placeId) => {
    mapStore.fetchSelectedPlaceInformation(placeId);
    setState(true);

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
    setState(false);
  };

  return (
    <div>
      <h1>
        Map Page
      </h1>
      <p>지도</p>
      <MapArea ref={kakaoMap}>
        {state && (
          <PlaceInformationPopup
            selectedPlace={selectedPlace}
            handleCloseClick={handleCloseClick}
          />
        )}
      </MapArea>
    </div>
  );
}
