import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import TopThreePlaces from '../components/TopThreePlaces';
import TopThreeYoutubes from '../components/TopThreeYoutubes';
import UnauthorizedAccessModal from '../components/UnauthorizedAccessModal';
import useTopThreeStore from '../hooks/useTopThreeStore';

const Container = styled.div`
  padding-top: 3em;
  margin-inline: 3em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  color: #ff9d13;
`;

export default function TopThreePage() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const topThreeStore = useTopThreeStore();

  const { topThreePlaces } = topThreeStore;

  const navigate = useNavigate();

  useEffect(() => {
    topThreeStore.fetchTopThreePlaces();
  }, []);

  const toggleModal = () => {
    setIsAccessModalOpen(!isAccessModalOpen);
  };

  const goToLogin = () => {
    navigate('/login');
    setAccessToken('');
    toggleModal();
  };

  const goPlaceDetailPage = (placeId) => {
    if (accessToken && accessToken !== 'temporaryAccessToken') {
      navigate(`/places/${placeId}`);
      return;
    }
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
          <UnauthorizedAccessModal
            isAccessModalOpen={isAccessModalOpen}
            toggleModal={toggleModal}
            goToLogin={goToLogin}
          />
          <TopThreeYoutubes />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
