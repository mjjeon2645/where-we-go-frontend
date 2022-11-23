import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

export default function Childform({
  date, setGender, setBirthday, addChild,
}) {
  const handleChildAddSubmit = (event) => {
    event.preventDefault();
    addChild(event);
  };

  const handleGenderChange = (event) => {
    const { value } = event.target;
    setGender(value);
  };

  const handleSetDate = (selectedDate) => {
    setBirthday(selectedDate);
  };

  return (
    <form onSubmit={handleChildAddSubmit}>
      <div>
        <label htmlFor="gender">성별을 선택해주세요</label>
        <select id="gender" onChange={handleGenderChange}>
          <option selected disabled hidden>선택</option>
          <option>왕자님</option>
          <option>공주님</option>
          <option>아직 몰라요</option>
        </select>
      </div>
      <div>
        <p>생일(또는 예정일)을 입력해주세요</p>
        <DatePicker
          selected={date}
          onChange={handleSetDate}
          locale={ko}
          maxDate={addDays(new Date(), 300)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button type="submit">완료</button>
    </form>
  );
}
