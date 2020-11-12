import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--backgroundColor);
    color: black;
    padding: 20px;
    font-family: Helvetica, sans-serif;
    a {
        color: black;
        text-decoration: none;
    }
}

:root {
    --backgroundColor: #fff;
    }
`;
