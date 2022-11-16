import styled from 'styled-components';
import NaverLoginImage from '../images/naver_login.png';

const Button = styled.button`
    overflow: hidden;
    width: 210px;
    border: none;
    background-color: transparent;

    img {
        width: 200px;
        object-fit: cover;
    }
`;

export default function NaverLoginButton({ naverLogin }) {
  const handleNaverLoginClick = () => {
    naverLogin();
  };

  return (
    <div>
      <Button type="button" onClick={handleNaverLoginClick}>
        <img src={NaverLoginImage} alt="" />
      </Button>
    </div>
  );
}
