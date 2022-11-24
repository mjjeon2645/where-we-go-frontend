import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const userStore = useUserStore();
  const { errorMessage } = userStore;

  const userId = document.location.pathname.split('/')[2];

  const setGender = (gender) => {
    userStore.setGender(gender);
  };

  const setBirthday = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = formatDate(selectedDate);
    userStore.setBirthday(formattedDate);
  };

  const addChild = async () => {
    const data = await userStore.addChild(userId);
    if (data) {
      userStore.clearError();
      userStore.clearAddChildState();
      navigate('/mypage/userId');
    }
  };

  const goBackPrevPage = () => {
    userStore.clearError();
    userStore.clearAddChildState();
    navigate(-1);
  };

  return (
    <Container>
      <Title>아이 정보 입력하기</Title>
      <Childform
        date={date}
        errorMessage={errorMessage}
        setGender={setGender}
        setBirthday={setBirthday}
        addChild={addChild}
        goBackPrevPage={goBackPrevPage}
      />
    </Container>
  );
}
