import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { loadKakaoMap } from '../utils/KakaoMap';

const Map = styled.div`
  width: 50%;
  height: 50vw;
`;

export default function MapPage() {
  const kakaoMap = useRef(null);

  useEffect(() => {
    loadKakaoMap(kakaoMap);
  }, []);

  return (
    <div>
      <h1>
        Map Page
      </h1>
      <div>
        <p>지도</p>
        <Map ref={kakaoMap} />
      </div>
    </div>
  );
}
