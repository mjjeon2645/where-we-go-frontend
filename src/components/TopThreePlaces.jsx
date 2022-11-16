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

export default function TopThreePlaces({ topThreePlaces }) {
  const firstPlace = topThreePlaces[0];
  const secondPlace = topThreePlaces[1];
  const thirdPlace = topThreePlaces[2];

  const rootUrl = 'http://localhost:8080/places/';

  return (
    <Container>
      {topThreePlaces.length ? (
        <div>
          <Title>오늘은 어디가요? TOP 3</Title>
          <p>오어디 회원님들이 추천하는 장소는 어디일까요?</p>
          <TopThreePlacesSection>
            <FirstPlace>
              <p>1위</p>
              <a href={rootUrl + firstPlace.placeId}>
                <Name>{firstPlace.name}</Name>
                <Location>
                  {firstPlace.address.sido}
                  {' '}
                  {firstPlace.address.sigungu}
                </Location>
              </a>
              <p>{firstPlace.averageRate}</p>
            </FirstPlace>
            <Others>
              <p>2위</p>
              <a href={rootUrl + secondPlace.placeId}>
                <Name>{secondPlace.name}</Name>
                <Location>
                  {secondPlace.address.sido}
                  {' '}
                  {secondPlace.address.sigungu}
                </Location>
              </a>
              <p>{secondPlace.averageRate}</p>
            </Others>
            <Others>
              <p>3위</p>
              <a href={rootUrl + thirdPlace.placeId}>
                <Name>{thirdPlace.name}</Name>
                <Location>
                  {thirdPlace.address.sido}
                  {' '}
                  {thirdPlace.address.sigungu}
                </Location>
              </a>
              <p>{thirdPlace.averageRate}</p>
            </Others>
          </TopThreePlacesSection>
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
