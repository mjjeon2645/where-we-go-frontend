import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaceBlogReviews from '../components/PlaceBlogReviews';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import PlaceDetailTap from '../components/PlaceDetailTap';
import PlaceRateAndReview from '../components/PlaceRateAndReview';
import useBlogReviewStore from '../hooks/useBlogReviewStore';
import useMapStore from '../hooks/useMapStore';

const Container = styled.div`
`;

const Wrapper = styled.div`
  
`;

export default function PlaceDetailPage() {
  const [isPlaceDetailOpen, setIsPlaceDetailOpen] = useState(true);
  const [isBlogReviewOpen, setIsBlogReviewOpen] = useState(false);
  const [isRateAndReviewOpen, setIsRateAndReviewOpen] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const mapStore = useMapStore();
  const blogReviewStore = useBlogReviewStore();

  const placeId = document.location.pathname.split('/')[2];

  useEffect(() => {
    mapStore.fetchSelectedPlaceDetail(placeId);
    blogReviewStore.fetchBlogReviews(placeId);
  }, []);

  const { selectedPlace, imageNumber } = mapStore;
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

  const handleAddressCopyClick = () => {
    //
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
            <PlaceDetail
              imageNumber={imageNumber}
              selectedPlace={selectedPlace}
              handlePrevImageClick={handlePrevImageClick}
              handlNextImageClick={handlNextImageClick}
              handleAddressCopyClick={handleAddressCopyClick}
            />
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
