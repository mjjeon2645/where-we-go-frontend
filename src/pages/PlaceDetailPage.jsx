import { useEffect } from 'react';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import PlaceDetailTap from '../components/PlaceDetailTap';
import useMapStore from '../hooks/useMapStore';

export default function PlaceDetailPage() {
  const mapStore = useMapStore();

  const path = document.location.pathname;

  useEffect(() => {
    mapStore.fetchSelectedPlaceInformation(path.split('/')[2]);
  }, []);

  const handlePlaceDetailCloseClick = () => {
    //
  };

  const handleBookmarkClick = () => {
    //
  };

  const handlePlaceDetailTapClick = () => {
    //
  };

  const handleBlogReviewTapClick = () => {
    //
  };

  const handlePlaceRatingAndReviewTapClick = () => {
    //
  };

  const handlePrevImageClick = () => {
    //
  };

  const handlNextImageClick = () => {
    //
  };

  const handleAddressCopyClick = () => {
    //
  };

  return (
    <div>
      <PlaceDetailTap
        handlePlaceDetailCloseClick={handlePlaceDetailCloseClick}
        handleBookmarkClick={handleBookmarkClick}
        handlePlaceDetailTapClick={handlePlaceDetailTapClick}
        handleBlogReviewTapClick={handleBlogReviewTapClick}
        handlePlaceRatingAndReviewTapClick={handlePlaceRatingAndReviewTapClick}
      />
      <PlaceDetail
        handlePrevImageClick={handlePrevImageClick}
        handlNextImageClick={handlNextImageClick}
        handleAddressCopyClick={handleAddressCopyClick}
        selectedPlace={selectedPlace}
      />
      <PlaceContactBar />
    </div>
  );
}
