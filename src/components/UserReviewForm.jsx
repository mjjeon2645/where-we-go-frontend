import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

export default function UserReviewForm({
  writeReview, setDateOfVisit, setRate, setMyReview, cancelWriting, startDate, myReview,
}) {
  const handleUserReviewSubmit = (event) => {
    event.preventDefault();

    writeReview(event);
  };

  const handleSetStartDate = (date) => {
    setDateOfVisit(date);
  };

  const handleRateChange = (event) => {
    const selectedRate = event.target.value;
    setRate(selectedRate);
  };

  const handleReviewChange = (event) => {
    const body = event.target.value;
    setMyReview(body);
  };

  const handleCancelWritingClick = () => {
    cancelWriting();
  };

  return (
    <div>
      <form onSubmit={handleUserReviewSubmit}>
        <div>
          <p>방문일</p>
          <DatePicker
            selected={startDate}
            onChange={handleSetStartDate}
            locale={ko}
            maxDate={addDays(new Date(), 0)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label htmlFor="rate-select">평점</label>
          <select id="rate-select" onChange={handleRateChange}>
            <option defaultValue hidden>선택</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
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
            cols="30"
            rows="5"
            minLength="10"
            maxLength="50"
            onChange={handleReviewChange}
          />
          <p>
            {myReview.length || 0}
            {' '}
            / 50자
          </p>
        </div>
        <button type="submit">등록하기</button>
        <button type="button" onClick={handleCancelWritingClick}>취소하기</button>
      </form>
      <p>욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.</p>
    </div>
  );
}
