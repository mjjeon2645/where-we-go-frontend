import styled from 'styled-components';

const Container = styled.article`
  margin-block: 3em;
`;
const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 1em;
`;

export default function MyChildren() {
  return (
    <Container>
      <Title>아이 정보</Title>
      <p>comming soon...</p>
    </Container>
  );
}
