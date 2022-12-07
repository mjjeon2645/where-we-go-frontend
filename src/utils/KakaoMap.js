const { kakao } = window;

function loadZoomController(map) {
  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.Right);
}

// 인포윈도우를 표시하는 클로저를 만드는 함수
function makeOverListener(map, marker, infowindow) {
  return () => {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수
function makeOutListener(infowindow) {
  return () => {
    infowindow.close();
  };
}

export function loadMarkers(places, map, makeClickListener) {
  const markers = [];

  for (let i = 0; i < places.length; i += 1) {
    const marker = new kakao.maps.Marker({
      map,
      id: places[i].placeId,
      position: new kakao.maps.LatLng(places[i].position.latitude, places[i].position.longitude),
    });

    // 인포 윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
      content: places[i].name,
    });

    // 마커 위에 마우스 오버 시 인포 윈도우 띄우는 역할
    kakao.maps.event.addListener(
      marker,
      'mouseover',
      makeOverListener(map, marker, infowindow),
    );

    // 마커 위에서 마우스 아웃 시 인포 윈도우 사라지는 역할
    kakao.maps.event.addListener(
      marker,
      'mouseout',
      makeOutListener(infowindow),
    );

    // 마커 클릭 시 이벤트
    kakao.maps.event.addListener(
      marker,
      'click',
      () => makeClickListener(places[i].placeId),
    );

    // 마커 이미지를 기본에서 곰돌이 디자인으로 변경함
    const markerImage = new kakao.maps.MarkerImage(
      'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670388197/map-marker_ekcpyx.png',
      // new kakao.maps.Size(33, 38),
      new kakao.maps.Size(39, 45),
      new kakao.maps.Point(13, 34),
    );

    marker.setImage(markerImage);

    markers.push(marker);
  }

  // 마커 클러스터러 적용
  const clusterer = new kakao.maps.MarkerClusterer({
    map,
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 10, // 클러스터 할 최소 지도 레벨
    styles: [{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
      width: '30px',
      height: '30px',
      background: 'rgba(255, 80, 80, .8)',
      borderRadius: '15px',
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: '31px',
    }],
  });

  // 추후 데이터가 많아졌을 때 판단하여 사용할 것(클러스터 클릭 이벤트)
  // kakao.maps.event.addListener(clusterer, 'clusterclick', (cluster) => {
  //   // 현재 지도 레벨에서 1레벨 확대한 레벨
  //   const level = map.getLevel() - 1;

  //   // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
  //   map.setLevel(level, { anchor: cluster.getCenter() });
  // });

  clusterer.addMarkers(markers);
}

export function loadKakaoMap(component, places, makeClickListener) {
  const options = {
    center: new kakao.maps.LatLng(37.565804, 126.975146),
    level: 12,
  };

  const map = new kakao.maps.Map(component, options);

  loadZoomController(map);

  loadMarkers(places, map, makeClickListener);

  return map;
}

export function loadMiniKakaoMap(component, position) {
  const markerPosition = new kakao.maps.LatLng(position.latitude, position.longitude);

  const marker = {
    position: markerPosition,
  };

  const staticMapOptions = {
    center: new kakao.maps.LatLng(position.latitude, position.longitude),
    level: 6,
    marker,
  };

  const miniMap = new kakao.maps.StaticMap(component, staticMapOptions);

  return miniMap;
}

// TODO: Delete This!
export const xxx = '';
