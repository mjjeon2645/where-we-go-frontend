export default function PlaceDetailTap({
  handlePlaceDetailCloseClick, handleBookmarkClick, handlePlaceDetailTapClick,
  handleBlogReviewTapClick, handlePlaceRateAndReviewTapClick,
}) {
  return (
    <nav>
      <button type="button" onClick={handlePlaceDetailCloseClick}> &lt; 뒤로가기</button>
      <button type="button" onClick={handleBookmarkClick}> 즐겨찾기</button>
      <button type="button" onClick={handlePlaceDetailTapClick}>상세정보</button>
      <button type="button" onClick={handleBlogReviewTapClick}>블로그 리뷰 11</button>
      <button type="button" onClick={handlePlaceRateAndReviewTapClick}>평점/리뷰</button>
    </nav>
  );
}
