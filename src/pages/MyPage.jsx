import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import MyBookmarks from '../components/MyBookmarks';
import MyChildren from '../components/MyChildren';
import MyInformation from '../components/MyInformation';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  padding: 3em;
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

  const { userInformation, bookmarks, children: userChildren } = userStore;

  useEffect(() => {
    userStore.fetchUserInformation(userId);
    userStore.fetchBookmarks();
    userStore.fetchChildren(userId);
  }, [userInformation.nickname]);

  const goToModifyNickname = () => {
    userStore.clearError();
    navigate(`/mypage/${userId}/nicknameform`);
  };

  const goToAddChildForm = () => {
    navigate(`/mypage/${userId}/childform`);
  };

  const goPlaceDetailPage = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  const removeBookmark = (placeId) => {
    userStore.toggleBookmark(placeId);
  };

  const deleteChild = async (childId) => {
    await userStore.deleteChild(userId, childId);
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
          <MyChildren
            userChildren={userChildren}
            goToAddChildForm={goToAddChildForm}
            deleteChild={deleteChild}
          />
          <MyBookmarks
            goPlaceDetailPage={goPlaceDetailPage}
            removeBookmark={removeBookmark}
            bookmarks={bookmarks}
          />
        </div>
      ) : (
        <p>now loading...</p>
      )}
    </Container>

  );
}
