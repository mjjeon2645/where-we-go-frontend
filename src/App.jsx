import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import TopThreePage from './pages/TopThreePage';
import MyPage from './pages/MyPage';

import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

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
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <Container>
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/top3" element={<TopThreePage />} />
            <Route path="/myaccount" element={<MyPage />} />
          </Routes>
        </Wrapper>
      </Container>
    </div>
  );
}
