import styled from 'styled-components';

const Container = styled.article`
  margin: 3em 1em;
`;

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
`;

const CategorySection = styled.section`
  background-color: #f6f6f6;
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CategoryOption = styled.button`
  background-color: #FFF;
  border: 1px solid #DDD;
  border-radius: 15px;
  padding: .6em 3em;
  margin: .3em 1em;
  width: 90%;
`;

export default function PlaceCagetoryFilter({ handlePlaceCategoryClick, category }) {
  const categories = [
    { id: 1, category: '전체', selected: false },
    { id: 2, category: '스포츠/레저', selected: false },
    { id: 3, category: '교육/체험', selected: false },
    { id: 4, category: '숙박/캠핑', selected: false },
    { id: 5, category: '전시/공연', selected: false },
    { id: 6, category: '자연', selected: false },
    { id: 7, category: '키즈카페', selected: false },
    { id: 8, category: '키즈존 맛집', selected: false },
    { id: 9, category: '유적지', selected: false },
  ];

  return (
    <Container>
      <Title>어떤 곳을 원하세요?</Title>
      <CategorySection>
        <ul>
          {categories.map((value) => (
            <li key={value.id}>
              <CategoryOption
                className="category"
                type="button"
                onClick={() => handlePlaceCategoryClick(value)}
                isSelected={value.selected}
                style={category === value.category ? { color: '#FFF', background: '#FFA200' } : { backgroundColor: '#FFF' }}
              >
                {value.category}
              </CategoryOption>
            </li>
          ))}
        </ul>
      </CategorySection>
    </Container>
  );
}
