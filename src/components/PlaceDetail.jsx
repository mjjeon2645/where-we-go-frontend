/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

const ImageBox = styled.div`
  width: 535px;
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
`;

const PlaceName = styled.h2`
  font-size: 2em;
  font-weight: bold;
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
  margin: 1em 0 2em 0;

  div {
    text-align: center;
    padding: 0 1.6em;
  }

  div p {
    margin: 1em 0;
  }
`;

const Unchecked = styled.div`
  position: relative;

  p {
    font-size: .9em;
    font-weight: 600;
    position: absolute;
    top: 15%;
    left: 20%;
  }
`;

const AddressSection = styled.div`
  display: flex;
  align-items: center;

  span:last-child {
    color: #005D82;
    font-weight: 500;
    margin-left: .5em;
  }
`;

const Address = styled.span`
  font-size: .9em;
  font-weight: 300;
  margin-right: .3em;
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
`;

const AddressAndMiniMap = styled.section`
  margin: 1em 0 1em 0;
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
    <article>
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
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/possible_ac5jxi.png" alt="" />
            </div>
          ) : placeServices.reservation === 'impossible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/impossible_doab0s.png" alt="" />
            </div>
          ) : (
            <Unchecked>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/unchecked_izlb2j.png" alt="" />
              <p>확인필요</p>
            </Unchecked>
          )}
          <p>예약</p>
        </div>
        <div id="parking">
          {placeServices.parking === 'possible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/possible_ac5jxi.png" alt="" />
            </div>
          ) : placeServices.parking === 'impossible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/impossible_doab0s.png" alt="" />
            </div>
          ) : (
            <Unchecked>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/unchecked_izlb2j.png" alt="" />
              <p>확인필요</p>
            </Unchecked>
          )}
          <p>주차</p>
        </div>
        <div id="outside-food">
          {placeServices.outsideFood === 'possible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/possible_ac5jxi.png" alt="" />
            </div>
          ) : placeServices.outsideFood === 'impossible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/impossible_doab0s.png" alt="" />
            </div>
          ) : (
            <Unchecked>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/unchecked_izlb2j.png" alt="" />
              <p>확인필요</p>
            </Unchecked>
          )}
          <p>외부음식</p>
        </div>
        <div id="nursing-room">
          {placeServices.nursingRoom === 'possible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/possible_ac5jxi.png" alt="" />
            </div>
          ) : placeServices.nursingRoom === 'impossible' ? (
            <div>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/impossible_doab0s.png" alt="" />
            </div>
          ) : (
            <Unchecked>
              <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417142/unchecked_izlb2j.png" alt="" />
              <p>확인필요</p>
            </Unchecked>
          )}
          <p>수유실</p>
        </div>
      </Services>
      <AddressAndMiniMap>
        <SectionTitle>주소</SectionTitle>
        <AddressSection>
          <Address>{address.fullAddress}</Address>
          <CopyButton
            type="button"
            onClick={() => handleAddressCopyClick(address.fullAddress)}
          >
            <img src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670417334/copy_umtsau.png" alt="" />
          </CopyButton>
          {copyState && (
            <span>복사 완료!</span>
          )}
        </AddressSection>
      </AddressAndMiniMap>
    </article>
  );
}
