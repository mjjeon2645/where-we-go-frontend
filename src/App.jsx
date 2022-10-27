import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import { Reset } from 'styled-reset';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import MyPage from './pages/MyPage';
import TopThreePage from './pages/TopThreePage';

import NavigationBar from './components/NavigationBar';
import GlobalStyle from './styles/GlobalStyle';

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default function App() {
  return (
    <Wrapper>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/top3" element={<TopThreePage />} />
        <Route path="/myaccount" element={<MyPage />} />
      </Routes>
      <NavigationBar />
    </Wrapper>
  );
}
