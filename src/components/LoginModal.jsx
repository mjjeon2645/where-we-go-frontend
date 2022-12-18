// import styled from 'styled-components';
// import Modal from 'styled-react-modal';

// const StyledModal = Modal.styled`
//   position: relative;
//   width: 20em;
//   height: 13em;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   padding-block: 2em;

//   background-color: #FFF;
//   border: 1px white solid;
//   border-radius: 8px;
//   `;

// const Title = styled.p`
//     font-size: 1.5em;
//     font-weight: bold;
//     margin-bottom: .6em;
// `;

// const Content = styled.div`
//     text-align: center;
//     p {
//         margin-block: .2em;
//     }
// `;
// const DirectionButtons = styled.div`
//     display: flex;
//     margin-top: 1em;
//   `;

// const CloseButton = styled.button`
//     font-size: 1.2em;
//     color: #BBB;
//     position: absolute;
//     top: 10%;
//     right: 5%;
//     background: none;
//     border: none;
//   `;

// const GoLoginButton = styled.button`
//     font-size: 1em;
//     color: #FFF;
//     background-color: #ff9d13;
//     margin-inline: .3em;
//     padding: .5em .7em;
//     border: none;
//     border-radius: 4px;
//   `;

// const SkipLoginButton = styled.button`
//     font-size: 1em;
//     color: #FFF;
//     background-color: #c4c4c4;
//     margin-inline: .3em;
//     padding: .5em .9em;
//     border: none;
//     border-radius: 4px;
//   `;

// export default function LoginModal({ isLoginModalOpen, toggleModal, goToMainPage }) {
//   const toggleLoginModal = () => {
//     toggleModal();
//   };

//   const handleGoToLoginClick = () => {
//     toggleModal();
//   };

//   const handleLoginSkipClick = () => {
//     goToMainPage();
//   };

//   return (
//     <StyledModal
//       isOpen={isLoginModalOpen}
//       onBackgroundClick={toggleLoginModal}
//       onEscapeKeydown={toggleLoginModal}
//     >
//       <Title>앗!</Title>
//       <Content>
//         <p>지금 로그인하시면</p>
//         <p>아이와 함께 추억을 쌓을 수 있는 </p>
//         <p>멋진 장소를 추천 받을 수 있어요.</p>
//       </Content>
//       <CloseButton type="button" onClick={toggleLoginModal}>X</CloseButton>
//       <DirectionButtons>
//         <GoLoginButton type="button" onClick={handleGoToLoginClick}>로그인할게요</GoLoginButton>
//         <SkipLoginButton type="button" onClick={handleLoginSkipClick}>둘러볼게요</SkipLoginButton>
//       </DirectionButtons>
//     </StyledModal>
//   );
// }
