import styled, { css } from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(180deg, #008c9d 0%, #224292 100%);
  padding: 2rem 0;

   .supportIcon {
    position: absolute;
    right: 0;
    top: 10%;

    @media (max-width: 1400px) {
      top: 15%;
    }
  }

  @media (max-width: 600px) {
    padding: 0rem 0;
  }
`;

export const HeroTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #ffffff;

  @media (max-width: 991.98px) {
    text-align: center;
    br {
      display: none;
    }
  }

  @media (max-width: 756px) {
    font-size: 24px;
  }
`;

export const HeroWrapper = styled.div``;

export const HeroText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 1.5rem;

  @media (max-width: 991.98px) {
    text-align: center;

    br {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
    margin-top: 1.5rem;
  }
`;

export const LearnMoreBtn = styled.button`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  backdrop-filter: blur(4px);
  border-radius: 30px;
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 10px 20px;

  @media (max-width: 991.98px) {
    display: block;
    margin: 1rem auto;
  }
`;
export const HeroImgWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }

  @media (max-width: 991.98px) {
    justify-content: center;
  }

  @media (max-width: 756px) {
    margin-top: 2rem;
  }
`;
export const ExploreSection = styled.section`
  background: rgba(240, 240, 240, 0.5);
  padding: 4rem;

  @media (max-width: 575.98px) {
    padding: 4rem 16px;
  }
`;
export const ExploreTitle = styled.p`
  font-size: 30px;
  font-weight: 300 !important;

  @media (max-width: 1199.98px) {
    text-align: center;
  }

  /* font-family: 'FS Albert Arabic';
font-style: normal;
font-weight: 400;
font-size: 36px;
 
color: #0F1134; */
  @media (max-width: 756px) {
    font-size: 28px;
    text-align: center;
  }
`;
export const ExploreWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  border: 1px solid #00bece;
  border-radius: 40px;
  width: 295px;
  height: 65px;
  padding: 0 10px;

  @media (max-width: 575.98px) {
    width: 100%;
  }

  /* padding: 10px 30px; */

  img {
    /* width: 40px;
    height: 40px; */
  }

  /* &:hover img {
    fill: white !important;
  } */

  &:hover {
    background-color: #00bece;
    transition: all linear 0.3s;

    /* img {
      fill: #ffffff;
    } */

    .icon {
      filter: invert(1);
    }
    span {
      color: #ffffff;
    }
  }
  span {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 125% */

    /* Space blue */

    color: #0f1134;
  }

  .icon:hover {
    fill: red;
  }
`;
export const PlatformSection = styled.section`
  padding: 2rem 0;

  &.articleBG {
    background: rgba(240, 240, 240, 0.5);
    padding: 4rem 0 !important;
  }
  .platform-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 756px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const PlatformTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 107%;
  /* or 34px */

  /* Space blue */

  color: #0f1134;

  @media (max-width: 756px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const ExploreBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #0f1134;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 30px;
  padding: 10px 25px;
`;
export const TabsDiv = styled.div`
  margin-top: 1rem;

  .ant-tabs-tab {
    color: black !important;
  }
  .ant-tabs-tab .ant-tabs-tab-active {
    color: red !important;
    border-color: green !important;
  }

  ${(p) =>
    p.isRtl &&
    css`
      .ant-tabs-nav-list {
        gap: 1rem !important;
      }
    `}
`;
export const SwiperWrraper = styled.div`
  ${(p) =>
    p.heroSwiper &&
    css`
      .swiper-pagination-bullets {
      }
      .swiper-pagination-bullet {
        height: 10px;
        width: 10px;
      }

      .swiper-slide {
        padding: 4rem 0;
      }
    `}
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  .swiper-slide {
    @media (max-width: 991.98px) {
      padding: 3rem 0;
    }
  }
`;

export const MainCardWrapper = styled.div`
  background: #ffffff;

  .ant-tabs-bottom > .ant-tabs-nav:before,
  .ant-tabs-bottom > div > .ant-tabs-nav:before,
  .ant-tabs-top > .ant-tabs-nav:before,
  .ant-tabs-top > div > .ant-tabs-nav:before {
    border-bottom: none;
  }
`;
export const LatestAudioSection = styled.section`
  padding: 3rem;
  background: #ffffff;

  .platform-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 756px) {
    padding: 3rem 0;

    .platform-header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export const LatestConferenceSection = styled.section`
  padding: 3rem;
  background-color: rgba(247, 247, 247, 1);

  &.librarySection {
    background-color: #fff !important;
  }

  .platform-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 756px) {
    padding: 3rem 0rem;

    .platform-header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export const ExpertSection = styled.section`
  padding: 3rem;
  background: #ffffff;
  .platform-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .expert-info {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #ffffff;
    padding: 20px 10px;
    width: 403px;

    .img-icon {
      img {
        width: 8px;
        height: 8px;
      }
    }

    /* img {
      height: 100% !important;
    } */

    li {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      color: #0f1134;
      margin-top: 0.5rem;
      margin-left: -1rem;
    }
  }
  @media (max-width: 991.98px) {
    padding: 3rem 0;

    .platform-header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export const ExpertTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 107%;
  color: #008c9d;

  @media (max-width: 756px) {
    text-align: center;
  }
`;
export const Name = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  /* Space blue */

  color: #0f1134;
  margin-top: 1rem;
`;
export const Experience = styled.span`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  /* identical to box height, or 160% */

  /* Space blue */

  color: #0f1134;
`;

export const ConseltBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background: #224292;
  border-radius: 18px;
  border: none;
  padding: 7px 20px;
  @media (max-width: 756px) {
    padding: 5px 10px;
  }
`;

export const ExpertAdviceSection = styled.section`
  padding: 1rem 0 1rem 0;
  background-color: #f0f0f0;

  .textDiv {
    margin-top: 3rem;
  }

  .firstMan {
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .secondMan {
    @media (min-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    padding: 1rem 1rem;
  }

  .adviceText {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 120%;
    color: #008c9d;
    margin: 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 991.98px) {
    .expertAdviceImg {
      display: block;
      margin: 0 auto;
    }

    .adviceText {
      text-align: center;

      br {
        display: none;
      }
    }
  }

  span {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 120%;
    /* or 36px */

    text-align: right;

    /* Dark tiffany */

    color: #008c9d;
  }

  .adviceWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.rowReverseClass {
      flex-direction: row-reverse !important;
    }

    @media (max-width: 991.98px) {
      margin-top: 2rem;
      flex-direction: column;
      gap: 2rem;

      &.rowReverseClass {
        flex-direction: column !important;
      }
    }
  }

  .textContainer {
    width: 100%;
    background-color: #fff;
    padding: 20px 20px 20px 20px;

    .mainText {
      margin: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 180%;
      color: #646464;
    }

    .name {
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 24px;
      color: #008c9d;
      margin: 0;
      margin-top: 1rem;
    }

    .profession {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 13px;
      color: #989898;
      margin: 0;
      margin-top: 5px;

      @media (max-width: 575.98px) {
        margin-bottom: 1rem;
      }
    }
  }
`;
export const Swiperdiv = styled.div`
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }

  .swiper {
    background-color: rgb(240, 240, 240);
    padding: 3rem 0;

    @media (max-width: 991.98px) {
      padding: 1rem 0 3rem 0;
    }
  }
`;
export const ActivememberSection = styled.section`
  padding: 3rem;
  background-color: #ffffff;

  .data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    /* Light gray */

    border: 1px solid #f0f0f0;
    border-radius: 36px;
    padding: 10px 20px;
    margin-top: 1.5rem;
  }

  .info {
    display: flex;
    /* gap: 1rem; */
    align-items: center;

    @media (max-width: 756px) {
      justify-content: center;
    }
    span {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      color: #0f1134;

      @media (max-width: 575.98px) {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 756px) {
    padding: 0rem;
  }
`;
export const MamberName = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;

  /* Space blue */

  color: #0f1134;
`;

export const Profission = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height, or 108% */

  text-align: center;

  color: #989898;
`;
export const Imgdiv = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
    width: 200px;
  }
`;
export const Points = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;

  color: #646464;
`;
export const Value = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 180%;
  text-align: right;
  color: #00bece;
`;
export const ValueCount = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 180%;
  text-align: right;
  color: #224292;
`;
export const MainActiveDev = styled.div`
  background: #f7f7f7;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 20px;
`;

export const NewsletterSection = styled.section`
  padding: 3rem;
  background-color: #ffffff;

  .info {
    display: flex;

    gap: 2rem;
    margin-top: 1rem;

    @media (max-width: 991.98px) {
      justify-content: center;
      align-items: center;
    }
  }

  input {
    padding: 10px;
    border-radius: 40px;
    background: #ffffff;
    width: 350px;
    border: 1px solid #f0f0f0;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 500px) {
    .info {
      flex-direction: column;
    }
    input {
      width: 100%;
    }
  }

  @media (max-width: 991.98px) {
    .imgss {
      display: block;
      margin: 1rem auto;
    }
  }
`;

export const NewsTitle = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 120%;

  color: #008c9d;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const NewsText = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 1rem;
  color: #0f1134;

  @media (max-width: 991.98px) {
    text-align: center;

    br {
      display: none;
    }
  }
`;

export const GoBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  background: #008c9d;
  border-radius: 30px;
  color: #ffffff;
  border: none;
  padding: 10px 15px;

  @media (max-width: 756px) {
    font-size: 14px;
    padding: 5px 20px;
  }
`;
export const NewsMaindev = styled.div`
  /* text-align: center;
justify-content: center; */
`;

export const WelcomeWrapper = styled.div`
  .welcomeContainer {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .welcomeFlexWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767.98px) {
      flex-direction: column;
    }
  }
  margin: 0 0rem !important;
  .newWrapperCaraousel {
    display: flex;
    flex: 1;
    border-radius: 10px;
  }
  .wrapperDiv {
    width: 35%;
  }
  .wrapperDivContent {
    width: 65%;
  }

  .welcomeWrapper {
    display: flex;
    height: 12.3rem;
  }

  .carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
  }

  .carousel .slides {
    display: flex;
    transition: transform 0.5s ease;
  }

  .carousel .slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }

  .carousel .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: gray;
    color: white;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }

  .carousel .arrow.prev {
    left: 0;
  }

  .carousel .arrow.next {
    right: 0;
  }

  .carousel-images {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 400px;
   
  }

  .carouselImg {
    width: 100%;
    background-image: linear-gradient(90deg, #1d569c 0%, rgba(0, 0, 0, 0) 100%);
  
  }

  .carousel-images img.active {
    opacity: 1;

    animation: fade 2s infinite;
   

    @keyframes fade {
      0% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }
  }

  .carousel-dots {
    margin-top: 30px;
    margin-left: 7.5rem;

    @media (max-width: 1399.98px) {
      margin-left: 3.7rem;
    }

    @media (max-width: 1199.98px) {
      display: flex;
      justify-content: center;
      margin-left: 0;
    }
  }

  .carousel-dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;

    cursor: pointer;
    transition: background-color 0.5s ease-in-out;
    background: rgba(15, 17, 52, 0.5);
    opacity: 0.6;
  }

  .carousel-dots .active {
    background: white;
  }

  .slideee {
    border-radius: 0px 6px 6px 0px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .mainTitle {
    padding-top: 2rem;
    font-size: 1.1rem;
    width: 29rem;

    color: white;
  }

  .seeMore {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 7px;
    background-color: white;
    color: #224493;
    margin-top: -0.8rem;
    max-width: 150px;
    white-space: nowrap;
    margin-top: 1.5rem;

    @media (max-width: 767.98px) {
      margin-top: 0rem;
    }
  }

  @media (max-width: 1190px) {
    .newWrapperCaraousel {
      flex-direction: column;
      width: 100% !important;
    }
    .wrapperDiv {
      width: 100% !important;
    }
    .wrapperDivContent {
      width: 100% !important;
    }

    .welcomeWrapper {
      flex-direction: column;
      height: auto !important;
    }
    .carousel-images img {
      max-width: 100%;
      max-height: 300px;
      object-fit: contain;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .carouselImg {
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    .wrapperDivFlex {
      flex-direction: column;
      width: 100% !important;
    }
    .mainTitle {
      width: 100%;
    }
  }
`;
