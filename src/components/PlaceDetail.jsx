/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

const Container = styled.article`
  padding-inline: 3em;
`;

const PlaceName = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
`;

const SectionTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: .8em;
`;

const Services = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1em 0;

  div {
    text-align: center;
    padding: 0 2em;
  }

  div p {
    margin: 1em 0;
  }
`;

const Address = styled.span`
`;

const AddressAndMiniMap = styled.section`
  margin: 1em 0;
`;

export default function PlaceDetail({
  imageNumber, selectedPlace, handlePrevImageClick, handlNextImageClick, handleAddressCopyClick,
}) {
  const { imageSource, address, placeServices } = selectedPlace;

  return (
    <Container>
      <section>
        {imageNumber === 1 ? (
          <img src={imageSource.firstImage} alt="" />
        ) : imageNumber === 2 ? (
          <img src={imageSource.secondImage} alt="" />
        ) : (
          <img src={imageSource.thirdImage} alt="" />
        )}
        <div>
          <button type="button" onClick={handlePrevImageClick}>&lt;</button>
          <span>
            {imageNumber}
            {' '}
            / 3
          </span>
          <button type="button" onClick={handlNextImageClick}>&gt;</button>
        </div>
      </section>
      <PlaceName>{selectedPlace.name}</PlaceName>
      <SectionTitle>편의시설</SectionTitle>
      <Services>
        <div>
          {placeServices.reservation === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.reservation === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>예약</p>
        </div>
        <div>
          {placeServices.parking === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.parking === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>주차</p>
        </div>
        <div>
          {placeServices.outsideFood === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.outsideFood === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>외부음식</p>
        </div>
        <div>
          {placeServices.nursingRoom === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.nursingRoom === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>수유실</p>
        </div>
      </Services>
      <AddressAndMiniMap>
        <SectionTitle>주소</SectionTitle>
        <Address>{address.fullAddress}</Address>
        <button type="button" onClick={() => handleAddressCopyClick(address.fullAddress)}>복사하기</button>
      </AddressAndMiniMap>
    </Container>
  );
}
