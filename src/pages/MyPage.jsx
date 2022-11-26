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

  const { userInformation, bookmarks, children: userChildren } = userStore;

  useEffect(() => {
    console.log('click');
    userStore.fetchUserInformation();
    userStore.fetchChildren();
    userStore.fetchBookmarks();
  }, [userInformation.nickname]);

  const goToModifyNickname = () => {
    userStore.clearError();
    navigate('/mypage/nicknameform');
  };

  const goToAddChildForm = () => {
    navigate('/mypage/childform');
  };

  const deleteChild = async (childId) => {
    await userStore.deleteChild(childId);
  };

  const goPlaceDetailPage = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  const removeBookmark = (placeId) => {
    userStore.toggleBookmark(placeId);
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
