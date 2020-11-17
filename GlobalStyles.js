import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--backgroundColor);
    color: var(--font-color-darkgrey);
    font-family: 'Nunito Sans', sans-serif;
    a {
        color: black;
        text-decoration: none;
    }
}

:root {
    --backgroundColor: #fff;
    --footer-backgroundColor: #141414;
    --font-color-blue: #0075AB;
    --font-color-darkgrey: #707070;
    --footer-font-color-lightgrey: #EFEFEF;
    --line-color-lightgrey: #8080801A;
    --infoBox-color-lightgrey: #E2E2E247;
    --headcolor-services-normal: #F75119;
    --headcolor-services-second: #F7C219;
    --form-border-color: #A8C4E5;
    --form-input-background-color: #F7F9FC;
    --form-error-color: #F86D70;
    }
`
