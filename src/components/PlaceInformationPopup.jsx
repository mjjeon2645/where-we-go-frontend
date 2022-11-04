import styled from 'styled-components';

const Popup = styled.div`
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;

    border: 1px solid black;
    width: 310px;
    height: 230px;
    padding: .5em .5em;

    background-color: #EEE;

    .close {
      display: flex;
      justify-content: end;
      margin-bottom: 3px;
    }
`;

const ImagesArea = styled.div`
    display: flex;

    img {
        width: 100px;
        height: 100px;
    }
`;

const PlaceTitle = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em 0em;
`;

const Information = styled.div`
    display: flex;
    span {
        font-size: .7em;
        margin-right: 1em;
    }
`;

const handleBookmarkClick = () => {
  // TODO. 즐겨찾기 기능 구현
};

export default function PlaceInformationPopup(
  { selectedPlace, handlePlaceInformationPopupCloseClick },
) {
  const url = `http://localhost:8080/place/${selectedPlace.placeId}`;

  return (
    <Popup id="popUp" key={selectedPlace.placeId}>
      <p className="close">
        <button type="button" onClick={handlePlaceInformationPopupCloseClick}>
          X
        </button>
      </p>
      <a href={url}>
        <ImagesArea>
          <img src={selectedPlace.firstImage} alt="" />
          <img src={selectedPlace.secondImage} alt="" />
          <img src={selectedPlace.thirdImage} alt="" />
        </ImagesArea>
        <PlaceTitle>
          {selectedPlace.name}
        </PlaceTitle>
        <Information>
          <span>
            {selectedPlace.sido}
            {' '}
            {selectedPlace.sigungu}
          </span>
          <span>
            {selectedPlace.category}
          </span>
          <span>
            {selectedPlace.monday}
          </span>
        </Information>
      </a>
      <button type="button" onClick={handleBookmarkClick}>
        즐겨찾기
      </button>
    </Popup>
  );
}
