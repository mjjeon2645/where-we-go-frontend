const { kakao } = window;

export default function kakaoMapModules() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.56598487731902, 126.97537315669699),
    level: 3,
  };

  // map
  const map = new kakao.maps.Map(container, options);

  // 마커가 표시 될 위치
  const markerPosition = new kakao.maps.LatLng(37.56598487731902, 126.97537315669699);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);
}
