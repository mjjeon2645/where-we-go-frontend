import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
}
`;

export default GlobalStyle;
