import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceAverageRate from '../components/PlaceAverageRate';
import MyReview from '../components/MyReview';
import OthersReviews from '../components/UsersReviews';
import useUserReviewStore from '../hooks/useUserReviewStore';
import PlaceDetailTap from '../components/PlaceDetailTap';
import useBlogReviewStore from '../hooks/useBlogReviewStore';

const Wrapper = styled.div`
  padding-inline: 3em;
`;

export default function PlaceUserReviewPage() {
  const blogReviewStore = useBlogReviewStore();
  const userReviewStore = useUserReviewStore();

  const placeId = document.location.pathname.split('/')[2];

  const navigate = useNavigate();

  const { blogReviews } = blogReviewStore;
  const { averageRate, userReviews } = userReviewStore;

  useEffect(() => {
    blogReviewStore.fetchBlogReviews(placeId);
    userReviewStore.fetchUsersReviews(placeId);
  }, []);

  const handlePlaceDetailCloseClick = () => {
    //
  };

  const handleBookmarkClick = () => {
    //
  };

  const handlePlaceDetailTapClick = () => {
    navigate(`/places/${placeId}`);
  };

  const handleBlogReviewTapClick = () => {
    navigate(`/places/${placeId}/blog-review`);
  };

  const handleUserReviewTapClick = () => {
    navigate(`/places/${placeId}/user-review`);
  };

  const handleGoToRateClick = () => {
    navigate(`/places/${placeId}/write`);
  };

  return (
    <div>
      <PlaceDetailTap
        handlePlaceDetailCloseClick={handlePlaceDetailCloseClick}
        handleBookmarkClick={handleBookmarkClick}
        handlePlaceDetailTapClick={handlePlaceDetailTapClick}
        handleBlogReviewTapClick={handleBlogReviewTapClick}
        handleUserReviewTapClick={handleUserReviewTapClick}
        size={blogReviews?.length || 0}
      />
      {userReviews ? (
        <Wrapper>
          <PlaceAverageRate averageRate={averageRate} userReviews={userReviews} />
          <MyReview handleGoToRateClick={handleGoToRateClick} />
          <OthersReviews userReviews={userReviews} />
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </div>
  );
}
