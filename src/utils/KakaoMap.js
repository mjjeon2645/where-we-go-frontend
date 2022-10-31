const { kakao } = window;

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

// const makeClickListener = (placeId) => {
//   setIsSelected(true);

//   mapStore.fetchSelectedPlaceInformation(placeId);
//   const placeInformation = mapStore.selectedPlace;
//   setSelectedPlace(placeInformation);
//   console.log(isSelected);
//   // marker.setImage(selectedMarkerImage);
// };

export function loadMarkers(positions, map, makeClickListener) {
  positions.forEach((value) => {
    const marker = new kakao.maps.Marker({
      map,
      id: value.id,
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

    kakao.maps.event.addListener(
      marker,
      'click',
      () => makeClickListener(value.id),
    );
  });
}

export function loadKakaoMap(component, positions, makeClickListener) {
  const options = {
    center: new kakao.maps.LatLng(37.565804, 126.975146),
    level: 8,
  };

  const map = new kakao.maps.Map(component, options);

  loadMarkers(positions, map, makeClickListener);

  return map;
}

// TODO: Delete This!
export const xxx = '';

// // 마커 클릭 시 이미지 바꾸는 코드
// const selectedMarkerImage = new kakao.maps.MarkerImage(
//   'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png',
//   new kakao.maps.Size(33, 38),
//   new kakao.maps.Point(13, 34),
// );
