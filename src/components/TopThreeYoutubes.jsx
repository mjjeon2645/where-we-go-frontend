import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
font-size: 1.4em;
font-weight: bold;
margin: .5em 0;
`;

export default function TopThreeYoutubes({ firstPlaceYoutubeData }) {
  const navigate = useNavigate();

  const handleYoutubeVideoClick = (videoId) => {
    navigate(`/video?id=${videoId}`);
  };

  return (
    <article>
      <Title>Youtube로 보는 TOP 3</Title>
      {Object.keys(firstPlaceYoutubeData).length ? (
        <ul>
          <li key={firstPlaceYoutubeData.id.videoId}>
            <p>{firstPlaceYoutubeData.snippet.title}</p>
            <p>{firstPlaceYoutubeData.snippet.description}</p>
            <button type="button" onClick={() => handleYoutubeVideoClick(firstPlaceYoutubeData.id.videoId)}>
              <img src={firstPlaceYoutubeData.snippet.thumbnails.medium.url} alt="" />
            </button>
          </li>
        </ul>
      ) : (
        <p>now loading...</p>
      )}
    </article>
  );
}
