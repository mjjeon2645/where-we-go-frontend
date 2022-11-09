/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

const Container = styled.article`
  padding-inline: 3em;
`;

const PlaceTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
`;

const ServicesTitle = styled.p`
  font-size: 1.3em;
  font-weight: bold;
`;

const Services = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    text-align: center;
  }

  div p {
    margin: 1em 0;
  }

  div p:last-child {
    font-weight: bold;
  }
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
      <PlaceTitle>{selectedPlace.name}</PlaceTitle>
      <ServicesTitle>편의시설</ServicesTitle>
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
      <div>
        <p>주소</p>
        <p>{address.fullAddress}</p>
        <button type="button" onClick={handleAddressCopyClick}>주소복사버튼</button>
        <p>미니 지도 영역</p>
      </div>
    </Container>
  );
}
