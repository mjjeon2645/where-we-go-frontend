import styled from 'styled-components';
import KakaoLoginImage from '../images/kakao_login.png';

const Button = styled.button`
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
      <Button type="button" onClick={handleKakaoLoginClick}>
        <img src={KakaoLoginImage} alt="" />
      </Button>
    </div>
  );
}
