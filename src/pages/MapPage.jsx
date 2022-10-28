import { useEffect } from 'react';

import Map from '../components/Map';

import kakaoMapModules from '../modules/kakaoMapModule';

export default function MapPage() {
  useEffect(() => {
    kakaoMapModules();
  }, []);

  return (
    <Map />
  );
}
