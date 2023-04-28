import { createGlobalStyle } from "styled-components";
import FSAlbertArabicLight from "./assets/images/fonts/FSAlbertArabic-Light.ttf";
import FSAlbertArabicRegular from "./assets/images/fonts/FSAlbertArabic-Regular.woff";
import FSAlbertArabicThin from "./assets/images/fonts/FSAlbertArabic-Thin.ttf";
import FSAlbertArabicExtraBold from "./assets/images/fonts/FSAlbertArabic-ExtraBold.ttf";
import FSAlbertArabicBold from "./assets/images/fonts/FSAlbertArabic-Bold.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'FS Albert Arabic';
    src: url(${FSAlbertArabicRegular}) format('woff2'),
         url(${FSAlbertArabicRegular}) format('woff'),
         url(${FSAlbertArabicLight}) format('woff2'),
         url(${FSAlbertArabicLight}) format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default FontStyles;
