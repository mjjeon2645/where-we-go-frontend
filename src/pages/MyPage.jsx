import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import MyBookmarks from '../components/MyBookmarks';
import MyChildren from '../components/MyChildren';
import MyInformation from '../components/MyInformation';
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

export default function MyPage() {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const [userId] = useLocalStorage('userId', '');

  const { userInformation } = userStore;

  useEffect(() => {
    userStore.fetchUserInformation(userId);
  }, [userInformation.nickname]);

  const goToModifyNickname = () => {
    navigate(`/mypage/${userId}/nicknameform`);
  };

  return (
    <Container>
      {userInformation.length !== 0 ? (
        <div>
          <Title>MyPage</Title>
          <MyInformation
            userInformation={userInformation}
            goToModifyNickname={goToModifyNickname}
          />
          <MyChildren />
          <MyBookmarks />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>

  );
}
