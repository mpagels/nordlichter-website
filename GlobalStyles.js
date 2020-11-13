import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--backgroundColor);
    color: black;
    font-family: 'Nunito Sans', sans-serif;
    a {
        color: black;
        text-decoration: none;
    }
}

:root {
    --backgroundColor: #fff;
    --font-color-blue: #0075AB;
    --font-color-darkgrey: #707070;
    --line-color-lightgrey: #8080801A;
    --infoBox-color-lightgrey: #E2E2E247;
    }
`
