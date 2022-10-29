import { useEffect } from 'react';

import useMapStore from '../hooks/useMapStore';

const { kakao } = window;

export default function Map() {
  const mapStore = useMapStore();

  useEffect(() => {
    mapStore.fetchAllPositions();
  }, []);

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return () => {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return () => {
      infowindow.close();
    };
  }

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.565804, 126.975146),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    const { positions } = mapStore;

    positions.forEach((value) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(value.latitude, value.longitude),
      });
      const infowindow = new kakao.maps.InfoWindow({
        content: value.title,
      });

      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow),
      );

      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow),
      );
    });
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
