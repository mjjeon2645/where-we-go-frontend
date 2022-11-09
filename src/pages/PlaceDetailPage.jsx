import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaceContactBar from '../components/PlaceContactBar';
import PlaceDetail from '../components/PlaceDetail';
import useMapStore from '../hooks/useMapStore';

const Container = styled.div`
`;

const Wrapper = styled.div`
  
`;

export default function PlaceDetailPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const mapStore = useMapStore();

  const path = document.location.pathname;

  useEffect(() => {
    mapStore.fetchSelectedPlaceDetail(path.split('/')[2]);
  }, []);

  const { selectedPlace, imageNumber } = mapStore;
  const {
    imageSource, address, placeServices, contact,
  } = selectedPlace;

  const handlePlaceDetailCloseClick = () => {
    //
  };

  const handleBookmarkClick = () => {
    //
  };

  const handlePlaceDetailTapClick = () => {
    //
  };

  const handleBlogReviewTapClick = () => {
    //
  };

  const handlePlaceRatingAndReviewTapClick = () => {
    //
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
          <button type="button" onClick={handlePlaceDetailCloseClick}> &lt; 뒤로가기</button>
          <button type="button" onClick={handleBookmarkClick}> 즐겨찾기</button>
          <button type="button" onClick={handlePlaceDetailTapClick}>상세정보</button>
          <button type="button" onClick={handleBlogReviewTapClick}>블로그 리뷰 11</button>
          <button type="button" onClick={handlePlaceRatingAndReviewTapClick}>평점/리뷰</button>
          <PlaceDetail
            imageNumber={imageNumber}
            selectedPlace={selectedPlace}
            handlePrevImageClick={handlePrevImageClick}
            handlNextImageClick={handlNextImageClick}
            handleAddressCopyClick={handleAddressCopyClick}
          />
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
