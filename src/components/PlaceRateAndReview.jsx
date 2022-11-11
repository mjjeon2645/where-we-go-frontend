import styled from 'styled-components';

const Container = styled.div`
  padding-inline: 5em;
`;

const RateSection = styled.div`
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

const MyReviewSection = styled.article`
  
`;

const UsersReviewSection = styled.article`
  
`;

const SectionTitle = styled.p`
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

export default function PlaceRateAndReview({ averageRate, userReviews }) {
  return (
    <Container>
      <RateSection>
        <p>
          {averageRate}
          {' '}
          / 5점
        </p>
        <p>
          {userReviews.length}
          명 참여
        </p>
      </RateSection>
      <MyReviewSection>
        <SectionTitle>내가 남긴 리뷰</SectionTitle>
        <p>아직 리뷰를 남기지 않으셨네요!</p>
        <p>마음에 드신 장소라면 다른 회원님들께도 추천해주세요.</p>
      </MyReviewSection>
      <UsersReviewSection>
        <SectionTitle>회원님들의 리뷰</SectionTitle>
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
      </UsersReviewSection>
    </Container>
  );
}
