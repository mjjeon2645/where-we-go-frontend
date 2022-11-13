import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserReviewForm from '../components/UserReviewForm';

const Container = styled.div`
  padding-top: 3em;
`;

export default function WritingReviewPage() {
  const navigate = useNavigate();

  const placeId = document.location.pathname.split('/')[2];

  const handleCancelWritingClick = () => {
    navigate(`/places/${placeId}/user-review`);
    // TODO. 스토어 상태 클리어 해주는 로직 추가 필요
  };

  return (
    <Container>
      <h2>이 곳, 어떠셨나요?</h2>
      <UserReviewForm handleCancelWritingClick={handleCancelWritingClick} />
    </Container>
  );
}
