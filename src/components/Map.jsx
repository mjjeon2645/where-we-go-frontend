import { useState, useEffect } from 'react';

import useMapStore from '../hooks/useMapStore';
import KakaoMap from '../utils/KakaoMap';
import MapContainer from './MapContainer';

export default function Map() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapStore = useMapStore();

  // 마우스 클릭 이벤트 등록 함수
  function makeClickListener(marker, placeId) {
    setIsSelected(true);
    mapStore.fetchSelectedPlaceInformation(placeId);
    const placeInformation = mapStore.selectedPlace;
    setSelectedPlace(placeInformation);

    // marker.setImage(selectedMarkerImage);
  }

  useEffect(() => {
    mapStore.fetchAllPositions();

    const { positions } = mapStore;

    KakaoMap(positions, makeClickListener);
    console.log('Map');
  }, []);

  return (
    <div>
      <MapContainer
        isSelected={isSelected}
        selectedPlace={selectedPlace}
        setIsSelected={setIsSelected}
      />
    </div>
  );
}
