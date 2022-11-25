import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  position: relative;
  width: 20em;
  height: 13em;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block: 2em;

  background-color: #FFF;
  border: 1px white solid;
  border-radius: 8px;
  `;

const Title = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: .6em;
`;

const Content = styled.div`
    text-align: center;
    p {
        margin-block: .2em;
    }
`;
const DirectionButtons = styled.div`
    display: flex;
    margin-top: 1em;
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
    font-size: 1em;
    color: #FFF;
    background-color: #ff9d13;
    margin-inline: .3em;
    padding: .5em .7em;
    border: none;
    border-radius: 4px;
  `;

export default function UnauthorizedAccessModal({
  isAccessModalOpen, toggleModal, goToLogin,
}) {
  const toggleLoginModal = () => {
    toggleModal();
  };

  const handleGoToLoginClick = () => {
    goToLogin();
  };

  return (
    <StyledModal
      isOpen={isAccessModalOpen}
      onBackgroundClick={toggleLoginModal}
      onEscapeKeydown={toggleLoginModal}
    >
      <Title>앗!</Title>
      <Content>
        <p>회원분들께 제공되는 정보예요.</p>
        <p>아빠! 오늘 어디가요와 함께 </p>
        <p>멋진 장소를 찾으러 떠나볼까요?</p>
      </Content>
      <CloseButton type="button" onClick={toggleLoginModal}>X</CloseButton>
      <DirectionButtons>
        <GoLoginButton type="button" onClick={handleGoToLoginClick}>로그인 하러가기</GoLoginButton>
      </DirectionButtons>
    </StyledModal>
  );
}
