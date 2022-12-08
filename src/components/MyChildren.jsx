import styled from 'styled-components';

const Container = styled.article`
  margin-block: 3em;
  min-height: 10em;
  padding-inline: 2em;
`;
const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 1em;
`;

const NoChildrenMessage = styled.p`
  font-weight: 300;
  text-align: center;
  color: #0e0e0e50;
  margin-top: 3em;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-block: .8em;
`;

const List = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  text-align: center;
  padding-block: .8em;

  button {
    background-color: #EEE;
    border-radius: 4px;
    border: none;
    width: 20%;
  }
`;

const AddButton = styled.button`
  float: right;
  border: none;
  width: 8em;
  height: 3em;
  border-radius: 4px;
  margin-top: 3em;
  color: #8F8272;
  background-color: #E6DDD2;
`;

export default function MyChildren({ userChildren: children, goToAddChildForm, deleteChild }) {
  const handleAddChildInfoClick = () => {
    goToAddChildForm();
  };

  const handleDeleteChildClick = (childId) => {
    deleteChild(childId);
  };
  return (
    <Container>
      <Title>아이 정보</Title>
      {children.length === 0 ? (
        <NoChildrenMessage>아이 정보가 없습니다</NoChildrenMessage>
      ) : (
        <div>
          <Column>
            <p>아이 성별</p>
            <p>아이 생일</p>
          </Column>
          <ul>
            {children.map(
              (child) => (
                <List key={child.id}>
                  <p>{child.gender}</p>
                  <p>{child.birthday}</p>
                  <button type="button" onClick={() => handleDeleteChildClick(child.id)}>X</button>
                </List>
              ),
            )}
          </ul>
        </div>
      )}
      <div>
        <AddButton type="button" onClick={handleAddChildInfoClick}>추가</AddButton>
      </div>
    </Container>
  );
}
