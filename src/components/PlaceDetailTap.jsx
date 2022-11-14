import styled from 'styled-components';

const Container = styled.nav`
  background-color: #ff9d13;
  height: 5em;
  padding: 1em 4em;
  border-bottom: 2px solid #FFF;

  button {
    background: none;
    border: none;
    color: #FFF;
  }
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  button {
    background: none;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1em;
    font-weight: bold;
  }
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
    </Container>
  );
}
