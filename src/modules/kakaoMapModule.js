const { kakao } = window;

export default function KakaoMapModule() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.565804, 126.975146),
    level: 10,
  };

  // map
  const map = new kakao.maps.Map(container, options);

  // 마커가 표시 될 위치
  const positions = [
    {
      title: '덕수궁',
      latitude: 37.565804,
      longitude: 126.975146,
    },
    {
      title: '국립중앙박물관',
      latitude: 37.523850,
      longitude: 126.980470,
    },
    {
      title: '서울숲공원',
      latitude: 37.544387,
      longitude: 127.037442,
    },
    {
      title: '양양 쏠비치',
      latitude: 38.086867,
      longitude: 128.665343,
    },
    {
      title: '과천 서울랜드',
      latitude: 37.434156,
      longitude: 127.020126,
    },
  ];

  for (let i = 0; i < positions.length; i += 1) {
    const latLng = new kakao.maps.LatLng(positions[i].latitude, positions[i].longitude);

    const marker = new kakao.maps.Marker({
      map,
      position: latLng,
    });
  }
}
