import styled from 'styled-components';

const Container = styled.article`
  margin: 3em 0em;
`;

const Title = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  margin: .5em 0;
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

const Lanking = styled.p`
  font-size: 1.1em;
    font-weight: bold;
    margin-right: 1em;
`;

const Button = styled.button`
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
width: 7%;
`;

const Address = styled.div`
display: flex;
align-items: center;

span {
  color: #666666;
  margin-left: .1em;
}
`;

const FirstPlace = styled.section`
  margin: 3em 0 1em 0;
  display: flex;
  align-items: center;

  p:first-child {
    font-size: 1.4em;
    font-weight: bold;
    margin-right: 1em;
  }
`;

const Others = styled.section`
  margin-block: 1em;
  display: flex;
  align-items: center;

  p:first-child {
    font-size: 1.1em;
    font-weight: bold;
    margin-right: 1.4em;
  }
`;

const Name = styled.p`
  font-size: 1.1em;
  font-weight: bold;
`;

const Location = styled.p`
  font-size: .9em;
  margin-top: .3em;
  color: #858585;
`;

export default function TopThreePlaces({ topThreePlaces, goPlaceDetailPage }) {
  const handleTopThreeClick = (selectedPlaceId) => {
    goPlaceDetailPage(selectedPlaceId);
  };

  const flagIcon = 'https://user-images.githubusercontent.com/104840243/203305440-47ea3927-697c-4fc0-8523-7a2eee0c47a6.png';

  return (
    <Container>
      {topThreePlaces.length ? (
        <div>
          <Title>오늘은 어디가요? TOP 3</Title>
          <p>오어디 회원님들이 추천하는 장소는 어디일까요?</p>
          <TopThreePlacesSection>
            <ul>
              {topThreePlaces.map((place, index) => (
                <List key={place.placeId}>
                  <Lanking>
                    {index + 1}
                    위
                  </Lanking>
                  <Button
                    type="button"
                    onClick={() => handleTopThreeClick(place.placeId)}
                  >
                    <p>{place.name}</p>
                    <Address>
                      <Flag src={flagIcon} alt="" />
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
