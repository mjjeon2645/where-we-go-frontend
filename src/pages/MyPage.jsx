import { useEffect } from 'react';
import useUserReviewStore from '../hooks/useUserReviewStore';

export default function MyPage() {
  const userReviewStore = useUserReviewStore();

  useEffect(() => {
    userReviewStore.fetchUserReviews(0);
  }, []);

  return (
    <div>
      My Page
    </div>
  );
}
