Feature('Map Page');

Scenario('#1. 사용자가 장소를 검색하기 위해 장소 검색 페이지에 접속', ({ I }) => {
  // Given
  I.setupPlaces();
  I.amOnPage('/');

  // When
  I.click('장소 검색');

  // Then
  I.see('필터 조건을 설정해주세요');
  I.see('필터');
  I.see('리셋하기');
});

Scenario('#2. 사용자가 장소를 필터링하기 위해 필터 기능 버튼을 클릭(로그인 유저)', ({ I }) => {
  // Given
  I.setupPlaces();
  // TODO. 로그인 상태의 사용자 세팅
  I.amOnPage('/');
  I.click('장소 검색');

  // When
  I.click('필터');

  // Then
  I.see('어디로 갈까요?');

  I.see('시/도');
  I.see('서울');
  I.see('대전');
  I.see('전라');
  I.see('제주');

  I.see('시/군/구');
  I.see('선택');

  I.see('어떤 곳을 원하세요?');
  I.see('스포츠/레저');
  I.see('교육/체험');
  I.see('키즈존 맛집');

  I.see('필터 적용하기');
});

// Scenario('#3. 사용자가 장소를 필터링하기 위해 필터 기능 버튼을 클릭(미로그인 유저)', ({ I }) => {
//   // Given
//   I.setupPlaces();
//   // TODO. 미로그인 상태의 사용자 세팅
//   I.amOnPage('/');
//   I.click('장소 검색');

//   // When
//   I.click('필터');

//   // Then
//   I.see(/회원분들께만 제공되는 정보예요/);
//   I.see('로그인 하러가기!');
//   I.click('로그인 하러가기!');

//   I.see('아빠! 오늘은 어디가요?');
//   I.see('천천히 둘러볼래요');
// });

Scenario('#4. 사용자가 모든 옵션을 지정하여 필터링 함(로그인 유저, 필터링 결과 있음)', ({ I }) => {
  // Given
  // TODO. 사전 세팅되는 장소에 서울-성동구-자연에 해당하는 장소가 1개 존재해야 함
  I.setupPlaces();
  // TODO. 로그인 상태의 사용자 세팅
  I.amOnPage('/');
  I.click('장소 검색');
  I.click('필터');

  // When
  I.click('서울');
  I.selectOption('시/군/구', '성동구');
  I.click('자연');
  I.click('필터 적용하기');

  // Then
  I.see('서울 - 성동구 - 자연');
  I.see('1개 장소 보러가기');
  I.click('1개 장소 보러가기');

  I.see('< 돌아가기');
  I.see('1개 장소를 찾았어요! 어디로 가볼까요?');
  I.see('서울숲 공원');
  I.see('서울특별시 성동구 뚝섬로 273');
  I.see('자연');
  I.click('서울숲 공원');

  I.see('상세정보');
  // I.see(/블로그 리뷰/);
  I.see('평점/리뷰');
  I.see('편의시설');
  I.see('예약');
  I.see('주차');
  I.see('외부음식');
  I.see('수유실');
  I.see('주소');
  I.see('복사하기');
  I.see('연락하기');
  I.see('홈페이지');
});

Scenario('#5. 사용자가 모든 옵션을 지정하여 필터링 함(로그인 유저, 필터링 결과 없음)', ({ I }) => {
  // Given
  // TODO. 사전 세팅되는 장소에 경상 - 함안군 - 전시/공연에 해당하는 장소가 없어야 함
  I.setupPlaces();
  // TODO. 로그인 상태의 사용자 세팅
  I.amOnPage('/');
  I.click('장소 검색');
  I.click('필터');

  // When
  I.click('경상');
  I.selectOption('시/군/구', '함안군');
  I.click('전시/공연');
  I.click('필터 적용하기');

  // Then
  I.see('경상 - 함안군 - 전시/공연');
  I.see('조건에 맞는 장소가 없습니다.');
});

Scenario('#6. 사용자가 시/군/구 옵션을 선택하지 않은 상태에서 필터링을 시도(로그인 유저)', ({ I }) => {
  // Given
  I.setupPlaces();
  // TODO. 로그인 상태의 사용자 세팅
  I.amOnPage('/');
  I.click('장소 검색');
  I.click('필터');

  // When
  I.click('경상');
  I.click('전시/공연');
  I.click('필터 적용하기');

  // Then
  // TODO. alert 테스트 가능 여부 확인
  I.seeInPopup('가고싶은 지역을 선택해주세요!');
});

Scenario('#7. 사용자가 필터링을 설정하려다가 돌아가기 버튼을 클릭', ({ I }) => {
  // Given
  I.setupPlaces();
  // TODO. 로그인 상태의 사용자 세팅
  I.amOnPage('/');
  I.click('장소 검색');
  I.click('필터');

  // When
  I.click('서울');
  I.selectOption('시/군/구', '성동구');
  I.click('키즈존 맛집');
  I.click('< 돌아가기');

  // Then
  I.see('필터 조건을 설정해주세요');
});

// TODO. 지도 상 마커 클릭 가능 여부 확인 필요
