import { useState } from 'react';
import styled from 'styled-components';
import Childform from '../components/ChildForm';
import formatDate from '../utils/dateOfVisitFormatter';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
    padding: 3em 3em 1em 3em;
`;

const Title = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 2em;
`;
export default function ChildAddPage() {
  const [date, setDate] = useState(new Date());

  const userStore = useUserStore();

  const userId = document.location.pathname.split('/')[2];

  const setGender = (gender) => {
    userStore.setGender(gender);
  };

  const setBirthday = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = formatDate(selectedDate);
    userStore.setBirthday(formattedDate);
  };

  const addChild = () => {
    userStore.addChild(userId);
  };

  return (
    <Container>
      <Title>아이 정보 입력하기</Title>
      <Childform date={date} setGender={setGender} setBirthday={setBirthday} addChild={addChild} />
    </Container>
  );
}
