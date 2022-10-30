import { useState, useEffect } from 'react';

import useMapStore from '../hooks/useMapStore';
import MapContainer from './MapContainer';
import PlaceInformationPopup from './PlaceInformationPopup';

const { kakao } = window;

export default function Map() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapStore = useMapStore();

  useEffect(() => {
    mapStore.fetchAllPositions();
  }, []);

  // const clickImage = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

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

  // const selectedMarkerImage = new kakao.maps.MarkerImage(
  //   'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png',
  //   new kakao.maps.Size(33, 38),
  //   new kakao.maps.Point(13, 34),
  // );

  // 마우스 클릭 이벤트 등록 함수
  function makeClickListener(marker, placeId) {
    // marker.setImage(selectedMarkerImage);
    setIsSelected(true);
    mapStore.fetchSelectedPlaceInformation(placeId);
    const placeInformation = mapStore.selectedPlace;
    setSelectedPlace(placeInformation);
  }

  useEffect(() => {
    const mapContainer = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.565804, 126.975146),
      level: 5,
    };

    const map = new kakao.maps.Map(mapContainer, options);

    const { positions } = mapStore;

    // const selectedMarker = null;

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
        () => makeClickListener(marker, value.id),
      );
    });
  }, []);

  return (
    <div>
      <MapContainer />
      {isSelected
        ? (
          <PlaceInformationPopup
            selectedPlace={selectedPlace}
            setIsSelected={setIsSelected}
          />
        )
        : ''}
    </div>
  );
}
