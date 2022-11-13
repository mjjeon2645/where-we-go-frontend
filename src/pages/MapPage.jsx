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
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  min-width: 400px;
  min-height: 500px;
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
    mapStore.selectedPlaceShortInformation(placeId);
    setIsPlaceSelected(true);
  };

  const {
    selectedPlace, sido, sigungu, category,
  } = mapStore;

  useEffect(() => {
    const fetchData = async () => {
      await mapStore.fetchFilteredPlaces(sido, sigungu, category);
      const { places } = mapStore;

      loadKakaoMap(kakaoMap.current, places, makeClickListener);
    };

    fetchData();

    setIsPlaceSelected(false);
  }, [filterPageOn, filteredListsPageOn]);

  const setFilteredPlaces = (sidoCondition, sigunguCondition, categoryCondition) => {
    mapStore.fetchFilteredPlaces(sidoCondition, sigunguCondition, categoryCondition);
  };

  const setSido = (sidoCondition) => {
    mapStore.changeSido(sidoCondition);
  };

  const setSigungu = (sigunguCondition) => {
    mapStore.changeSigungu(sigunguCondition);
  };

  const setPlaceCategory = (categoryCondition) => {
    mapStore.changePlaceCategory(categoryCondition);
  };

  const goFilterPage = () => {
    setFilterPageOn(true);
  };

  const resetFilter = () => {
    mapStore.clearFilterState();
  };

  const goBackFromFilterPage = () => {
    mapStore.clearFilterState();
    setFilterPageOn(false);
  };

  const handlePlaceInformationPopupCloseClick = () => {
    setIsPlaceSelected(false);
  };

  const handleFilterResultClick = () => {
    setFilteredListsPageOn(true);
  };

  const goBackFromPlaceListPage = () => {
    setFilteredListsPageOn(false);
  };

  const goDetailPageOfSelectedPlace = (id) => {
    navigate(`/places/${id}`);
  };

  const { places } = mapStore;

  return (
    <div>
      {!filterPageOn && !filteredListsPageOn ? (
        <div>
          <FilterBar
            goFilterPage={goFilterPage}
            resetFilter={resetFilter}
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
                places={places}
              />
            )}
          </MapArea>
        </div>
      )
        : filterPageOn && !filteredListsPageOn ? (
          <Filters
            setFilteredPlaces={setFilteredPlaces}
            goBackFromFilterPage={goBackFromFilterPage}
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
            places={places}
            goBackFromPlaceListPage={goBackFromPlaceListPage}
            goDetailPageOfSelectedPlace={goDetailPageOfSelectedPlace}
          />
        )}
    </div>
  );
}
