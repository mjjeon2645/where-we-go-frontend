/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import styled from 'styled-components';
import PlaceContactBar from '../components/PlaceContactBar';
import useMapStore from '../hooks/useMapStore';

const Container = styled.div`
`;

const Wrapper = styled.div`
  
`;

export default function PlaceDetailPage() {
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

  return (
    <Container>
      {selectedPlace && imageSource && address ? (
        <Wrapper>
          <button type="button" onClick={handlePlaceDetailCloseClick}> &lt; 뒤로가기</button>
          <button type="button" onClick={handleBookmarkClick}> 즐겨찾기</button>
          <button type="button" onClick={handlePlaceDetailTapClick}>상세정보</button>
          <button type="button" onClick={handleBlogReviewTapClick}>블로그 리뷰 11</button>
          <button type="button" onClick={handlePlaceRatingAndReviewTapClick}>평점/리뷰</button>
          <article>
            <div>
              {imageNumber === 1 ? (
                <img src={imageSource.firstImage} alt="" />
              ) : imageNumber === 2 ? (
                <img src={imageSource.secondImage} alt="" />
              ) : (
                <img src={imageSource.thirdImage} alt="" />
              )}
              <div>
                <button type="button" onClick={handlePrevImageClick}>&lt;</button>
                <span>
                  {imageNumber}
                  {' '}
                  / 3
                </span>
                <button type="button" onClick={handlNextImageClick}>&gt;</button>
              </div>
            </div>
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>편의시설</p>
              <p>예약</p>
              <p>주차</p>
              <p>외부음식</p>
              <p>수유실</p>
              <p>주소</p>
              <p>{address.fullAddress}</p>
              <button type="button" onClick={handleAddressCopyClick}>주소복사버튼</button>
              <p>미니 지도 영역</p>
            </div>
          </article>
          <PlaceContactBar contact={contact} />
        </Wrapper>
      ) : (
        <p>Now loading...</p>
      )}
    </Container>
  );
}
