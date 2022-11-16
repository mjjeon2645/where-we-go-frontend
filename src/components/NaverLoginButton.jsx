import styled from 'styled-components';
import NaverLoginImage from '../images/naver_login.png';

const Button = styled.button`
    overflow: hidden;
    width: 300px;
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
