import { useEffect } from 'react';
import Map from '../components/Map';
import KakaoMap from '../modules/KakaoMapModule';

export default function MapPage() {
  useEffect(() => {
    KakaoMap();
  }, []);

  return (
    <Map />
  );
}
