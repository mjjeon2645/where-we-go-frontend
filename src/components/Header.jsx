import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: #FFF;
  border-bottom: 1px solid #EEE;
`;

const Wrapper = styled.div`
  padding-inline: calc((100% - 400px) / 2);
  vertical-align: middle;
`;

const Navigation = styled.nav`
    left: 0;
    right: 0;
    bottom: 0;
    height: 4em;
`;

const List = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <List>
            <li>
              <Link to="/map">지도 검색</Link>
            </li>
            <li>
              <Link to="/top3">Top 3</Link>
            </li>
            <li>
              <Link to="/myaccount">My메뉴</Link>
            </li>
          </List>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
