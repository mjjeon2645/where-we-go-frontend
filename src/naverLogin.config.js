const naverLoginConfig = {
  apiKey: process.env.REACT_APP_NAVERLOGIN_API,
  redirectUri: process.env.REACT_APP_NAVERLOGIN_REDIRECT_URI,
  naverAuthUrl: process.env.REACT_APP_NAVERLOGIN_REDIRECT_URL,
  stateString: process.env.REACT_APP_NAVERLOGIN_STATE_STRING,
  naverLoginApiBaseUrl: 'https://nid.naver.com/oauth2.0/authorize',
};

export default naverLoginConfig;
