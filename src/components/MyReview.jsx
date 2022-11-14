import styled from 'styled-components';

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

export default function MyReview({ goToReviewForm }) {
  const handleGoToWritingReviewClick = () => {
    goToReviewForm();
  };

  return (
    <div>
      <Title>내가 남긴 리뷰</Title>
      <p>아직 리뷰를 남기지 않으셨네요!</p>
      <p>마음에 드신 장소라면 다른 회원님들께도 추천해주세요.</p>
      <WriteButton
        type="button"
        onClick={handleGoToWritingReviewClick}
      >
        리뷰 작성하기
      </WriteButton>
    </div>
  );
}
