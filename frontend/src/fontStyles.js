import { createGlobalStyle } from "styled-components";
import FSAlbertArabic from "./assets/images/fonts/FSAlbertArabic-Bold.ttf";
import FSAlbertArabicWeb from "./assets/images/fonts/FS Albert Arabic Web.otf";
import FSAlbertArabicLight from "./assets/images/fonts/FSAlbertArabic-Light.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'FS Albert Arabic';
    src: url(${FSAlbertArabic}) format('woff2'),
         url(${FSAlbertArabic}) format('woff'),
         url(${FSAlbertArabicWeb}) format('woff2'),
         url(${FSAlbertArabicLight}) format('woff2'),
         url(${FSAlbertArabicWeb}) format('embedded-opentype'),
         url(${FSAlbertArabicLight}) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default FontStyles;
