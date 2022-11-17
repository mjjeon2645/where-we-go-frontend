import styled from 'styled-components';
import KakaoLoginImage from '../images/kakao_login.png';
import kakaoLoginConfig from '../kakaoLogin.config';

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

export default function KakaoLoginButton({ kakaoLogin }) {
  const handleKakaoLoginClick = () => {
    kakaoLogin();
  };

  return (
    <div>
      <KakaoLogin href={kakaoLoginConfig.kakaoAuthUrl}>
        <img src={KakaoLoginImage} alt="" />
      </KakaoLogin>
      {/* <Button type="button" onClick={handleKakaoLoginClick}>
        <img src={KakaoLoginImage} alt="" />
      </Button> */}
    </div>
  );
}
