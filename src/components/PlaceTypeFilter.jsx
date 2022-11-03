export default function PlaceTypeFilter({ handlePlaceTypeClick }) {
  const categories = ['전체', '스포츠/레저', '교육/체험', '숙박/캠핑',
    '전시/공연', '자연', '키즈카페', '키즈존 맛집', '유적지'];

  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <button
            className="placetype"
            type="button"
            onClick={() => handlePlaceTypeClick(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
