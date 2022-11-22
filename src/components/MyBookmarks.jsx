import styled from 'styled-components';

const Container = styled.article`
  margin-block: 3em;
`;
const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 2em;
`;

const PlaceList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 1.5em;
  padding-inline: 1em;
`;

const Place = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
`;

const PlaceName = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: .3em;
`;

const Flag = styled.img`
  width: 7%;
`;

const Address = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #666666;
    margin-left: .1em;
  }
`;

const DeleteButton = styled.button`
  background-color: #EEE;
  border: none;
  border-radius: 4px;
  padding: .3em 1em;
`;

export default function MyBookmarks({ goPlaceDetailPage, removeBookmark, bookmarks }) {
  const flagIcon = 'https://user-images.githubusercontent.com/104840243/203305440-47ea3927-697c-4fc0-8523-7a2eee0c47a6.png';

  const handlePlaceDetailClick = (placeId) => {
    goPlaceDetailPage(placeId);
  };

  const handleBookmarkDeleteClick = (placeId) => {
    removeBookmark(placeId);
  };

  return (
    <Container>
      <Title>즐겨찾기</Title>
      {bookmarks.length === 0 ? (
        <p>즐겨찾기 한 장소가 없습니다</p>
      ) : (
        <ul>
          {bookmarks.map((bookmark) => (
            <PlaceList key={bookmark.placeId}>
              <Place
                type="button"
                onClick={() => handlePlaceDetailClick(bookmark.placeId)}
              >
                <PlaceName>{bookmark.name}</PlaceName>
                <Address>
                  <Flag src={flagIcon} alt="" />
                  <span>{bookmark.address}</span>
                </Address>
              </Place>
              <DeleteButton
                type="button"
                id={bookmark.placeId}
                onClick={() => handleBookmarkDeleteClick(bookmark.placeId)}
              >
                X
              </DeleteButton>
            </PlaceList>
          ))}
        </ul>
      )}
    </Container>

  );
}
