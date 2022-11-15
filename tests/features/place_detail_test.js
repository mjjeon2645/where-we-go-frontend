Feature('Place Detail Page');

Scenario('#1. 사용자가 장소 요약정보를 보고 세부정보를 얻기 위해 장소 요약정보를 클릭함(로그인 유저)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setupPlaceId0();

  // When
  I.amOnPage('/places/0');

  // Then
  I.see('상세정보');
  I.see('블로그 리뷰 1');
  I.see('평점/리뷰');
  I.see('1 / 3');
  I.see('덕수궁');
  I.see('편의시설');
  I.see('예약');
  I.see('주차');
  I.see('외부음식');
  I.see('수유실');
  I.see('주소');
  I.see('서울특별시 중구 세종대로 99');
  I.see('복사하기');
  I.see('연락하기');
  I.see('홈페이지');
});

Scenario('#2. 사용자가 장소 세부정보 중 사진 및 편의시설 영역을 확인함(로그인 유저)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setupPlaceId0();

  // When
  I.amOnPage('/places/0');

  // Then
  I.see('1 / 3');
  I.click('>');
  I.see('2 / 3');
  I.click('>');
  I.see('3 / 3');
  I.click('<');
  I.see('2 / 3');
});

Scenario('#3. 사용자가 장소 세부정보 중 주소영역 및 하단 네비게이션 바를 이용함(로그인 유저)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setupPlaceId0();

  // When
  I.amOnPage('/places/0');

  // Then
  I.see('주소');
  I.see('서울특별시 중구 세종대로 99');
  I.click('복사하기');
  // TODO. alert 문구 볼 수 있는지 확인할 것
  I.see('복사 완료! 원하는 곳에 붙여 넣으세요~');
  I.click('확인');
  I.dontSee('복사 완료! 원하는 곳에 붙여 넣으세요~');

  I.click('연락하기');
  I.see('연락처 안내');
  I.see('010-5634-1111');
  I.click('X');
  I.dontSee('연락처 안내');

  I.click('홈페이지');
  // TODO. 새 창으로 뜨는 홈페이지에 대한 인수테스트가 가능한 부분인지 확인할 것
});

Scenario('#4. 사용자가 장소 세부정보 중 주소영역 및 하단 네비게이션 바를 이용함(로그인 유저)', ({ I }) => {
// TODO기능 미 구현 상태이므로 구현 시에 테스트 보강할 것
  // Given
  // TODO. 로그인 사용자 세팅
  I.setupPlaceId0();
  I.amOnPage('/places/0');

  // When
  I.click('즐겨찾기');

  // Then
});
