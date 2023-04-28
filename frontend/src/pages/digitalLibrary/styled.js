import styled from "styled-components";
import digitalBg from "../../assets/images/digitalBg.png";
export const DigitalLibraryWrapper = styled.div`
  .digitalLibraryIcon {
  }
  .title {
    margin-top: 2rem;
    color: #0f1134;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;
  }
  .categoryWrapper {
    .categoryInnerWrapper {
      margin: 0.7rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 20px 5px 5px;
      border: 1px solid #f0f0f0;
      border-radius: 33px;

      .IconWrapper {
        background: #008c9d;
        border-radius: 30px;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 13px;
        color: #0f1134;
        transform: translateY(6px);
      }
    }
  }
  .libraryDetails {
    margin: 0 1rem;
    .libraryInfo {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 48px;

      color: #0f1134;
      margin-top: 2rem;
    }
    .libraryTextDetails {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      /* line-height: 28px; */
      color: rgba(15, 17, 52, 0.7);
      text-align: justify;
      text-justify: inter-word;

      .link {
        color: #008c9d;
        text-decoration: underline;
        cursor: pointer;
      }

      .link:hover {
        color: rgba(20, 140, 197, 1);
      }
    }
    .libraryDivWithImg {
      display: flex;
      align-items: center;
      gap: 4rem;

      img {
        width: 20rem;
      }
      .textLibrary {
        width: 35rem;
      }

      ul {
        padding: 0;
        margin: 0;
      }
      li {
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 300;
        color: rgba(15, 17, 52, 0.7);
        font-size: 12px;
        line-height: 20px;
        text-align: justify;
        text-justify: inter-word;
        margin-top: 1rem;
      }
      li:first-child a {
        color: #008c9d;
        text-decoration: none;
      }

      li:first-child a:hover {
        text-decoration: underline;
        color: rgba(20, 140, 197, 1);
      }
    }
  }

  @media (max-width: 1200px) {
    .IconWrapper {
      width: 25px !important;
      height: 25px !important;
      padding: 1.3rem;
    }
    .libraryDivWithImg {
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    .libraryDivWithImg {
    }
    .textLibrary {
      width: 100% !important;
    }
  }
`;

export const HeroWrapper = styled.section`
  /* min-height: 30rem; */
  min-height: 30rem;
  background: linear-gradient(
      180deg,
      rgba(0, 136, 148, 0.8) 0%,
      rgba(0, 106, 119, 0.8) 100%
    ),
    url(${digitalBg});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 991.98px) {
    min-height: auto;
  }

  div {
    /* display: flex;
    justify-content: center;
    flex-direction: column; */
    /* align-items: center; */

    padding: 3rem 0rem;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 76px;
      letter-spacing: 0.5px;
      color: #ffffff;
      width: 50%;

      @media (max-width: 1199.98px) {
        width: 100%;
        text-align: center;
      }

      @media (max-width: 991.98px) {
        font-size: 28px !important;
        line-height: 36px;
      }
    }
    p {
      color: white;
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      margin-top: 20px;
      width: 77%;

      @media (max-width: 1199.98px) {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }

      @media (max-width: 575.98px) {
        text-align: justify;
        text-align-last: center;
      }
    }
  }
  @media (max-width: 990px) {
    div {
      width: 100%;
      transform: translateY(5px);
      padding: 1rem;

      h1 {
        color: white;
        font-size: 3.7rem;
        font-weight: bold;
        margin-top: 1rem;
      }
      p {
        color: white;
        width: 100%;
      }
    }
  }
`;

export const NationalWrapper = styled.div`
  .downLoadBtn {
    background: #008c9d;
    border-radius: 24px;
    padding: 10px 24px;
    gap: 8px;
    width: 100%;
    border: none;
    color: white;
  }

  .categoryInnerWrapper.active {
    background: rgba(0, 140, 157, 0.1);
    border: 1px solid #008c9d;
    border-radius: 36px;
  }
  .infoIcon {
  }

  .IconWrapper.active {
    background: #008c9d !important;
  }

  .title {
    margin-top: 2rem;
    color: #0f1134;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;
  }
  .lastText {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(15, 17, 52, 0.7);
  }
  .categoryWrapper {
    .rightCol {
      background-color: red;
    }
    .categoryInnerWrapper {
      margin: 0.7rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 20px 5px 5px;
      border: 1px solid #f0f0f0;
      border-radius: 33px;

      .IconWrapper {
        background: #008c9d;
        border: 1px solid #008c9d;
        border-radius: 36px;

        border-radius: 30px;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .info {
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 13px;
        color: #0f1134;
        transform: translateY(6px);
      }
    }
  }
  .libraryDetails {
    margin: 0 1rem;
    .libraryInfo {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 800;
      font-size: 36px;
      line-height: 48px;

      color: #0f1134;
      margin-top: 2rem;
    }
    .libraryTextDetails {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: rgba(15, 17, 52, 0.7);
      text-align: justify;
      text-justify: inter-word;

      .link {
        color: #008c9d;
        text-decoration: underline;
        cursor: pointer;
      }

      .link:hover {
        color: rgba(20, 140, 197, 1);
      }
    }

    .digitalImg {
      width: 100%;
      /* height: 400px; */
      border-radius: 10px;
      margin: 1rem 0;
    }

    .libraryDivWithImg {
      display: flex;
      align-items: center;
      gap: 4rem;

      img {
        width: 20rem;
      }
      .textLibrary {
        /* width: 35rem; */
      }

      ul {
        padding: 0;
        margin: 0;
      }
      li {
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 400;
        color: rgba(15, 17, 52, 0.7);
        font-size: 14px;
        line-height: 28px;
        text-align: justify;
        text-justify: inter-word;
      }
      li:first-child a {
        color: #008c9d;
        text-decoration: none;
      }

      li:first-child a:hover {
        text-decoration: underline;
        color: rgba(20, 140, 197, 1);
      }
    }
  }

  @media (max-width: 1200px) {
    .IconWrapper {
      width: 25px !important;
      height: 25px !important;
      padding: 1.3rem;
    }
    .libraryDivWithImg {
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    .libraryDivWithImg {
    }
    .textLibrary {
      width: 100% !important;
    }
  }
`;

export const RightColDiv = styled.div`
  .galleryImg {
    @media (max-width: 991.98px) {
      display: block;
      margin: 1rem auto;
    }
  }

  .loremText {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(15, 17, 52, 0.5);
  }

  .searchDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 2rem;

    @media (max-width: 575.98px) {
      flex-direction: column;
    }
  }

  .ant-input-affix-wrapper {
    background-color: transparent;
    height: 52px;
    border-radius: 6px;
  }

  .ant-input {
    background-color: transparent;
  }

  .searchBtn {
    background-color: red;
    width: 123px;
    height: 52px;
    background: #00bece;
    border-radius: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    border: none;
  }

  .paddingBottom {
    padding-bottom: 2rem;
    border-bottom: 2px solid rgba(15, 17, 52, 0.2);
  }
`;

export const CardWrapper = styled.div`
  margin-top: 2rem;
`;

export const UnorderedList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  &.marginDiv {
    margin-top: 2rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(15, 17, 52, 0.7);
    margin: 0;
  }

  .contentDot {
    color: rgba(15, 17, 52, 0.7);
    font-size: 24px !important;
  }
`;
