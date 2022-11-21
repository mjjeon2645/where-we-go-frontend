import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import kakaoLoginConfig from '../kakaoLogin.config';
import naverLoginConfig from '../naverLogin.config';

import SkipLoginButton from '../components/SkipLoginButton';

import KakaoLoginImage from '../images/kakao_login.png';
import NaverLoginImage from '../images/naver_login.png';

const Container = styled.div`
    padding: 5em 3em 0 3em;
    text-align: center;
`;

const ImagesArea = styled.div`
    display: flex;
    justify-content: center;
    margin: 3em 0 5em 0;
`;

const ImageBox = styled.div`
    width: 150px;
    height: 150px;

    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`;

const Title = styled.h2`
    font-size: 2em;
    font-weight: bold;
`;

const Text = styled.div`
    padding-block: 1em;

    p {
        margin-block: .6em;
    }
`;

const LoginButtonsArea = styled.div`
    margin-top: 3em;
`;

const NaverLogin = styled.a`
    overflow: hidden;
    width: 210px;
    border: none;
    background-color: transparent;
    margin-block: .5em;

    img {
        width: 200px;
        object-fit: cover;
    }
`;

const KakaoLogin = styled.a`
    overflow: hidden;
    width: 210px;
    border: none;
    background-color: transparent;
    margin-block: .5em;

    img {
        width: 200px;
        object-fit: cover;
    }
`;

export default function LoginPage() {
  const image1Url = 'https://user-images.githubusercontent.com/104840243/202307825-d3db56b2-0e2f-4192-88b9-bd334f993533.jpeg';
  const image2Url = 'https://user-images.githubusercontent.com/104840243/202307837-4d04ec6e-5fb6-4387-931e-d4a0f94551f8.jpeg';
  const image3Url = 'https://user-images.githubusercontent.com/104840243/202307841-af59dc47-cc70-4630-b137-a13d20d3d56e.jpeg';

  const navigate = useNavigate();

  const skipLogin = () => {
    navigate('/top3');
  };

  return (
    <Container>
      <ImagesArea>
        <ImageBox>
          <img src={image1Url} alt="" />
        </ImageBox>
        <ImageBox>
          <img src={image2Url} alt="" />
        </ImageBox>
        <ImageBox>
          <img src={image3Url} alt="" />
        </ImageBox>
      </ImagesArea>
      <Title>아빠! 오늘은 어디가요?</Title>
      <Text>
        <p>사랑스러운 우리 아이를 위해</p>
        <p>기억에 남을 멋진 장소를 추천해 드릴게요.</p>
        <p>이제 넉넉한 마음만 준비하세요 :&#41;</p>
      </Text>
      <LoginButtonsArea>
        <div>
          <NaverLogin href={naverLoginConfig.naverAuthUrl}>
            <img id="naver-login" src={NaverLoginImage} alt="" />
          </NaverLogin>
        </div>
        <div>
          <KakaoLogin href={kakaoLoginConfig.kakaoAuthUrl}>
            <img id="kakao-login" src={KakaoLoginImage} alt="" />
          </KakaoLogin>
        </div>
        <SkipLoginButton skipLogin={skipLogin} />
      </LoginButtonsArea>
    </Container>
  );
}
