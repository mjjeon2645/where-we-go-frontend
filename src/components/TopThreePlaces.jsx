export default function TopThreePlaces({
  firstPlace, secondPlace, thirdPlace, firstAddress, secondAddress, thirdAddress,
}) {
  console.log(firstAddress.sido);
  return (
    <article>
      <p>오늘은 어디가요? TOP 3</p>
      <p>오어디 회원님들이 추천하는 장소는 어디일까요?</p>
      <div>
        <p>1위</p>
        <p>{firstPlace.name}</p>
        <p>
          {' '}
        </p>
        <p>1위 주소</p>
        <p>{firstPlace.averageRate}</p>
        <p>1위 별 이미지</p>
      </div>
      <div>
        <p>2위</p>
        <p>{secondPlace.name}</p>
        <p>2위 주소</p>
        {/* <p>{secondPlace.address.sido}</p> */}
        {/* <p>{secondPlace.address.sigungu}</p> */}
        <p>{secondPlace.averageRate}</p>
        <p>2위 별 이미지</p>
      </div>
      <div>
        <p>3위</p>
        <p>{thirdPlace.name}</p>
        <p>3위 주소</p>
        {/* <p>{thirdPlace.address.sido}</p> */}
        {/* <p>{thirdPlace.address.sigungu}</p> */}
        <p>{thirdPlace.averageRate}</p>
        <p>3위 별 이미지</p>
      </div>
    </article>
  );
}
