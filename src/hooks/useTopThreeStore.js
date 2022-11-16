import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import { topThreeStore } from '../stores/TopThreeStore';

export default function useTopThreeStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    topThreeStore.subscribe(forceUpdate);

    return () => topThreeStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return topThreeStore;
}
