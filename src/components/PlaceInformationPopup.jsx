import styled from 'styled-components';

const Popup = styled.div`
    position: absolute;
    top: 350px;
    z-index: 10;

    border: 1px solid black;
    width: 310px;
    height: 210px;
    padding: .5em .5em;

    // 보기 편하려고 마진 넣은 것. 나중에 지우기
    margin-left: 3em;
    background-color: #EEE;
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
  //
};

export default function PlaceInformationPopup({ selectedPlace, handleCloseClick }) {
  console.log('PlaceInformationPopup');
  return (
    <Popup id="popUp" key={selectedPlace.id}>
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
      <button
        type="button"
        onClick={handleCloseClick}
      >
        X
      </button>
      <button
        type="button"
        onClick={handleBookmarkClick}
      >
        즐겨찾기
      </button>
    </Popup>
  );
}
