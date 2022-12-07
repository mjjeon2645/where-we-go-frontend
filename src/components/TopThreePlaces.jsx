import styled from 'styled-components';

const Container = styled.article`
  margin: 3em 0em;
`;

const TopThreePlacesSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  margin-block: 1.5em;
`;

const Circle = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  background-color: #E6DDD2;
  border-radius: 50%;

  img {
    width: 39px;
    height: 30px;
  }

  div {
    position: absolute;
    left: 5.3%;
    top: 5.6%;
    border: 1px solid #FFF;
    background: transparent;
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }

  p {
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
  }
`;

const Lanking = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  margin-right: 1em;
`;

const Button = styled.button`
  margin-left: 1em;
  background: none;
  border: none;
  width: 50%;
  text-align: start;

  p:first-child {
    font-size: 1.3em;
    font-weight: bold;
    margin-block: .3em;
  }
`;

const Flag = styled.img`
  width: 6px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: .8em;
    color: #0E0E0E;
    font-weight: 300;
    margin-left: .5em;
  }
`;

export default function TopThreePlaces({ topThreePlaces, goPlaceDetailPage }) {
  const handleTopThreeClick = (selectedPlaceId) => {
    goPlaceDetailPage(selectedPlaceId);
  };

  return (
    <Container>
      {topThreePlaces.length ? (
        <div>
          <TopThreePlacesSection>
            <ul>
              {topThreePlaces.map((place, index) => (
                <List key={place.placeId}>
                  <Circle>
                    <div />
                    <Lanking>
                      {index + 1}
                      위
                    </Lanking>
                  </Circle>
                  <Button
                    type="button"
                    onClick={() => handleTopThreeClick(place.placeId)}
                  >
                    <p>{place.name}</p>
                    <Address>
                      <Flag src="https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670398716/spot_hozd2n.png" alt="" />
                      <span>
                        {place.address.sido}
                        {' '}
                        {place.address.sigungu}

                      </span>
                    </Address>
                  </Button>
                  <p>
                    {place.averageRate}
                    점
                  </p>
                </List>
              ))}
            </ul>
          </TopThreePlacesSection>
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
