import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { Reset } from 'styled-reset';

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import TopThreePage from './pages/TopThreePage';
import MyPage from './pages/MyPage';

import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceBlogReviewPage from './pages/PlaceBlogReviewPage';
import PlaceUserReviewPage from './pages/PlaceUserReviewPage';
import WritingReviewPage from './pages/WritingReviewPage';
import LoginPage from './pages/LoginPage';
import KakaoLoginRedirectPage from './pages/KakaoLoginRedirectPage';
import NaverLoginRedirectPage from './pages/NaverLoginRedirectPage';
import MyNicknameChangePage from './pages/MyNicknameChangePage';
import SignUpPage from './pages/SignUpPage';
import { userApiService } from './services/UserApiService';
import ChildAddPage from './pages/ChildAddPage';
import { userReviewApiService } from './services/UserReviewApiService';
import YoutubePlayerPage from './pages/YoutubePlayerPage';
import { topThreeApiService } from './services/TopThreeApiService';

const Container = styled.div`
  background-color: #F0F2F5;
  padding-inline: calc((100% - 600px) / 2);
  padding-bottom: 3em;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding-top: 4em;
  background-color: #ffffff;
`;

export default function App() {
  const [accessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    userApiService.setAccessToken(accessToken);
    userReviewApiService.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <div>
      <Reset />
      <GlobalStyle />
      <div>
        <ModalProvider>
          {accessToken && (
            <Header />
          )}
          <Container>
            <Wrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="places/:id" element={<PlaceDetailPage />} />
                <Route path="places/:id/blog-review" element={<PlaceBlogReviewPage />} />
                <Route path="places/:id/user-review" element={<PlaceUserReviewPage />} />
                <Route path="places/:id/write" element={<WritingReviewPage />} />
                <Route path="/top3" element={<TopThreePage />} />
                <Route path="/video" element={<YoutubePlayerPage />} />
                <Route path="/mypage/:id" element={<MyPage />} />
                <Route path="/mypage/:id/nicknameform" element={<MyNicknameChangePage />} />
                <Route path="/mypage/:id/childform" element={<ChildAddPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup/:id" element={<SignUpPage />} />
                <Route path="/oauth/callback/kakao" element={<KakaoLoginRedirectPage />} />
                <Route path="/oauth/callback/naver" element={<NaverLoginRedirectPage />} />
              </Routes>
            </Wrapper>
          </Container>
        </ModalProvider>
      </div>
    </div>
  );
}
