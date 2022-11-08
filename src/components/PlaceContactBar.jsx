export default function PlaceContactBar() {
  const handlePlaceContactClick = () => {
    //
  };

  return (
    <div>
      <button type="button" onClick={handlePlaceContactClick}>연락하기</button>
      <button
        type="button"
        onClick={() => window.open('https://megaptera.kr/', '_blank')}
      >
        홈페이지
      </button>
    </div>
  );
}
