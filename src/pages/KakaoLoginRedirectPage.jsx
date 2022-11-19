import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../hooks/useUserStore';

export default function KakaoLoginRedirectPage() {
  const userStore = useUserStore();

  const navigate = useNavigate();

  const authorizationCode = new URL(window.location.href).searchParams.get('code');

  const { accessToken } = userStore;

  useEffect(() => {
    userStore.sendKakaoAuthorizationCode(authorizationCode);
    navigate('/myaccount');
  }, []);

  return (
    <p>kakao redirect!</p>
  );
}
