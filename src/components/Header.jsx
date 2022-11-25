import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';
import { useState } from 'react';
import useUserStore from '../hooks/useUserStore';
import UnauthorizedAccessModal from './UnauthorizedAccessModal';

const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: #FFF;
  border-bottom: 1px solid #EEE;
`;

const Wrapper = styled.div`
  padding-inline: calc((100% - 400px) / 2);
  vertical-align: middle;
`;

const Navigation = styled.nav`
    left: 0;
    right: 0;
    bottom: 0;
    height: 4em;
`;

const List = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const MyMenu = styled.button`
  font-size: 1em;
  background: none;
  border: none;
`;

const Login = styled.button`
  font-size: 1em;
  color: #ff9d13;
  background: none;
  border: none;
`;

const Logout = styled.button`
  font-size: 1em;
  background: none;
  border: none;
`;

export default function Header() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [userId, setUserId] = useLocalStorage('userId', '');

  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const navigate = useNavigate();
  const userStore = useUserStore();

  const toggleModal = () => {
    setIsAccessModalOpen(!isAccessModalOpen);
  };

  const goToLogin = () => {
    navigate('/login');
    setAccessToken('');
  };

  const handleMyPageClick = () => {
    if (accessToken !== 'temporaryAccessToken' && accessToken) {
      navigate(`/mypage/${userId}`);
      return;
    }
    toggleModal();
  };

  const handleLoginClick = () => {
    setAccessToken('');
    navigate('/login');
  };

  const handleLogoutClick = () => {
    setAccessToken('');
    setUserId('');
    userStore.clearUserState();
    navigate('/login');
  };

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <List>
            <li>
              <Link to="/map">장소 검색</Link>
            </li>
            <li>
              <Link to="/top3">Top 3</Link>
            </li>
            <li>
              <MyMenu type="button" onClick={handleMyPageClick}>MyPage</MyMenu>
              <UnauthorizedAccessModal
                isAccessModalOpen={isAccessModalOpen}
                toggleModal={toggleModal}
                goToLogin={goToLogin}
              />
            </li>
            {!accessToken || accessToken === 'temporaryAccessToken' ? (
              <li>
                <Login type="button" onClick={handleLoginClick}>로그인</Login>
              </li>
            ) : (
              <li>
                <Logout type="button" onClick={handleLogoutClick}>로그아웃</Logout>
              </li>
            )}
          </List>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
