import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: .8em;
`;

const Review = styled.li`
  margin-bottom: 1em;

  strong {
    font-weight: bold;
  }

  span {
    display: inline-block;
    color: #494949;
    margin-block: .5em;
  }
`;

const Body = styled.p`
  font-size: .9em;
`;

export default function UsersReviews({ userReviews }) {
  return (
    <div>
      <Title>회원님들의 리뷰</Title>
      {userReviews.length !== 0 ? (
        <ul>
          {userReviews.map((userReview) => (
            <Review key={userReview.id}>
              <p>
                <strong>봄이엄마</strong>
                <span>
                  (방문일:
                  {' '}
                  {userReview.dateOfVisit}
                  )
                </span>
              </p>
              <Body>{userReview.body}</Body>
            </Review>
          ))}
        </ul>
      ) : (
        <p>아직 리뷰가 없어요🥲 회원님들의 소중한 추억을 공유해주세요</p>
      )}
    </div>
  );
}
