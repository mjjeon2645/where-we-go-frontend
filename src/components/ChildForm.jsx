import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import styled from 'styled-components';

const GenderSection = styled.section`
  padding-block: 1em;
`;
const Label = styled.label`
  font-size: 1em;
  font-weight: bold;
  display: block;
  margin-bottom: .5em;
`;

const Select = styled.select`
  font-size: 1em;
  padding: .5em .3em;
  border-radius: 4px;
  width: 30%;
`;

const BirthdaySection = styled.section`
  padding-block: 1em;
`;

const BirthdayLabel = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: .5em;
`;

const BDatePicker = styled(DatePicker)`
  font-size: 1em;
  padding: .5em;
  border-radius: 4px;
`;

const Error = styled.p`
  color: #ff0000;
`;

const Buttons = styled.div`
  text-align: right;
  margin-top: 2em;
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

export default function Childform({
  date, errorMessage, setGender, setBirthday, addChild, goBackPrevPage,
}) {
  const handleChildAddSubmit = (event) => {
    event.preventDefault();
    addChild();
  };

  const handleGenderChange = (event) => {
    const { value } = event.target;
    setGender(value);
  };

  const handleSetDate = (selectedDate) => {
    setBirthday(selectedDate);
  };

  const handleCancelClick = () => {
    goBackPrevPage();
  };

  return (
    <form onSubmit={handleChildAddSubmit}>
      <GenderSection>
        <Label htmlFor="gender">성별을 선택해주세요</Label>
        <Select id="gender" onChange={handleGenderChange}>
          <option selected disabled hidden>선택</option>
          <option>왕자님</option>
          <option>공주님</option>
          <option>아직 몰라요</option>
        </Select>
      </GenderSection>
      <BirthdaySection>
        <BirthdayLabel>생일(또는 예정일)을 입력해주세요</BirthdayLabel>
        <BDatePicker
          selected={date}
          onChange={handleSetDate}
          locale={ko}
          maxDate={addDays(new Date(), 300)}
          dateFormat="yyyy-MM-dd"
        />
      </BirthdaySection>
      {errorMessage && (
        <Error>{errorMessage}</Error>
      )}
      <Buttons>
        <button type="submit">완료</button>
        <button type="button" onClick={handleCancelClick}>취소</button>
      </Buttons>
    </form>
  );
}
