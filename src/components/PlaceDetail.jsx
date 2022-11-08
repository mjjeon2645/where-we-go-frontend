export default function PlaceDetail(
  {
    handlePrevImageClick, handlNextImageClick, handleAddressCopyClick, selectedPlace,
  },
) {
  console.log(selectedPlace);
  return (
    <article>
      <div>
        <p>이미지1</p>
        <p>이미지2</p>
        <p>이미지3</p>
        <button type="button" onClick={handlePrevImageClick}>이전이미지로</button>
        <p>1/3</p>
        <button type="button" onClick={handlNextImageClick}>다음이미지로</button>
      </div>
      <div>
        <h2>{selectedPlace.name}</h2>
        <p>편의시설</p>
        <p>예약</p>
        <p>주차</p>
        <p>외부음식</p>
        <p>수유실</p>
        <p>주소</p>
        <p>경기도 고양시 일산서구 송포동 1396-43</p>
        <button type="button" onClick={handleAddressCopyClick}>주소복사버튼</button>
        <p>미니 지도 영역</p>
      </div>
    </article>
  );
}
