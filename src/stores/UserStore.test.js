import UserStore from './UserStore';

const context = describe;

describe('UserStore', () => {
  let userStore;

  beforeEach(() => {
    userStore = new UserStore();
  });

  context('a user clicks kakao login icon', () => {
    it('send kakao authorization code', () => {
      userStore.sendKakaoAuthorizationCode('code');
    });
  });
});
