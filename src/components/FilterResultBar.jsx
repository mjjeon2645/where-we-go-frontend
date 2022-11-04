import styled from 'styled-components';

const WithResult = styled.button`
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 11;
`;

const WithoutResult = styled.button`
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 11;
    background-color: #EEE;
`;

export default function FilterResultBar(
  { handleFilterResultClick, positions },
) {
  return (
    <div>
      {positions.length === 0
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
            {positions.length}
            개 장소 보러가기
          </WithResult>
        )}
    </div>
  );
}
