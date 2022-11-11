import { useEffect } from 'react';

import { userReviewStore } from '../stores/UserReviewStore';

import useForceUpdate from './useForceUpdate';

export default function useUserReviewStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    userReviewStore.subscribe(forceUpdate);

    return () => userReviewStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return userReviewStore;
}
