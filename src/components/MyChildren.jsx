import styled from 'styled-components';

const Container = styled.article`
  margin-block: 3em;
`;
const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 1em;
`;

export default function MyChildren({ userChildren: children, goToAddChildForm }) {
  console.log(children);

  const handleAddChildInfoClick = () => {
    goToAddChildForm();
  };
  return (
    <Container>
      <Title>아이 정보</Title>
      {children.length === 0 ? (
        <p>아이 정보가 없습니다</p>
      ) : (
        <ul>
          {children.map(
            (child) => (
              <li key={child.id}>
                <p>{child.gender}</p>
                <p>
                  {child.birthday.year}
                  년
                </p>
                <p>
                  {child.birthday.month}
                  월
                </p>
                <p>
                  {child.birthday.day}
                  일
                </p>
              </li>
            ),
          )}
        </ul>
      )}
      <button type="button" onClick={handleAddChildInfoClick}>추가</button>
    </Container>
  );
}
