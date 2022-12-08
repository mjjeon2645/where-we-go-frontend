import styled from 'styled-components';

const Container = styled.nav`
  height: 2.5em;

  border-bottom: 2px solid #ECECEC;

  button {
    background: none;
    border: none;
  }
`;

// const Utils = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1em;

//   button {
//     background: none;
//   }
// `;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  padding-inline: 3em;
  /* border-bottom: 1px #ECECEC solid; */

  button {
    font-size: 1em;
    font-weight: bold;
  }
`;

export default function PlaceDetailTap({
  goToPlaceDetail, goToBlogReview, goToUserReview, size,
}) {
  // const handleBackPageClick = () => {
  //   goToPrevPage();
  // };

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
      {/* <Utils>
        <button type="button" onClick={handleBackPageClick}> &lt; 뒤로가기</button>
      </Utils> */}
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
