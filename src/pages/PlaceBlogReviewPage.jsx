import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PlaceBlogReviews from '../components/PlaceBlogReviews';
import PlaceDetailTap from '../components/PlaceDetailTap';

import useBlogReviewStore from '../hooks/useBlogReviewStore';

const Container = styled.div`
`;

const Wrapper = styled.article`
  padding-top: 3em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 2em;

  strong {
    color: #08ce5b;
  }
`;

export default function PlaceBlogReviewPage() {
  const blogReviewStore = useBlogReviewStore();

  const placeId = document.location.pathname.split('/')[2];

  const navigate = useNavigate();

  const { blogReviews } = blogReviewStore;

  useEffect(() => {
    blogReviewStore.fetchBlogReviews(placeId);
  }, []);

  const goToBlogWebPage = (blogReviewUrl) => {
    window.open(blogReviewUrl, '_blank');
  };

  const goToPrevPage = () => {
    navigate(-1);
  };

  const handleBookmarkClick = () => {
    //
  };

  const goToPlaceDetail = () => {
    navigate(`/places/${placeId}`);
  };

  const goToBlogReview = () => {
    navigate(`/places/${placeId}/blog-review`);
  };

  const goToUserReview = () => {
    navigate(`/places/${placeId}/user-review`);
  };

  return (
    <Container>
      <PlaceDetailTap
        goToPrevPage={goToPrevPage}
        handleBookmarkClick={handleBookmarkClick}
        goToPlaceDetail={goToPlaceDetail}
        goToBlogReview={goToBlogReview}
        goToUserReview={goToUserReview}
        size={blogReviews?.length || 0}
      />
      {blogReviews ? (
        <Wrapper>
          <Title>
            <strong>네이버</strong>
            {' '}
            블로그 리뷰
          </Title>
          <PlaceBlogReviews
            blogReviews={blogReviews}
            goToBlogWebPage={goToBlogWebPage}
          />
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
