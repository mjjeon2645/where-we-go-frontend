import { useEffect } from 'react';
import useUserStore from '../hooks/useUserStore';

export default function KakaoLoginRedirectPage() {
  const userStore = useUserStore();

  const authorizationCode = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    userStore.sendKakaoAuthorizationCode(authorizationCode);
  }, []);

  return (
    <p>kakao redirect!</p>
  );
}
