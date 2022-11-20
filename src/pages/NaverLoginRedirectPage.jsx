import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';

export default function NaverLoginRedirectPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');
  const userStore = useUserStore();

  const navigate = useNavigate();

  const authorizationCode = new URL(window.location.href).searchParams.get('code');

  async function getLoginResult() {
    const data = await userStore.sendNaverAuthorizationCode(authorizationCode);
    const { accessToken, state } = data;
    if (state === 'unregistered') {
      navigate('/signup');
      return;
    }

    setAccessToken(accessToken);
    navigate('/top3');
  }

  useEffect(() => {
    getLoginResult();
  }, []);

  return (
    <p>로그인 중입니다.</p>
  );
}
