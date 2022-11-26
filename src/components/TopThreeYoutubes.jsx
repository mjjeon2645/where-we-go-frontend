import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
font-size: 1.4em;
font-weight: bold;
margin: .5em 0;
`;

export default function TopThreeYoutubes({ youtubes }) {
  const navigate = useNavigate();

  const handleYoutubeVideoClick = (videoId) => {
    navigate(`/video?id=${videoId}`);
  };

  return (
    <article>
      <Title>Youtube로 보는 TOP 3</Title>
      {youtubes.length ? (
        youtubes.map((youtube, index) => (
          <ul key={youtube[index].id.videoId}>
            {youtube.map((video) => (
              <li key={video.id.videoId}>
                <p>{video.snippet.title}</p>
                <button type="button" onClick={() => handleYoutubeVideoClick(video.id.videoId)}>
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
                </button>
              </li>
            ))}
          </ul>
        ))

      ) : (
        <p>now loading...</p>
      )}
    </article>
  );
}

// <Title>Youtube로 보는 TOP 3</Title>
//       {youtubes.length ? (
//         <ul>
//           {youtubes.map((youtube) => (
//             <li key={youtube.id.videoId}>
//               <p>{youtube.snippet.title}</p>
//               <button type="button" onClick={() => handleYoutubeVideoClick(youtube.id.videoId)}>
//                 <img src={youtube.snippet.thumbnails.medium.url} alt="" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>now loading...</p>
//       )}
