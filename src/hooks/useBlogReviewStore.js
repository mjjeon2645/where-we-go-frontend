import useStore from './useStore';

import { blogReviewStore } from '../stores/BlogReviewStore';

export default function useBlogReviewStore() {
  return useStore(blogReviewStore);
}
