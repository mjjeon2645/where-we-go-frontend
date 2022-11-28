import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import YoutubePlayer from '../components/YoutubePlayer';

const Container = styled.div`
  padding-top: 3em;  
`;

const Title = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  margin: .5em 0;
`;

export default function YoutubePlayerPage() {
  const navigate = useNavigate();
  const videoId = window.location.search.split('=')[1];
  const options = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleBackPageClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <button type="button" onClick={handleBackPageClick}> &lt; 뒤로가기</button>
      <Title>Youtube로 보는 TOP 3</Title>
      <div>
        <YoutubePlayer videoId={videoId} options={options} />
      </div>
    </Container>
  );
}
