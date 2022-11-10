import { useEffect } from 'react';
import { blogReviewStore } from '../stores/BlogReveiwStore';

import useForceUpdate from './useForceUpdate';

export default function useBlogReviewStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    blogReviewStore.subscribe(forceUpdate);

    return () => blogReviewStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return blogReviewStore;
}
