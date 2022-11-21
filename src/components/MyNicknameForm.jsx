import styled from 'styled-components';

const Label = styled.label`
    display: block;
    margin-bottom: 1em;
`;

const InputArea = styled.input`
    font-size: 1em;
    padding: .4em;
    width: 70%;
    border-radius: 4px;
`;

const Description = styled.p`
    font-size: .8em;
    color: #AAA;
    margin-top: 1em;
    
`;

const Buttons = styled.div`
    text-align: right;
    margin-top: 1em;
    width: 71%;
    
    button {
        margin: .5em;
    }
`;

const SubmitButton = styled.button`
    color: #FFF;
    font-weight: bold;
    background-color: #ff9d13;
    padding: .5em 1em;
    border: none;
    border-radius: 8px;
`;

const CancelButton = styled.button`
    font-weight: bold;
    background-color: #DDD;
    padding: .5em 1em;
    border: none;
    border-radius: 8px;
`;

export default function MyNicknameForm({ modifyNickname, goPrevPage }) {
  const handleNicknameChangeSubmit = (event) => {
    event.preventDefault();
    modifyNickname(event);
  };

  const handleCancelClick = () => {
    goPrevPage();
  };

  return (
    <div>
      <form onSubmit={handleNicknameChangeSubmit}>
        <Label htmlFor="nickname">원하시는 닉네임을 입력해주세요.</Label>
        <InputArea id="nickname" type="text" />
        <Description>3글자 이상 7글자 이하 한글, 영문, 숫자 가능</Description>
        <Buttons>
          <SubmitButton type="submit">변경</SubmitButton>
          <CancelButton type="button" onClick={handleCancelClick}>취소</CancelButton>
        </Buttons>
      </form>
    </div>
  );
}
