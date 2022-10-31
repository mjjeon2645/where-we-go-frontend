import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import PlaceInformationPopup from '../components/PlaceInformationPopup';
import useMapStore from '../hooks/useMapStore';

import { loadKakaoMap } from '../utils/KakaoMap';

const MapArea = styled.div`
  display: relative;
  width: 50%;
  height: 50vw;
`;

const Wrapper = styled.div`
  display: relative;
`;

export default function MapPage() {
  const [state, setState] = useState(false);

  const mapStore = useMapStore();

  const kakaoMap = useRef(null);

  const makeClickListener = (placeId) => {
    mapStore.fetchSelectedPlaceInformation(placeId);
    // mapStore.changeSelectedState(true);
    setState(true);

    // marker.setImage(selectedMarkerImage);
  };

  useEffect(() => {
    console.log('click');
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
      <MapArea ref={kakaoMap} />
      {state ? (
        <PlaceInformationPopup
          selectedPlace={selectedPlace}
          handleCloseClick={handleCloseClick}
        />
      ) : (
        ''
      )}
    </div>
  );
}
