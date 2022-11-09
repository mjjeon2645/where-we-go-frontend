import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  height: 5em;
  bottom: 0;
  width: 600px;
  background-color: #ff9d13;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const Phone = styled.button`
  font-size: 1.1em;
  font-weight: bold;
  color: #FFF;
  margin-inline: 5em;
  background: none;
  border: none;
`;

const HomePage = styled.button`
  font-size: 1.1em;
  font-weight: bold;
  color: #FFF;
  margin-inline: 5em;
  background: none;
  border: none;
`;

export default function PlaceContactBar({ contact }) {
  const handlePlaceContactClick = () => {
    //
  };

  return (
    <Container>
      <div>
        <Phone type="button" onClick={handlePlaceContactClick}>연락하기</Phone>
        <HomePage
          type="button"
          onClick={() => window.open(contact.homepage, '_blank')}
        >
          홈페이지
        </HomePage>
      </div>
    </Container>
  );
}
