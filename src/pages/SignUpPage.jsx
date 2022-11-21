import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import SignUpForm from '../components/SignUpForm';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  padding: 3em 3em 0 3em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  color: #ff9d13;
  margin-bottom: 1.5em;
`;

export default function SignUpPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');
  const [, setUserId] = useLocalStorage('userId', '');
  const userStore = useUserStore();

  const navigate = useNavigate();

  const userId = document.location.pathname.split('/')[2];

  const signUp = async (nickname) => {
    const data = await userStore.requestSignUp(userId, nickname);
    if (data.accessToken) {
      setAccessToken(data.accessToken);
      setUserId(userId);
      navigate('/top3');
    }
  };

  return (
    <Container>
      <Title> SignUp</Title>
      <SignUpForm signUp={signUp} />
    </Container>
  );
}
