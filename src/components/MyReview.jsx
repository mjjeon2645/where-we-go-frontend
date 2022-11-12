import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: .8em;
`;

export default function MyReview({ handleGoToRateClick }) {
  return (
    <div>
      <Title>내가 남긴 리뷰</Title>
      <p>아직 리뷰를 남기지 않으셨네요!</p>
      <p>마음에 드신 장소라면 다른 회원님들께도 추천해주세요.</p>
      <button type="button" onClick={handleGoToRateClick}>리뷰 남기기</button>
    </div>
  );
}
