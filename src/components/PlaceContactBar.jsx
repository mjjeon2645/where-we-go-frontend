export default function PlaceContactBar({ contact }) {
  const handlePlaceContactClick = () => {
    //
  };

  return (
    <div>
      <button type="button" onClick={handlePlaceContactClick}>연락하기</button>
      <button
        type="button"
        onClick={() => window.open(contact.homepage, '_blank')}
      >
        홈페이지
      </button>
    </div>
  );
}
