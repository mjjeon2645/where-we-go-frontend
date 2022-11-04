import styled from 'styled-components';

const List = styled.ul`
    //TODO.
`;

const Place = styled.button`
    display: flex;
    width: 30%;
`;

const ContentArea = styled.div`
    .place_name {
        font-weight: bold;
    }
`;

const ImageArea = styled.div`
    width: 13em;
    overflow: hidden;

    img {
        width: 13em;
        object-fit: cover;
    }
`;

export default function FilteredPlacesList({
  positions, handleListPageCloseClick, handleOnePlaceClick,
}) {
  return (
    <div>
      <p>
        총
        {' '}
        {positions.length}
        개 장소
      </p>
      <button
        type="button"
        onClick={handleListPageCloseClick}
      >
        뒤로가기
      </button>

      <List>
        {positions.map((value) => (
          <li key={value.placeId}>
            <Place type="button" onClick={() => handleOnePlaceClick(value.placeId)}>
              <ContentArea>
                <p className="place_name">{value.name}</p>
                <p className="address">{value.fullAddress}</p>
                <p className="category">{value.category}</p>
              </ContentArea>
              <ImageArea>
                <img src={value.firstImage} alt="" />
              </ImageArea>
            </Place>
          </li>
        ))}
      </List>
    </div>
  );
}
