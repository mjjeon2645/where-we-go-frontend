import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyNicknameForm from '../components/MyNicknameForm';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
    padding: 3em 3em 1em 3em;
`;

const Title = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 2em;
`;

export default function MyNicknameChangePage() {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const modifyNickname = (text) => {
    userStore.changeNickname(text);
  };

  const goPrevPage = () => {
    userStore.clearChangedNickname();
    navigate(-1);
  };

  return (
    <Container>
      <Title>닉네임 변경하기</Title>
      <MyNicknameForm modifyNickname={modifyNickname} goPrevPage={goPrevPage} />
    </Container>
  );
}
