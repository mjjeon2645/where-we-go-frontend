import { useEffect } from 'react';

import useMapStore from '../hooks/useMapStore';

const { kakao } = window;

export default function Map() {
  const mapStore = useMapStore();

  useEffect(() => {
    mapStore.fetchAllPositions();
  }, []);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.565804, 126.975146),
      level: 10,
    };

    const map = new kakao.maps.Map(container, options);

    const { positions } = mapStore;

    for (let i = 0; i < positions.length; i += 1) {
      const latLng = new kakao.maps.LatLng(positions[i].latitude, positions[i].longitude);

      const marker = new kakao.maps.Marker({
        map,
        position: latLng,
      });
    }
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    />
  );
}
