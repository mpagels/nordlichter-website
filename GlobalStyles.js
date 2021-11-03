import { createGlobalStyle } from 'styled-components'
import AkzidGroStdBolCnd from './assets/fonts/AkzidGroStdBolCnd.woff'
import AkzidGroStdCnd from './assets/fonts/AkzidGroStdCnd.woff'

export default createGlobalStyle`

@font-face {
        font-family: 'NL-bold';
        src: local('NL-bold'), local('NL-bold'),
        url(${AkzidGroStdBolCnd}) format('woff');
        font-style: bold;
    }

@font-face {
        font-family: 'NL-normal';
        src: local('NL-normal'), local('NL-normal'),
        url(${AkzidGroStdCnd}) format('woff');
        font-style: normal;
    }


* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--backgroundColor);
    color: var(--font-color-darkgrey);
    font-family: 'NL-normal', sans-serif;
    letter-spacing: 1px;
}
    a {
        color: black;
        text-decoration: none;
    }
}

section, div {
    font-family: 'NL-normal';
}

:root {
    --backgroundColor: #fff;
    --footer-backgroundColor: #141414;
    --font-color-blue: #0075AB;
    --font-color-darkgrey: #707070;
    --footer-font-color-lightgrey: #EFEFEF;
    --line-color-lightgrey: #8080801A;
    --infoBox-color-lightgrey: #f7f7f7;
    --headcolor-services-normal: #F75119;
    --headcolor-services-second: #F7C219;
    --form-border-color: #A8C4E5;
    --form-input-background-color: #F7F9FC;
    --form-error-color: #F86D70;
    }
`
