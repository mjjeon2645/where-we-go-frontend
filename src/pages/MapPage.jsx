/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import useMapStore from '../hooks/useMapStore';

import { loadKakaoMap } from '../utils/KakaoMap';

import PlaceInformationPopup from '../components/PlaceInformationPopup';
import FilterBar from '../components/FilterBar';
import Filters from '../components/Filters';
import FilterResultBar from '../components/FilterResultBar';
import FilteredPlacesList from '../components/FilteredPlacesList';

const MapArea = styled.div`
  display: relative;
  max-width: 700px;
  min-width: 500px;
  max-height: 700px;
  min-height: 500px;
  width: 50%;
  height: 50vw;
`;

export default function MapPage() {
  const [filterPageOn, setFilterPageOn] = useState(false);

  const [filteredListsPageOn, setFilteredListsPageOn] = useState(false);

  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  const [filterResultBarOn, setFilterResultBarOn] = useState(false);

  const mapStore = useMapStore();

  const kakaoMap = useRef(null);

  const navigate = useNavigate();

  const makeClickListener = (placeId) => {
    mapStore.fetchSelectedPlaceInformation(placeId);
    setIsPlaceSelected(true);

    // TODO. 클릭 시 마커 이미지 바꿔보기
    // marker.setImage(selectedMarkerImage);
  };

  const {
    selectedPlace, sido, sigungu, category,
  } = mapStore;

  useEffect(() => {
    const fetchData = async () => {
      // await mapStore.fetchAllPositions();
      await mapStore.fetchFilteredPositions(sido, sigungu, category);
      const { positions } = mapStore;

      loadKakaoMap(kakaoMap.current, positions, makeClickListener);
    };

    fetchData();

    setIsPlaceSelected(false);
  }, [filterPageOn, filteredListsPageOn]);

  const setFilteredPositions = (data1, data2, data3) => {
    mapStore.fetchFilteredPositions(data1, data2, data3);
  };

  const setSido = (data) => {
    mapStore.changeSido(data);
  };

  const setSigungu = (data) => {
    mapStore.changeSigungu(data);
  };

  const setPlaceCategory = (data) => {
    mapStore.changePlaceCategory(data);
  };

  const handleFilterClick = () => {
    setFilterPageOn(true);
  };

  const handleFilterCloseClick = () => {
    setFilterPageOn(false);
  };

  const handlePlaceInformationPopupCloseClick = () => {
    setIsPlaceSelected(false);
  };

  const handleFilterResultClick = () => {
    setFilteredListsPageOn(true);
  };

  const handleListPageCloseClick = () => [
    setFilteredListsPageOn(false),
  ];

  const handleOnePlaceClick = (id) => {
    navigate(`/place/${id}`);
  };

  const { positions } = mapStore;

  return (
    <div>
      {!filterPageOn && !filteredListsPageOn ? (
        <div>
          <h1>
            Map Page
          </h1>
          <p>지도</p>
          <FilterBar
            handleFilterClick={handleFilterClick}
            sido={sido}
            sigungu={sigungu}
            category={category}
          />
          <MapArea ref={kakaoMap}>
            {isPlaceSelected && (
              <PlaceInformationPopup
                selectedPlace={selectedPlace}
                handlePlaceInformationPopupCloseClick={handlePlaceInformationPopupCloseClick}
              />
            )}
            {(sigungu && category) && (
              <FilterResultBar
                handleFilterResultClick={handleFilterResultClick}
                positions={positions}
              />
            )}
          </MapArea>
        </div>
      )
        : filterPageOn && !filteredListsPageOn ? (
          <Filters
            setFilteredPositions={setFilteredPositions}
            handleFilterCloseClick={handleFilterCloseClick}
            setSido={setSido}
            setSigungu={setSigungu}
            setPlaceCategory={setPlaceCategory}
            setFilterPageOn={setFilterPageOn}
            setFilterResultBarOn={setFilterResultBarOn}
            sido={sido}
            sigungu={sigungu}
            category={category}
          />
        ) : (
          <FilteredPlacesList
            positions={positions}
            handleListPageCloseClick={handleListPageCloseClick}
            handleOnePlaceClick={handleOnePlaceClick}
          />
        )}
    </div>
  );
}
