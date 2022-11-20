import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../hooks/useUserStore';

export default function NaverLoginRedirectPage() {
  const userStore = useUserStore();

  const navigate = useNavigate();

  const authorizationCode = new URL(window.location.href).searchParams.get('code');

  const { accessToken } = userStore;

  useEffect(() => {
    userStore.sendNaverAuthorizationCode(authorizationCode);
    navigate('/myaccount');
  }, []);

  return (
    <p>naver redirect!</p>
  );
}
