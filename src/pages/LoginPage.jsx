import styled from 'styled-components';
import KakaoLoginButton from '../components/KakaoLoginButton';
import NaverLoginButton from '../components/NaverLoginButton';
import SkipLoginButton from '../components/SkipLoginButton';

const Container = styled.div`
    padding: 5em 3em 0 3em;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2em;
    font-weight: bold;
`;

const Text = styled.div`
    padding-block: 2em;

    p {
        margin-block: .6em;
    }
`;

export default function LoginPage() {
  const naverLogin = () => {
    //
  };

  const kakaoLogin = () => {

  };

  const skipLogin = () => {
    //
  };

  return (
    <Container>
      <Title>아빠! 오늘은 어디가요?</Title>
      <Text>
        <p>사랑스러운 우리 아이를 위해</p>
        <p>기억에 남을 멋진 장소를 추천해 드릴게요.</p>
        <p>이제 넉넉한 마음만 준비하세요 :&#41;</p>
      </Text>
      <NaverLoginButton naverLogin={naverLogin} />
      <KakaoLoginButton kakaoLogin={kakaoLogin} />
      <SkipLoginButton skipLogin={skipLogin} />
    </Container>
  );
}
