import React, { useEffect, useState } from 'react';
import UserReviewForm from '../components/UserReviewForm';
import useUserReviewStore from '../hooks/useUserReviewStore';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function MyPage() {
  const userReviewStore = useUserReviewStore();

  useEffect(() => {
    userReviewStore.fetchUserReviews(0);
  }, []);

  return (
    <div>
      My Page
      <UserReviewForm />
    </div>
  );
}
