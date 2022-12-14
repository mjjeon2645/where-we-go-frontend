import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { userApiService } from './services/UserApiService';
import { userReviewApiService } from './services/UserReviewApiService';

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

const data = localStorage.getItem('accessToken');
const accessToken = JSON.parse(data);

userApiService.setAccessToken(accessToken);
userReviewApiService.setAccessToken(accessToken);

root.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
));
