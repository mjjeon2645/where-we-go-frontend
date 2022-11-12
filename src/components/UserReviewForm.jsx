import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function UserReviewForm() {
  const [startDate, setStartDate] = useState(new Date());

  const handleUserReviewSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserReviewBodyChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  return (
    <form onSubmit={handleUserReviewSubmit}>
      <label htmlFor="input-date">방문일</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      <p>평점</p>
      <label htmlFor="input-review">한 줄 리뷰</label>
      <textarea
        id="input-review"
        placeholder="최소 10자 이상 적어주세요"
        onChange={handleUserReviewBodyChange}
      />
      <p>/ 50자</p>
      <button type="submit">등록하기</button>
      <p>욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.</p>
    </form>
  );
}
