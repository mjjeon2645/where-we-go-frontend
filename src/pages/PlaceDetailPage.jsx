import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import PlaceDetailTap from '../components/PlaceDetailTap';
import useBlogReviewStore from '../hooks/useBlogReviewStore';
import useMapStore from '../hooks/useMapStore';
import useUserReviewStore from '../hooks/useUserReviewStore';
import useUserStore from '../hooks/useUserStore';
import { loadMiniKakaoMap } from '../utils/KakaoMap';

const Container = styled.div`
`;

const Wrapper = styled.article`
  padding: 3em 3em 5em 3em;
`;

const MapArea = styled.div`
  width: 400px;
  height: 250px;
`;

export default function PlaceDetailPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigate = useNavigate();

  const mapStore = useMapStore();
  const blogReviewStore = useBlogReviewStore();
  const userReviewStore = useUserReviewStore();
  const userStore = useUserStore();

  const placeId = document.location.pathname.split('/')[2];

  const kakaoMap = useRef(null);

  const { selectedPlace, imageNumber, copyState } = mapStore;
  const { imageSource, contact } = selectedPlace;
  const { blogReviews } = blogReviewStore;
  const { bookmarks } = userStore;

  useEffect(() => {
    const fetchData = async () => {
      await mapStore.fetchSelectedPlaceDetail(placeId);
      await blogReviewStore.fetchBlogReviews(placeId);
      await userReviewStore.fetchUsersReviews(placeId);
      await userStore.fetchBookmarks();

      const { selectedPlace } = mapStore;

      // 재확인 필요
      loadMiniKakaoMap(kakaoMap.current, selectedPlace.position);
    };

    fetchData();
  }, []);

  const goToPrevPage = () => {
    navigate(-1);
  };

  const toggleBookmark = (selectedPlaceId) => {
    userStore.toggleBookmark(selectedPlaceId);
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

  const seePrevImage = () => {
    mapStore.decreaseImageNumber();
  };

  const seeNextImage = () => {
    mapStore.increaseImageNumber();
  };

  const copyAddress = (text) => {
    navigator.clipboard.writeText(text);
    mapStore.setCopyState();
  };

  const toggleModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const getContactNumber = () => {
    toggleModal();
  };

  const openHomePage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      {selectedPlace && imageSource ? (
        <div>
          <PlaceDetailTap
            goToPrevPage={goToPrevPage}
            goToPlaceDetail={goToPlaceDetail}
            goToBlogReview={goToBlogReview}
            goToUserReview={goToUserReview}
            size={blogReviews?.length || 0}
          />
          <Wrapper>
            <PlaceDetail
              imageNumber={imageNumber}
              selectedPlace={selectedPlace}
              copyState={copyState}
              bookmarks={bookmarks}
              seePrevImage={seePrevImage}
              seeNextImage={seeNextImage}
              toggleBookmark={toggleBookmark}
              copyAddress={copyAddress}
            />
            <MapArea ref={kakaoMap} />
          </Wrapper>
          <PlaceContactBar
            contact={contact}
            isContactModalOpen={isContactModalOpen}
            toggleModal={toggleModal}
            getContactNumber={getContactNumber}
            openHomePage={openHomePage}
          />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
