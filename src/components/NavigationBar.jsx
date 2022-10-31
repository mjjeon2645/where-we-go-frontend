import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NaviBar = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4em;
    background-color: #DDD;
`;

const List = styled.ul`
    display: flex;
    
    li {
        margin-inline: 3em;
    }
`;

export default function NavigationBar() {
  return (
    <NaviBar>
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
    </NaviBar>
  );
}
