import styled from 'styled-components';

import Modal from 'styled-react-modal';

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

const StyledModal = Modal.styled`
  position: relative;
  width: 20em;
  height: 13em;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block: 3.5em;

  background-color: #FFF;
  border: 1px white solid;
  border-radius: 8px;

  p:first-child {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1.3em;
  }

  button {
    font-size: 1.2em;
    color: #BBB;
    position: absolute;
    top: 10%;
    right: 5%;
    background: none;
    border: none;
  }
`;

export default function PlaceContactBar({
  contact, toggleContactModal, isContactModalOpen, handlePlaceContactClick,
}) {
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
        <StyledModal
          isOpen={isContactModalOpen}
          onBackgroundClick={toggleContactModal}
          onEscapeKeydown={toggleContactModal}
        >
          <p>연락처 안내</p>
          <p>{contact.phone}</p>
          <button type="button" onClick={toggleContactModal}>X</button>
        </StyledModal>
      </div>
    </Container>
  );
}
