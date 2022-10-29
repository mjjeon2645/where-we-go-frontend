import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import { mapStore } from '../stores/MapStore';

export default function useMapStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    mapStore.subscribe(forceUpdate);

    return () => mapStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return mapStore;
}
