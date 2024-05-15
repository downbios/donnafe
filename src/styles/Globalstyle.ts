import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Allura', cursive;
}
button {
    cursor: pointer;
    transition: filter 0.3s ;

    &:hover {
        filter: brightness(1.2);
        transition: filter 0.3s ;
    }
}
`;
