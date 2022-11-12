import styled from 'styled-components';
import UserReviewForm from '../components/UserReviewForm';

const Container = styled.div`
  padding-top: 3em;
`;

export default function WritingReviewPage() {
  return (
    <Container>
      <h2>이 곳, 어떠셨나요?</h2>
      <UserReviewForm />
    </Container>
  );
}
