import styled from 'styled-components';

const Container = styled.div`
  padding-top: 40px;
`;

const BackButton = styled.button`
  color: #AAA;
  font-size: 1em;
  background-color: #FFF;
  border: none;
  margin: 0 .5em;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  padding: 0 3em 5em 3em;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2em;
`;

const List = styled.ul`
`;

const Place = styled.button`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  height: 120px;
  margin: 1.5em 0;
  border: 1px solid #DDD;
  border-radius: 8px;
  background-color: #fafafa;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em .5em;

    .place_name {
        font-size: 1.2em;
        font-weight: bold;
        margin: .5em 0;
    }

    .address {
      margin: .5em 0;
    }

    .category {
      color: #FFF;
      border-radius: 10px;
      background-color: #ff9900;
      padding: 4px 10px;
    }
`;

const ImageArea = styled.div`
    width: 13em;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 4px;

    img {
        width: 13em;
        height: 8em;
        object-fit: cover;
    }
`;

export default function FilteredPlacesList({
  places, goBackFromPlaceListPage, goDetailPageOfSelectedPlace,
}) {
  const handleBackFromListPageClick = () => {
    goBackFromPlaceListPage();
  };

  const handleOnePlaceClick = (placeId) => {
    goDetailPageOfSelectedPlace(placeId);
  };

  return (
    <Container>
      <BackButton
        type="button"
        onClick={handleBackFromListPageClick}
      >
        {' '}
        &lt; 돌아가기
      </BackButton>
      <Article>
        <Title>
          {places.length}
          개 장소를 찾았어요! 어디로 가볼까요?
        </Title>
        <List>
          {places.map((value) => (
            <li key={value.placeId}>
              <Place type="button" onClick={() => handleOnePlaceClick(value.placeId)}>
                <ContentArea>
                  <p className="place_name">{value.name}</p>
                  <p className="address">{value.address.fullAddress}</p>
                  <p className="category">{value.category}</p>
                </ContentArea>
                <ImageArea>
                  <img src={value.imageSource.firstImage} alt="" />
                </ImageArea>
              </Place>
            </li>
          ))}
        </List>
      </Article>
    </Container>
  );
}
