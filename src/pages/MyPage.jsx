import styled from 'styled-components';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  padding: 3em 3em 0 3em;
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: bold;
`;

export default function MyPage() {
  const userStore = useUserStore();

  const { nickName } = userStore;

  return (
    <Container>
      {nickName ? (
        <Title>
          {nickName}
          님, 반갑습니다!
        </Title>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
