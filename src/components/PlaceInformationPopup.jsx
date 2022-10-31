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
export default function PlaceInformationPopup({ selectedPlace, handleCloseClick }) {
  return (
    <Popup id="popUp" key={selectedPlace.id}>
      <p className="close">
        <button type="button" onClick={handleCloseClick}>
          X
        </button>
      </p>
      <ImagesArea>
        <img src={selectedPlace.imageSources.first} alt="" />
        <img src={selectedPlace.imageSources.second} alt="" />
        <img src={selectedPlace.imageSources.third} alt="" />
      </ImagesArea>
      <PlaceTitle>
        {selectedPlace.title}
      </PlaceTitle>
      <Information>
        <span>
          {selectedPlace.address.city}
          {' '}
          {selectedPlace.address.area}
        </span>
        <span>
          {selectedPlace.type}
        </span>
        <span>
          {selectedPlace.businessHours}
        </span>
      </Information>
      <button type="button" onClick={handleBookmarkClick}>
        즐겨찾기
      </button>
    </Popup>
  );
}
