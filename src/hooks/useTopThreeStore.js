import { topThreeStore } from '../stores/TopThreeStore';

import useStore from './useStore';

export default function useTopThreeStore() {
  return useStore(topThreeStore);
}
