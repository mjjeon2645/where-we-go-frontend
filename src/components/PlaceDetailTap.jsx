import styled from 'styled-components';

const Container = styled.div`
  background-color: #EEE;
  height: 4em;
  padding: 1em 4em;
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function PlaceDetailTap({
  goToPrevPage, handleBookmarkClick, goToPlaceDetail,
  goToBlogReview, goToUserReview, size,
}) {
  const handleBackPageClick = () => {
    goToPrevPage();
  };

  const handlePlaceDetailTapClick = () => {
    goToPlaceDetail();
  };

  const handleBlogReviewTapClick = () => {
    goToBlogReview();
  };

  const handleUserReviewTapClick = () => {
    goToUserReview();
  };

  return (
    <Container>
      <nav>
        <Utils>
          <button type="button" onClick={handleBackPageClick}> &lt; 뒤로가기</button>
          <button type="button" onClick={handleBookmarkClick}> 즐겨찾기</button>
        </Utils>
        <Menu>
          <button type="button" onClick={handlePlaceDetailTapClick}>상세정보</button>
          <button type="button" onClick={handleBlogReviewTapClick}>
            블로그 리뷰
            {' '}
            {size}
          </button>
          <button type="button" onClick={handleUserReviewTapClick}>평점/리뷰</button>
        </Menu>
      </nav>
    </Container>
  );
}
