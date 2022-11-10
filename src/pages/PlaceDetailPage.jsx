import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PlaceBlogReviews from '../components/PlaceBlogReviews';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import PlaceDetailTap from '../components/PlaceDetailTap';
import PlaceRateAndReview from '../components/PlaceRateAndReview';
import useBlogReviewStore from '../hooks/useBlogReviewStore';
import useMapStore from '../hooks/useMapStore';
import { loadMiniKakaoMap } from '../utils/KakaoMap';

const Container = styled.div`
  padding-bottom: 3em;
`;

const Wrapper = styled.div`
  
`;

const MapArea = styled.div`
  width: 400px;
  height: 250px;
  padding-inline: 3em;
`;

export default function PlaceDetailPage() {
  const [isPlaceDetailOpen, setIsPlaceDetailOpen] = useState(true);
  const [isBlogReviewOpen, setIsBlogReviewOpen] = useState(false);
  const [isRateAndReviewOpen, setIsRateAndReviewOpen] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const mapStore = useMapStore();
  const blogReviewStore = useBlogReviewStore();

  const placeId = document.location.pathname.split('/')[2];

  const kakaoMap = useRef(null);
  const { selectedPlace, imageNumber } = mapStore;

  useEffect(() => {
    const fetchData = async () => {
      await mapStore.fetchSelectedPlaceDetail(placeId);
      await blogReviewStore.fetchBlogReviews(placeId);

      const { selectedPlace } = mapStore;

      loadMiniKakaoMap(kakaoMap.current, selectedPlace.position);
    };

    fetchData();

    setIsPlaceDetailOpen(true);
    setIsBlogReviewOpen(false);
    setIsRateAndReviewOpen(false);
  }, []);

  const {
    imageSource, address, placeServices, contact,
  } = selectedPlace;

  const { blogReviews } = blogReviewStore;

  const handlePlaceDetailCloseClick = () => {
    //
  };

  const handleBookmarkClick = () => {
    //
  };

  const handlePlaceDetailTapClick = () => {
    setIsPlaceDetailOpen(true);
    setIsBlogReviewOpen(false);
    setIsRateAndReviewOpen(false);
  };

  const handleBlogReviewTapClick = () => {
    setIsPlaceDetailOpen(false);
    setIsBlogReviewOpen(true);
    setIsRateAndReviewOpen(false);
  };

  const handlePlaceRateAndReviewTapClick = () => {
    setIsPlaceDetailOpen(false);
    setIsBlogReviewOpen(false);
    setIsRateAndReviewOpen(true);
  };

  const handlePrevImageClick = () => {
    mapStore.decreaseImageNumber();
  };

  const handlNextImageClick = () => {
    mapStore.increaseImageNumber();
  };

  const handleAddressCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 완료! 원하는 곳에 붙여 넣으세요~');
    } catch (error) {
      alert('복사 실패');
    }
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const handlePlaceContactClick = () => {
    toggleContactModal();
  };

  return (
    <Container>
      {selectedPlace && imageSource && address ? (
        <Wrapper>
          <PlaceDetailTap
            handlePlaceDetailCloseClick={handlePlaceDetailCloseClick}
            handleBookmarkClick={handleBookmarkClick}
            handlePlaceDetailTapClick={handlePlaceDetailTapClick}
            handleBlogReviewTapClick={handleBlogReviewTapClick}
            handlePlaceRateAndReviewTapClick={handlePlaceRateAndReviewTapClick}
            size={blogReviews?.length || 0}
          />
          {isPlaceDetailOpen && (
            <div>
              <PlaceDetail
                imageNumber={imageNumber}
                selectedPlace={selectedPlace}
                handlePrevImageClick={handlePrevImageClick}
                handlNextImageClick={handlNextImageClick}
                handleAddressCopyClick={handleAddressCopyClick}
              />
              <MapArea>
                <div ref={kakaoMap} />
              </MapArea>
            </div>
          )}
          {isBlogReviewOpen && (
            <PlaceBlogReviews
              blogReviews={blogReviews}
            />
          )}
          {isRateAndReviewOpen && <PlaceRateAndReview />}
          <PlaceContactBar
            contact={contact}
            toggleContactModal={toggleContactModal}
            isContactModalOpen={isContactModalOpen}
            handlePlaceContactClick={handlePlaceContactClick}
          />
        </Wrapper>
      ) : (
        <p>Now loading...</p>
      )}
    </Container>
  );
}
