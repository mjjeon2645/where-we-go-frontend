import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  position: relative;
  width: 20em;
  height: 13em;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block: 2.5em;

  background-color: #FFF;
  border: 1px white solid;
  border-radius: 8px;

  p:first-child {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }

//   button {
//     font-size: 1.2em;
//     color: #BBB;
//     position: absolute;
//     top: 10%;
//     right: 5%;
//     background: none;
//     border: none;
//   }
  `;

const CloseButton = styled.button`
     font-size: 1.2em;
    color: #BBB;
    position: absolute;
    top: 10%;
    right: 5%;
    background: none;
    border: none;
  `;

const GoLoginButton = styled.button`

  `;

const SkipLoginButton = styled.button`

  `;

export default function LoginModal({ isLoginModalOpen, toggleModal }) {
  const toggleLoginModal = () => {
    toggleModal();
  };

  const handleGoToLoginClick = () => {
    //
  };

  const handleLoginSkipClick = () => {
    //
  };

  return (
    <StyledModal
      isOpen={isLoginModalOpen}
      onBackgroundClick={toggleLoginModal}
      onEscapeKeydown={toggleLoginModal}
    >
      <p>앗!</p>
      <p>지금 로그인하시면</p>
      <p>아이와 함께 추억을 쌓을 수 있는 </p>
      <p>멋진 장소를 추천 받을 수 있어요.</p>
      <CloseButton type="button" onClick={toggleLoginModal}>X</CloseButton>
      <GoLoginButton type="button" onClick={handleGoToLoginClick}>로그인할게요</GoLoginButton>
      <SkipLoginButton type="button" onClick={handleLoginSkipClick}>둘러볼게요</SkipLoginButton>
    </StyledModal>
  );
}
