/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

const Container = styled.article`
`;

const ImageBox = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlaceNameSection = styled.div`
  display: flex;
  align-items: center;
  margin-block: 3em;

  button {
    background: none;
    border: none;
  }

  img {
    width: 35px;
    height: 35px;
  }

  h2 {

  }
`;

const PlaceName = styled.h2`
  font-size: 2em;
  font-weight: bold;
  /* margin: 1em 0; */
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
  margin-right: 1em;
`;

const AddressAndMiniMap = styled.section`
  margin: 1em 0 2em 0;
`;

export default function PlaceDetail({
  imageNumber, selectedPlace, copyState, bookmarks,
  seePrevImage, seeNextImage, toggleBookmark, copyAddress,
}) {
  const unselectedImage = 'https://user-images.githubusercontent.com/104840243/203296933-e4508837-7023-45e9-ab5d-a745f3223bb2.png';
  const selectedImage = 'https://user-images.githubusercontent.com/104840243/203296951-6dbc5b77-fa34-4260-bc7a-ce0b5b2f147b.png';
  const { imageSource, address, placeServices } = selectedPlace;

  const handlePrevImageClick = () => {
    seePrevImage();
  };

  const handleNextImageClick = () => {
    seeNextImage();
  };

  const handleToggleBookmarkClick = (placeId) => {
    toggleBookmark(placeId);
  };

  const handleAddressCopyClick = (text) => {
    copyAddress(text);
  };

  return (
    <Container>
      <section>
        <ImageBox>
          {imageNumber === 1 ? (
            <img src={imageSource.firstImage} alt="" />
          ) : imageNumber === 2 ? (
            <img src={imageSource.secondImage} alt="" />
          ) : (
            <img src={imageSource.thirdImage} alt="" />
          )}
        </ImageBox>
        <div>
          <button type="button" onClick={handlePrevImageClick}>&lt;</button>
          <span>
            {imageNumber}
            {' '}
            / 3
          </span>
          <button type="button" onClick={handleNextImageClick}>&gt;</button>
        </div>
      </section>
      <PlaceNameSection>
        <button type="button" onClick={() => handleToggleBookmarkClick(selectedPlace.placeId)}>
          {bookmarks.find((bookmark) => bookmark.placeId === selectedPlace.placeId) ? (
            <img src={selectedImage} alt="" />
          ) : (
            <img src={unselectedImage} alt="" />
          )}
        </button>
        <PlaceName>{selectedPlace.name}</PlaceName>
      </PlaceNameSection>
      <SectionTitle>편의시설</SectionTitle>
      <Services>
        <div id="reservation">
          {placeServices.reservation === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.reservation === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>예약</p>
        </div>
        <div id="parking">
          {placeServices.parking === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.parking === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>주차</p>
        </div>
        <div id="outside-food">
          {placeServices.outsideFood === 'possible' ? (
            <p>⭕️</p>
          ) : placeServices.outsideFood === 'impossible' ? (
            <p>❌</p>
          ) : (
            <p>❓</p>
          )}
          <p>외부음식</p>
        </div>
        <div id="nursing-room">
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
        <button
          type="button"
          onClick={() => handleAddressCopyClick(address.fullAddress)}
        >
          복사하기
        </button>
        {copyState && (
          <span>복사 완료!</span>
        )}
      </AddressAndMiniMap>
    </Container>
  );
}
