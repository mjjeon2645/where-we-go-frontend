import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import styled from 'styled-components';

const DateOfVisitSection = styled.div`
  display: flex;
  align-items: center;
  padding-block: .7em;

  p {
    width: 80px;
    font-weight: bold;
  }
`;

const RateSection = styled.div`
  display: flex;
  align-items: center;
  padding-block: .7em;

  label {
    width: 70px;
    font-weight: bold;
  }
`;

const WritingSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: .7em;

  label {
    font-weight: bold;
    margin-bottom: .5em;
  }

  textarea {
    width: 70%;
    resize: none;
  }

  p {
    font-size: .9em;
    margin-top: .5em;
    text-align: right;
    margin-right: 11em;
  }
`;

const Buttons = styled.div`
  text-align: right;
  margin-top: 1em;
  margin-right: 8.5em;

  button {
    font-size: .9em;
    padding: .5em 1em;
    border: none;
    border-radius: 8px;
    margin-inline: 1em;
  }

  button:first-child {
    color: #FFF;
    background-color: #ff9d13;
  }

  button:last-child {
    background-color: #f7f7f7;
  }
`;

const Message = styled.p`
  margin-top: 3em;
  font-size: .8em;
`;

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
        <DateOfVisitSection>
          <p>방문일</p>
          <DatePicker
            selected={startDate}
            onChange={handleSetStartDate}
            locale={ko}
            maxDate={addDays(new Date(), 0)}
            dateFormat="yyyy-MM-dd"
          />
        </DateOfVisitSection>
        <RateSection>
          <label htmlFor="rate-select">평점</label>
          <select id="rate-select" onChange={handleRateChange}>
            <option defaultValue hidden>선택</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️</option>
          </select>
        </RateSection>
        <WritingSection>
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
        </WritingSection>
        <Buttons>
          <button type="submit">등록하기</button>
          <button type="button" onClick={handleCancelWritingClick}>취소하기</button>
        </Buttons>
      </form>
      <Message>욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.</Message>
    </div>
  );
}
