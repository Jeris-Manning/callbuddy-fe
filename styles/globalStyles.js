import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

/* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
*/
ol, ul {
  list-style: none;
}

/* For images to not be able to exceed their container */
img {
  max-width: 100%;
}

/* Removes spacing between cells in tables */
table {
  border-collapse: collapse;
}

/* Revert the 'white-space' property for textarea elements on Safari */
textarea {
  white-space: revert;
}

html {
  min-height: 100vh;
}

 body {
  font-family: 'Open Sans', sans-serif;
  background-color: #F2F2F2;
  min-height: 100%;
  min-width: 100%;
}


a {
  font-weight: 600;
  font-size: 18px;
  line-height: 24.5px;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

h1 {
  font-weight: 800;
  font-size: 60px;
  line-height: 82px;
}

h2 {
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 46px;
  }
}

h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 19px;
  }
}

p {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}

figcaption {
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
}

#mainContent {
  display: flex;
  justify-content: center;
}

`;
