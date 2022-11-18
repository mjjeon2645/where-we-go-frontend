import { mapStore } from '../stores/MapStore';

import useStore from './useStore';

export default function useMapStore() {
  return useStore(mapStore);
}
