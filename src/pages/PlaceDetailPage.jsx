import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import PlaceDetailTap from '../components/PlaceDetailTap';
import useBlogReviewStore from '../hooks/useBlogReviewStore';
import useMapStore from '../hooks/useMapStore';
import useUserReviewStore from '../hooks/useUserReviewStore';
import { loadMiniKakaoMap } from '../utils/KakaoMap';

const Container = styled.div`
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

  const placeId = document.location.pathname.split('/')[2];

  const kakaoMap = useRef(null);

  const { selectedPlace, imageNumber } = mapStore;
  const { imageSource, contact } = selectedPlace;
  const { blogReviews } = blogReviewStore;

  useEffect(() => {
    const fetchData = async () => {
      await mapStore.fetchSelectedPlaceDetail(placeId);
      await blogReviewStore.fetchBlogReviews(placeId);
      await userReviewStore.fetchUsersReviews(placeId);

      const { selectedPlace } = mapStore;

      // 재확인 필요
      loadMiniKakaoMap(kakaoMap.current, selectedPlace.position);
    };

    fetchData();
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

  const seePrevImage = () => {
    mapStore.decreaseImageNumber();
  };

  const seeNextImage = () => {
    mapStore.increaseImageNumber();
  };

  const copyAddress = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 완료! 원하는 곳에 붙여 넣으세요~');
    } catch (error) {
      alert('복사 실패');
    }
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
            handleBookmarkClick={handleBookmarkClick}
            goToPlaceDetail={goToPlaceDetail}
            goToBlogReview={goToBlogReview}
            goToUserReview={goToUserReview}
            size={blogReviews?.length || 0}
          />
          <div>
            <PlaceDetail
              imageNumber={imageNumber}
              selectedPlace={selectedPlace}
              seePrevImage={seePrevImage}
              seeNextImage={seeNextImage}
              copyAddress={copyAddress}
            />
            <MapArea ref={kakaoMap} />
          </div>
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
