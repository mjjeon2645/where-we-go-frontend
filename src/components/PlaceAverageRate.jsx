import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 5em;

  p:first-child {
    font-weight: bold;
  }

  p:last-child {
    color: #494949;
  }
`;

export default function PlaceAverageRate({ averageRate, userReviews }) {
  return (
    <Container>
      <p>
        {averageRate}
        {' '}
        / 5점
      </p>
      <p>
        {userReviews.length}
        명 참여
      </p>
    </Container>
  );
}
