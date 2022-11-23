import styled from 'styled-components';

const Container = styled.article`
  margin-block: 5em;
`;

const Title = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: .8em;
`;

const WriteButton = styled.button`
  font-size: 1em;
  color: #ff9d13;
  margin-top: 2em;
  border: 1px solid #EEE;
  border-radius: 8px;
  padding: .8em 1em;
  background-color: #f8f8f8;
`;

const MetaInformation = styled.div`
  display: flex;
  border-bottom: 1px solid #b6b6b6;
  width: 70%;
  padding-bottom: .5em;
  margin-bottom: .7em;

  p {
    font-size: .8em;
    color: #494949;
    margin-right: 2em;
  }
`;

const Body = styled.p`
  width: 80%;
  line-height: 1.3em;
`;

const DeleteButton = styled.div`
  text-align: right;
  margin: 1.5em 5em 0 0;

  button {
    background-color: #EEE;
    border: none;
    border-radius: 4px;
    padding: .3em .5em;
  }
`;

export default function MyReview({ myReviewAtThePlace, goToReviewForm, deleteReview }) {
  const handleGoToWritingReviewClick = () => {
    goToReviewForm();
  };

  const handleMyReviewDeleteClick = (reviewId) => {
    deleteReview(reviewId);
  };

  return (
    <Container>
      <Title>내가 남긴 리뷰</Title>
      {myReviewAtThePlace === null || Object.keys(myReviewAtThePlace).length === 0 ? (
        <div>
          <p>아직 리뷰를 남기지 않으셨네요!</p>
          <p>마음에 드신 장소라면 다른 회원님들께도 추천해주세요.</p>
          <WriteButton
            type="button"
            onClick={handleGoToWritingReviewClick}
          >
            리뷰 작성하기
          </WriteButton>
        </div>
      ) : (
        <div>
          <MetaInformation>
            <p>
              작성일:
              {' '}
              {myReviewAtThePlace.createdAt.slice(0, 10)}
            </p>
            <p>
              방문일:
              {' '}
              {myReviewAtThePlace.dateOfVisit}
            </p>
            <p>
              평점:
              {' '}
              {myReviewAtThePlace.rate}
            </p>
          </MetaInformation>
          <Body>{myReviewAtThePlace.body}</Body>
          <DeleteButton>
            <button type="button" onClick={() => handleMyReviewDeleteClick(myReviewAtThePlace.id)}>삭제하기</button>
          </DeleteButton>
        </div>
      )}
    </Container>
  );
}
