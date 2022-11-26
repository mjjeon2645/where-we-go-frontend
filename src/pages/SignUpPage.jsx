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

  const userStore = useUserStore();

  const navigate = useNavigate();

  const { errorMessage } = userStore;

  const signUp = async (event) => {
    const nickname = event.target[0].value;
    const data = await userStore.requestSignUp(nickname);
    if (data.accessToken) {
      userStore.clearError();
      setAccessToken(data.accessToken);
      navigate('/top3');
    }
  };

  return (
    <Container>
      <Title> SignUp</Title>
      <SignUpForm signUp={signUp} errorMessage={errorMessage} />
    </Container>
  );
}
