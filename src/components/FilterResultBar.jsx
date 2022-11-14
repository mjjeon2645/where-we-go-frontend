import styled from 'styled-components';

const WithResult = styled.button`
    color: #FFF;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 11;
    padding: .8em 7em;
    border: 2px solid #FFF;
    border-radius: 8px;
    background-color: #FFA200;
`;

const WithoutResult = styled.button`
    color: #000;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 11;
    padding: .8em 4em;
    border: 2px solid #FFF;
    border-radius: 8px;
    background-color: #EEE;
`;

export default function FilterResultBar(
  { goFilteredPlaceListPage, places },
) {
  const handleFilterResultClick = () => {
    goFilteredPlaceListPage();
  };

  return (
    <div>
      {places.length === 0
        ? (
          <WithoutResult
            type="button"
            disabled
          >
            조건에 맞는 장소가 없습니다.
          </WithoutResult>
        ) : (
          <WithResult
            type="button"
            onClick={handleFilterResultClick}
          >
            {places.length}
            개 장소 보러가기
          </WithResult>
        )}
    </div>
  );
}
