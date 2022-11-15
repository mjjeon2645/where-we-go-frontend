Feature('Place User Review Page');

Scenario('#1. 사용자가 장소 세부정보 페이지에서 회원들의 평점과 리뷰를 보기 위해 평점/리뷰 탭을 이용(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0');

  // When
  I.click('평점/리뷰');

  // Then
  I.see('4.25 / 5점');
  I.see('4명 참여');
  I.see('내가 남긴 리뷰');
  I.see('아직 리뷰를 남기지 않으셨네요!');
  I.see('마음에 드신 장소라면 다른 회원님들께도 추천해주세요.');
  I.see('리뷰 작성하기');
  I.see('회원님들의 리뷰');
});

Scenario('#2. 사용자가 장소 세부정보 페이지에서 장소 리뷰를 작성하기 위해 리뷰 작성하기 버튼을 클릭(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');

  // When
  I.click('리뷰 작성하기');

  // Then
  I.see('이 곳, 어떠셨나요?');
  I.see('방문일');
  I.see('평점');
  I.see('선택');
  I.see('한 줄 리뷰');
  I.see('최소 10자 이상 적어주세요');
  I.see('0 / 50자');
  I.see('등록하기');
  I.see('취소하기');
  I.see('욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다');
});

Scenario('#3. 사용자가 리뷰 작성하기 페이지에서 리뷰를 작성 완료함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  // TODO. 방문일 선택
  I.selectOption('평점', '⭐️⭐️⭐️⭐️⭐️');
  I.fillFiled('한 줄 리뷰', '아이와 함께 가서 즐겁게 놀 만한 장소예요!');
  I.see('24 / 50자');
  I.click('등록하기');

  // Then
  I.see('4.4 / 5점');
  I.see('5명 참여');
  I.see('봄이엄마(방문일: 2022-11-15');
  I.see('아이와 함께 가서 즐겁게 놀 만한 장소예요!');
});

Scenario('#4. 사용자가 리뷰 작성하기 페이지에서 방문일 선택을 누락하고 등록하기를 시도함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  I.selectOption('평점', '⭐️⭐️⭐️⭐️⭐️');
  I.fillFiled('한 줄 리뷰', '아이와 함께 가서 즐겁게 놀 만한 장소예요!');
  I.click('등록하기');

  // Then
  // TODO. alert 창 확인 가능 여부
  I.see('방문일을 선택해주세요!');
  I.dontSee('내가 남긴 리뷰');
});

Scenario('#5. 사용자가 리뷰 작성하기 페이지에서 평점 선택을 누락하고 등록하기를 시도함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  I.selectOption('방문일', '2022-11-15');
  I.fillFiled('한 줄 리뷰', '아이와 함께 가서 즐겁게 놀 만한 장소예요!');
  I.click('등록하기');

  // Then
  // TODO. alert 창 확인 가능 여부
  I.see('평점을 선택해주세요!');
  I.dontSee('내가 남긴 리뷰');
});

Scenario('#6. 사용자가 리뷰 작성하기 페이지에서 글을 작성하지 않고 등록하기를 시도함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  I.selectOption('방문일', '2022-11-15');
  I.selectOption('평점', '⭐️⭐️⭐️⭐️⭐️');
  I.click('등록하기');

  // Then
  // TODO. alert 창 확인 가능 여부
  I.see('리뷰를 10자 이상 적어주세요! 선택해주세요!');
  I.dontSee('내가 남긴 리뷰');
});

Scenario('#7. 사용자가 리뷰 작성하기 페이지에서 글을 10자 미만으로 작성한 뒤 등록하기를 시도함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  I.selectOption('방문일', '2022-11-15');
  I.selectOption('평점', '⭐️⭐️⭐️⭐️⭐️');
  I.fillFiled('한 줄 리뷰', '여기좋아요');
  I.click('등록하기');

  // Then
  // TODO. alert 창 확인 가능 여부
  I.see('리뷰를 10자 이상 적어주세요!');
  I.dontSee('내가 남긴 리뷰');
});

Scenario('#8. 사용자가 리뷰 작성하기 페이지에서 리뷰를 작성하려다가 취소함(로그인 유저, 본인이 작성한 리뷰는 없음)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpUserReviewId0();
  I.amOnPage('/places/0/user-review');
  I.click('리뷰 작성하기');

  // When
  I.fillFiled('한 줄 리뷰', '아이와 함께 가서 즐겁게 놀 만한 장소예요!');
  I.click('취소하기');

  // Then
  I.dontSee('리뷰를 10자 이상 적어주세요!');
  I.see('4.25 / 5점');
  I.see('4명 참여');
  I.see('아직 리뷰를 남기지 않으셨네요!');
  I.see('마음에 드신 장소라면 다른 회원님들께도 추천해주세요.');
});
