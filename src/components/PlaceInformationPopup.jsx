import styled from 'styled-components';

const Popup = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;

    border-radius: 8px;
    width: 280px;
    height: 180px;
    padding: .5em .5em;

    background-color: #ffffff;
`;

const CloseButton = styled.button`
  color: #AAA;
  align-self: end;
  background: transparent;
  border: none;
`;

const ImagesArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
        width: 85px;
        height: 85px;
        border-radius: 3px;
    }
`;

const PlaceTitle = styled.h2`
    font-size: 1.1em;
    font-weight: bold;
    margin: .5em 0em;
`;

const Information = styled.div`
    display: flex;
    span {
        font-size: .7em;
        margin-right: 1em;
    }
`;

export default function PlaceInformationPopup(
  { selectedPlace, closePopup },
) {
  const url = `http://localhost:8080/places/${selectedPlace.placeId}`;

  const date = new Date();

  const dayOfWeekArray = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
  ];

  const dayOfWeek = dayOfWeekArray[date.getDay()];

  const { address, businessHours, imageSource } = selectedPlace;

  const handlePlaceInformationPopupCloseClick = () => {
    closePopup();
  };

  return (
    <Popup id="popUp" key={selectedPlace.placeId}>
      <CloseButton
        className="close"
        type="button"
        onClick={handlePlaceInformationPopupCloseClick}
      >
        X
      </CloseButton>
      <ImagesArea>
        <img src={imageSource.firstImage} alt="" />
        <img src={imageSource.secondImage} alt="" />
        <img src={imageSource.thirdImage} alt="" />
      </ImagesArea>
      <a href={url}>
        <PlaceTitle>
          {selectedPlace.name}
        </PlaceTitle>
        <Information>
          <span>
            {address.sido}
            {' '}
            {address.sigungu}
          </span>
          <span>
            {selectedPlace.category}
          </span>
          <span>
            {businessHours[dayOfWeek]}
          </span>
        </Information>
      </a>
    </Popup>
  );
}
