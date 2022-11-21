import styled from 'styled-components';

const Container = styled.form`
`;

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

const SubmitButton = styled.button`
    color: #FFF;
    font-weight: bold;
    background-color: #ff9d13;
    padding: .5em 1em;
    margin-top: 6%;
    margin-left: 50%;
    border: none;
    border-radius: 8px;
`;

export default function SignUpForm({ signUp }) {
  const handleMakingNicknameSubmit = (event) => {
    event.preventDefault();
    signUp(event);
  };

  return (
    <Container onSubmit={handleMakingNicknameSubmit}>
      <Label htmlFor="nickname">원하시는 닉네임을 입력해주세요.</Label>
      <InputArea id="nickname" type="text" />
      <Description>3글자 이상 7글자 이하 한글, 영문, 숫자 가능</Description>
      <SubmitButton type="submit">닉네임 만들기</SubmitButton>
    </Container>
  );
}
