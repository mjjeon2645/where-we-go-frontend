import { useEffect } from 'react';
import styled from 'styled-components';
import TopThreePlaces from '../components/TopThreePlaces';
import TopThreeYoutubes from '../components/TopThreeYoutubes';
import useTopThreeStore from '../hooks/useTopThreeStore';

const Container = styled.div`
  padding-top: 3em;
`;

export default function TopThreePage() {
  const topThreeStore = useTopThreeStore();

  const { firstPlace, secondPlace, thirdPlace } = topThreeStore;
  const firstAddress = firstPlace.address.sido;
  const secondAddress = secondPlace.address;
  const thirdAddress = thirdPlace.address;

  useEffect(() => {
    topThreeStore.fetchTopThreePlaces();
  }, []);

  return (
    <Container>
      <h2>Today&apos;s Top 3</h2>
      {firstPlace && secondPlace && thirdPlace ? (
        <div>
          <TopThreePlaces
            firstPlace={firstPlace}
            secondPlace={secondPlace}
            thirdPlace={thirdPlace}
            firstAddress={firstAddress}
            secondAddress={secondAddress}
            thirdAddress={thirdAddress}
          />
          <TopThreeYoutubes />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
