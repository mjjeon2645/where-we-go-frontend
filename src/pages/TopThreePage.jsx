import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopThreePlaces from '../components/TopThreePlaces';
import TopThreeYoutubes from '../components/TopThreeYoutubes';
import useTopThreeStore from '../hooks/useTopThreeStore';

const Container = styled.div`
  padding-block: 3em;
  margin-inline: 3em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  color: #ff9d13;
`;

export default function TopThreePage() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const topThreeStore = useTopThreeStore();

  const { topThreePlaces, firstPlaceYoutubeData } = topThreeStore;

  const navigate = useNavigate();

  useEffect(() => {
    topThreeStore.fetchTopThreePlaces();
  }, []);

  const toggleModal = () => {
    setIsAccessModalOpen(!isAccessModalOpen);
  };

  const goPlaceDetailPage = (placeId) => {
    navigate(`/places/${placeId}`);
    toggleModal();
  };

  return (
    <Container>
      <Title>Today&apos;s Top 3</Title>
      {topThreePlaces.length !== 0 ? (
        <div>
          <TopThreePlaces
            topThreePlaces={topThreePlaces}
            goPlaceDetailPage={goPlaceDetailPage}
          />
          <TopThreeYoutubes firstPlaceYoutubeData={firstPlaceYoutubeData} />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
