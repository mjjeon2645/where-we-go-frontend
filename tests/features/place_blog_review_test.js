Feature('Place Blog Review Page');

Scenario('#1. 사용자가 장소 세부정보 페이지에서 블로그 리뷰를 보기 위해 블로그 리뷰 탭을 이용(로그인 유저)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpBlogReviewId0();
  I.amOnPage('/places/0');

  // When
  I.click('블로그 리뷰 1');

  // Then
  I.see('네이버 블로그 리뷰');
  I.see('덕수궁 다녀왔어요!');
  I.see('by. 작성자0');
});

Scenario('#2. 사용자가 장소 세부정보 페이지에서 블로그 리뷰를 보기 위해 블로그 리뷰 탭을 이용하나 리뷰가 없음(로그인 유저)', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpBlogReviewId0();
  I.amOnPage('/places/1');

  // When
  I.click('블로그 리뷰 0');

  // Then
  I.see('네이버 블로그 리뷰');
  I.see('등록된 리뷰가 없습니다 😓');
});

Scenario('#3. 사용자가 리뷰 전문을 보기 원하는 특정 블로그 리뷰를 클릭', ({ I }) => {
  // Given
  // TODO. 로그인 사용자 세팅
  I.setUpBlogReviewId0();
  I.amOnPage('/places/0/blog-review');

  // When
  I.click('덕수궁 다녀왔어요!');

  // Then
  // TODO. 새 창으로 블로그 리뷰가 뜨는데 이를 인수테스트 가능한지 확인해볼 것
});
