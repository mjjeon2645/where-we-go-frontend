import { useEffect } from 'react';

import KakaoMap from '../modules/KakaoMapModule';

function MapContainer() {
  useEffect(() => {
    KakaoMap();
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '500px',
        height: '500px',
      }}
    />
  );
}

export default MapContainer;
