import { useEffect } from 'react';

import Map from '../components/Map';

import KakaoMapModule from '../modules/KakaoMapModule';

export default function MapPage() {
  useEffect(() => {
    KakaoMapModule();
  }, []);

  return (
    <div>
      <Map />
    </div>
  );
}
