import styled from 'styled-components';
import KakaoLoginImage from '../images/kakao_login.png';

const Button = styled.button`
    overflow: hidden;
    width: 300px;
`;

export default function KakaoLoginButton({ kakaoLogin }) {
  const handleKakaoLoginClick = () => {
    kakaoLogin();
  };

  return (
    <div>
      <Button type="button" onClick={handleKakaoLoginClick}>
        <img src={KakaoLoginImage} alt="" />
      </Button>
    </div>
  );
}
