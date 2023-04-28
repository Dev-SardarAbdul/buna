import styled, { createGlobalStyle } from "styled-components";
import FSAlbertArabic from "./assets/images/fonts/FS Albert Arabic Web.otf";
import FSAlbertArabicRegular from "./assets/images/fonts/FSAlbertArabic-Regular.woff";

import FSAlbertArabicThin from "./assets/images/fonts/FSAlbertArabic-Thin.ttf";
import FSAlbertArabicLight from "./assets/images/fonts/FSAlbertArabic-Light.ttf";
import FSAlbertArabicExtraBold from "./assets/images/fonts/FSAlbertArabic-ExtraBold.ttf";
import FSAlbertArabicBold from "./assets/images/fonts/FSAlbertArabic-Bold.ttf";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'FSAlbert', sans-serif !important;

  font-family: 'DM Sans', sans-serif;
    
 } 
 /* @font-face {
        font-family: 'FS Albert Arabic';
        src: local('FS Albert Arabic'), local('FS Albert Arabic') ,
        url(${FSAlbertArabic}) format('woff2'),
        url(${FSAlbertArabicThin}) format('woff'),
        url(${FSAlbertArabicLight}) format('woff'),
        url(${FSAlbertArabicExtraBold}) format('woff');
          } */

          /* @font-face {
    font-family: 'FS Albert Arabic';
    src: url(${FSAlbertArabic}) format('woff2'),
         url(${FSAlbertArabicBold}) format('woff2'),
         url(${FSAlbertArabicExtraBold}) format('woff2'),
         url(${FSAlbertArabicLight}) format('woff2'),
         url(${FSAlbertArabicThin}) format('woff2'),
         url(${FSAlbertArabic}) format('woff'),
         url(${FSAlbertArabicBold}) format('woff'),
         url(${FSAlbertArabicExtraBold}) format('woff'),
         url(${FSAlbertArabicLight}) format('woff'),
         url(${FSAlbertArabicThin}) format('woff');
    
  } */

  /* @font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabic}) format('woff2'),
       url(${FSAlbertArabicBold}) format('woff2'),
       url(${FSAlbertArabicExtraBold}) format('woff2'),
       url(${FSAlbertArabicLight}) format('woff2'),
       url(${FSAlbertArabicThin}) format('woff2'),
       url(${FSAlbertArabic}) format('woff'),
       url(${FSAlbertArabicBold}) format('woff'),
       url(${FSAlbertArabicExtraBold}) format('woff'),
       url(${FSAlbertArabicLight}) format('woff'),
       url(${FSAlbertArabicThin}) format('woff');
  
}

@font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabicBold}) format('woff2'),
       url(${FSAlbertArabicBold}) format('woff');
  font-weight: bold;
  font-style: normal;
  
} */

@font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabicBold}) format('woff2'),
       url(${FSAlbertArabicBold}) format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabicExtraBold}) format('woff2'),
       url(${FSAlbertArabicExtraBold}) format('woff');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabicLight}) format('woff2'),
       url(${FSAlbertArabicLight}) format('woff');
  font-weight: 300;
  font-style: normal;
}

/* @font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabic}) format('woff2'),
       url(${FSAlbertArabic}) format('woff');
  font-weight: 400;
  font-style: normal;
} */

@font-face {
  font-family: 'FS Albert Arabic';
  src: url(${FSAlbertArabicThin}) format('woff2'),
       url(${FSAlbertArabicThin}) format('woff');
  font-weight: 100;
  font-style: normal;
}
  html
  {
    scroll-behavior: smooth;
    direction: ${(props) => props.theme.direction};
    
  }

  
 body
{
  overflow-x: hidden !important;
  background: #fff;
}

.navbarMain a
{
   text-decoration: none !important;
   color: black !important;
}
 
.expertSlider.swiper-slide
{
  width: 390px !important;
}

.onBoardModal
{
  width: 1000px !important;
}

.ant-modal-content
{
  padding: 0 !important;
}

.dropdownTitle  .nav-link {
   
  }
 
   
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black !important;
    

}
.ant-tabs-ink-bar 
{
  background: #00BECE  !important;
}

.ant-tabs-bottom > .ant-tabs-nav:before,
  .ant-tabs-bottom > div > .ant-tabs-nav:before,
  .ant-tabs-top > .ant-tabs-nav:before,
  .ant-tabs-top > div > .ant-tabs-nav:before {
    border-bottom: none;
  }

  .missionRow
  {
    margin-right: -5px;
  margin-left: -5px;
  }

  .missionCol
  {
    padding-right: 5px;
  padding-left: 5px;
  }
  .missionContainer
  {
    max-width: 452px !important ;
  }
  .visionContainer
  {
    max-width: 452px !important ;
  /* padding-right: 20px; */

  }
 

 .libraryMarginRight {
  padding-left: 20px;
 }

 .categoryrightCol {
 }
 .categoryleftCol {
  border-right: 1px solid #F0F0F0;
 }

 
.play-button {
  width: 100px;
  height: 50px;
}

 
.swiper-button-prev,
.swiper-button-next {
  background-color: #04849C; /* set the background color */
  border-radius: 50%; /* set the border radius */
  width: 40px; /* reduce the width */
  height: 40px; /* reduce the height */
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 12px; /* reduce the font size of the arrow icon */
  color: white;
}

 
.headphoneDiv {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 120px;
  right: 0;
  background-color: #FFD15C;
  border-radius: 6px;
  padding: 10px 10px;
  transition: width 0.5s ease;
  z-index: 100;

  cursor: pointer;

  &.divReversed {
    left: 0px;
    right: auto;
  }

  p {
    margin: 0;
    color: rgba(0,0,0,0.75);
    font-size: 14px;
    margin-top: 2px;

    animation: fade-in 0.5s forwards;

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  }
}
 
`;

export default GlobalStyle;
