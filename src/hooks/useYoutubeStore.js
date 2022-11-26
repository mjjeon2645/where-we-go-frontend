import { youtubeStore } from '../stores/YoutubeStore';
import useStore from './useStore';

export default function useYoutubeStore() {
  return useStore(youtubeStore);
}
