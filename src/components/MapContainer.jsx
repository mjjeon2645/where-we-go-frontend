import styled from 'styled-components';

import PlaceInformationPopup from './PlaceInformationPopup';

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export default function MapContainer({ isSelected, selectedPlace, setIsSelected }) {
  return (
    <Container id="myMap">
      {isSelected
        ? (
          <PlaceInformationPopup
            selectedPlace={selectedPlace}
            setIsSelected={setIsSelected}
          />
        )
        : ''}
    </Container>
  );
}
