import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

export default function UserReviewForm() {
  const [startDate, setStartDate] = useState(new Date());

  const handleUserReviewSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserReviewBodyChange = (event) => {
    //
  };

  return (
    <div>
      <form onSubmit={handleUserReviewSubmit}>
        <div>
          <p>방문일</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko}
            maxDate={addDays(new Date(), 0)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label htmlFor="rate-select">평점</label>
          <select id="rate-select">
            <option selected>⭐️⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️</option>
          </select>
        </div>
        <div>
          <label htmlFor="input-review">한 줄 리뷰</label>
          <textarea
            id="input-review"
            placeholder="최소 10자 이상 적어주세요"
            onChange={handleUserReviewBodyChange}
          />
          <p>/ 50자</p>
        </div>
        <button type="submit">등록하기</button>
      </form>
      <p>욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.</p>
    </div>

  );
}
