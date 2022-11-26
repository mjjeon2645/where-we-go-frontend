import RelatedVideos from '../components/RelatedVideos';
import YoutubePlayer from '../components/YoutubePlayer';

export default function YoutubePlayerPage() {
  const videoId = window.location.search.split('=')[1];
  const options = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <h2>dd</h2>
      <YoutubePlayer videoId={videoId} options={options} />
      <RelatedVideos />
    </div>
  );
}
