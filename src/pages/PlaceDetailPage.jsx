import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';

export default function PlaceDetailPage() {
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
      <button type="button" onClick={handlePlaceDetailCloseClick}> &lt; 뒤로가기</button>
      <button type="button" onClick={handleBookmarkClick}> 즐겨찾기</button>
      <button type="button" onClick={handlePlaceDetailTapClick}>상세정보</button>
      <button type="button" onClick={handleBlogReviewTapClick}>블로그 리뷰 11</button>
      <button type="button" onClick={handlePlaceRatingAndReviewTapClick}>평점/리뷰</button>
      <PlaceDetail
        handlePrevImageClick={handlePrevImageClick}
        handlNextImageClick={handlNextImageClick}
        handleAddressCopyClick={handleAddressCopyClick}
      />
      <PlaceContactBar />
    </div>
  );
}
