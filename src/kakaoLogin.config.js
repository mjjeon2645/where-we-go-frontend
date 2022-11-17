const kakaoLoginConfig = {
  apiKey: process.env.REACT_APP_KAKAOLOGIN_API,
  redirectUri: process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI,
  kakaoAuthUrl: process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URL,
  kakaoLoginApiBaseUrl: 'https://kauth.kakao.com',
};

export default kakaoLoginConfig;
