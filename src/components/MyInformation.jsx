/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 1em;
`;

const Wrapper = styled.article`
  padding-inline: 1em;
`;

const Nickname = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  border-top: 1px solid #EEE;

  p:first-child {
    font-weight: bold;
  }

  span {
    color: #6c6c6c;
  }
`;

const NicknameModifyButton = styled.button`
  background-color: #EEE;
  padding: .3em .5em;
  margin-left: 1em;
  border-radius: 4px;
  border: none;
`;

const Email = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  border-block: 1px solid #EEE;

  p:first-child {
    font-weight: bold;
  }

  p:last-child {
    color: #6c6c6c;
  }
`;

const SocialLogin = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  border-bottom: 1px solid #EEE;

  p:first-child {
    font-weight: bold;
  }

  p:last-child {
    color: #6c6c6c;
  }  
`;

export default function MyInformation({ userInformation, goToModifyNickname }) {
  const handleNicknameChangeClick = () => {
    goToModifyNickname();
  };

  return (
    <div>
      {userInformation.length !== 0 ? (
        <>
          <Title>내 정보</Title>
          <Wrapper>
            <Nickname>
              <p>닉네임</p>
              <div>
                <span>{userInformation.nickname}</span>
                <NicknameModifyButton
                  type="button"
                  onClick={handleNicknameChangeClick}
                >
                  변경
                </NicknameModifyButton>
              </div>
            </Nickname>
            <Email>
              <p>이메일</p>
              <p>{userInformation.email}</p>
            </Email>
            <SocialLogin>
              <p>소셜 로그인 정보</p>
              {userInformation.authBy === 'naver' ? (
                <p>네이버 로그인</p>
              ) : (
                userInformation.authBy === 'kakao' ? (
                  <p>카카오 로그인</p>
                ) : (
                  <p>일반 로그인</p>
                )
              )}
            </SocialLogin>
          </Wrapper>
        </>
      ) : (
        <p>now loading...</p>
      )}
    </div>
  );
}
