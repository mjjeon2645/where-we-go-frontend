import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceAverageRate from '../components/PlaceAverageRate';
import MyReview from '../components/MyReview';
import UsersReviews from '../components/UsersReviews';
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

  const goToReviewForm = () => {
    navigate(`/places/${placeId}/write`);
  };

  return (
    <div>
      <PlaceDetailTap
        goToPrevPage={goToPrevPage}
        handleBookmarkClick={handleBookmarkClick}
        goToPlaceDetail={goToPlaceDetail}
        goToBlogReview={goToBlogReview}
        goToUserReview={goToUserReview}
        size={blogReviews?.length || 0}
      />
      {userReviews ? (
        <Wrapper>
          <PlaceAverageRate averageRate={averageRate} userReviews={userReviews} />
          <MyReview goToReviewForm={goToReviewForm} />
          <UsersReviews userReviews={userReviews} />
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </div>
  );
}
