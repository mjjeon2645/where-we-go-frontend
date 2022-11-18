import styled from 'styled-components';
import { loadCategoryOptions } from '../utils/filterOptions';

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

export default function PlaceCagetoryFilter({ onCategoryClick, category }) {
  const categories = loadCategoryOptions();

  const handlePlaceCategoryClick = (value) => {
    onCategoryClick(value);
  };

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
