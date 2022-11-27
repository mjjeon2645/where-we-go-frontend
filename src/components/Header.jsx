/* eslint-disable no-nested-ternary */
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

const Trial = styled.button`
  font-size: 1em;
  color: #FFF;
  background-color: #4135bb;
  border: none;
  border-radius: 4px;
  padding: .5em;
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
      navigate('/mypage');
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
    userStore.clearUserState();
    navigate('/login');
  };

  const handleStopTrialModeClick = () => {
    setAccessToken('');
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
            {accessToken === 'trial' ? (
              <li>
                <Trial type="button" onClick={handleStopTrialModeClick}>⭐️체험종료⭐️</Trial>
              </li>
            ) : (
              !accessToken ? (
                <li>
                  <Login type="button" onClick={handleLoginClick}>로그인</Login>
                </li>
              ) : (
                <li>
                  <Logout type="button" onClick={handleLogoutClick}>로그아웃</Logout>
                </li>
              ))}
          </List>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
