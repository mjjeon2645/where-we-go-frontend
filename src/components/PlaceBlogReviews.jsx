import styled from 'styled-components';

const Container = styled.div`
  padding: 3em 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 2em;

  strong {
    color: #08ce5b;
  }
`;

const Wrapper = styled.article`
  padding: 0 3em;    
`;

const Review = styled.button`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  height: 120px;
  margin: 1.5em 0;
  border: 1px solid #DDD;
  border-radius: 8px;
  background-color: #fafafa;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em .5em;

    .title {
      text-align: left;
      font-size: 1.2em;
      font-weight: bold;
      margin: .5em 0;
    }

    .date {
      margin: .2em 0;
    }

    .author {
      color: #AAA;
    }
`;

const ImageArea = styled.div`
    width: 13em;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 4px;

    img {
        width: 13em;
        height: 8em;
        object-fit: cover;
    }
`;

const NoneMessage = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-top: 5em;
`;

export default function PlaceBlogReviews({ blogReviews }) {
  return (
    <Container>
      <Title>
        <strong>네이버</strong>
        {' '}
        블로그 리뷰
      </Title>
      {blogReviews.length !== 0 ? (
        <Wrapper>
          <ul>
            {blogReviews.map((blogReview) => (
              <li key={blogReview.id}>
                <Review type="button" onClick={() => window.open(blogReview.url, '_blank')}>
                  <ContentArea>
                    <p className="title">{blogReview.title}</p>
                    <p className="date">{blogReview.date}</p>
                    <p className="author">
                      by.
                      {' '}
                      {blogReview.author}
                    </p>
                  </ContentArea>
                  <ImageArea>
                    <img src={blogReview.imageSource} alt="" />
                  </ImageArea>
                </Review>
              </li>
            ))}
          </ul>
        </Wrapper>
      ) : (
        <NoneMessage>등록된 리뷰가 없습니다 😓</NoneMessage>
      )}

    </Container>
  );
}
