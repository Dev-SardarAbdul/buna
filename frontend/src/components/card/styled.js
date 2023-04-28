import styled from "styled-components";
import { PlatformTitle } from "./../../pages/homeComp/elements";

export const CardSection = styled.section`
  .card {
    background: #ffffff;
    /* Light gray */

    border: 2px solid #f0f0f0;
    border-radius: 6px;

    &:hover {
      border: 2px solid rgb(1, 189, 207);
    }
  }
  .cardTitleP {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }

  .card-title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;

    color: #000000;

    @media (max-width: 756px) {
      font-size: 14px;
    }

    &.audioCardTitle {
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 20px;
      color: #0f1134;
    }
  }
  .card-text {
    border-bottom: 2px solid #f0f0f0;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 1rem;
    color: #989898;

    &.audioCardText {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #0f1134;
      border-bottom: none !important;
      margin-top: 8px !important;
    }
  }

  .profile-info {
    h5 {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 12px;
      color: #0f1134;
    }

    p {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 13px;
      color: #989898;
    }
  }

  .info {
    display: flex;
    gap: 1rem;
  }

  .cardTextPara {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;

    color: #989898;
  }

  .audio-info {
    display: flex;
    gap: 2rem;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
      color: #0f1134;
      margin-top: -5px;
    }
  }

  .btnwrapper {
    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 10px;
    background: #008c9d;
    border-radius: 18px;
    margin-top: 1rem;
    width: 9rem;
    cursor: pointer !important;

    span {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      /* identical to box height, or 133% */

      /* White */

      color: #ffffff;
    }
  }

  .status {
    background: #00bece;
    border-radius: 6px;
    width: 5rem;
    width: 57px;
    height: 20px;
    padding: 0px 6px 0px 6px;
    p {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
  }
`;

export const PodcastCardSection = styled.section`
  margin-top: 2rem;

  .card {
    background: #ffffff;
    /* Light gray */

    border: 2px solid #f0f0f0;
    border-radius: 6px;
  }
  .cardTitleP {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }

  .card-title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;

    color: #000000;

    @media (max-width: 756px) {
      font-size: 14px;
    }

    &.audioCardTitle {
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 20px;
      color: #0f1134;
    }
  }
  .card-text {
    border-bottom: 2px solid #f0f0f0;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 1rem;
    color: #989898;

    &.audioCardText {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #0f1134;
      border-bottom: none !important;
      margin-top: 8px !important;
    }
  }

  .profile-info {
    h5 {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 12px;
      color: #0f1134;
    }

    p {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 13px;
      color: #989898;
    }
  }

  .info {
    display: flex;
    gap: 1rem;
  }

  .cardTextPara {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;

    color: #989898;
  }

  .audio-info {
    display: flex;
    gap: 2rem;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
      color: #0f1134;
      margin-top: -5px;
    }
  }

  .btnwrapper {
    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 10px;
    background: #008c9d;
    border-radius: 18px;
    margin-top: 1rem;
    width: 9rem;
    cursor: pointer !important;
    span {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      /* identical to box height, or 133% */

      /* White */

      color: #ffffff;
    }
  }

  .status {
    background: #00bece;
    border-radius: 6px;
    width: 5rem;
    width: 57px;
    height: 20px;
    padding: 0px 6px 0px 6px;
    p {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
  }
`;
export const Card2Section = styled.section``;

export const ConferencesCardSection = styled.div`
  .card {
    width: 100%;
    border: none;
    background-color: #fff;

    .bookmarkIcon {
      cursor: pointer;
    }
  }
  .imgDiv {
    position: relative;
  }

  .imgDiv::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .conferenceDate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 22px;
    color: #ffffff;
    text-align: center;
  }

  .card-title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    color: #0f1134;
    margin-top: 1rem;
  }

  .conferencePlace {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #0f1134;
    margin: 0;
    margin-top: 10px;
  }
  .conferenceTime {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #0f1134;
    opacity: 0.6;
    margin: 0;
    margin-top: 7px;
  }
`;

export const CardTag = styled.div`
  background: #00bece;
  border-radius: 6px;
  width: 66px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;

  &.onlineTag {
    background: #bccf0d !important;
  }
`;

export const BookSeatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const BookSeatBtn = styled.button`
  background: #224292;
  border-radius: 18px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: #ffffff;
  flex: 3;
  height: 36px;
`;

export const VideoCardWrapper = styled.div`
  .card-img,
  .card-img-top {
    height: 294px;
    border-radius: 6px;
  }
  .card {
    width: 100%;
    min-height: 294px;
    border: none;
    border-radius: 6px;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }

    .mainText {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
      position: absolute;
      bottom: 50px;
      left: 20px;
      padding-right: 20px;

      &.arabicText {
        right: 0px !important;
      }
    }

    .btnDiv {
      position: absolute;
      bottom: 15px;
      left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

      &.arabicBtn {
        bottom: 15px;
        right: 20px !important;
      }

      .playBtn {
        font-size: 24px;
        color: #fff;

        &.arabicPlayBtn {
          transform: rotate(180deg) !important;
        }
      }

      .watchNowText {
        margin: 0;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }
`;

export const PlayBtn = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: #00bece;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpertCardWrapper = styled.div`
  .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  .imgDiv {
    .cardImg {
      height: 165px;
      width: 150px;
      border-radius: 6px;
    }
  }

  .card {
    width: 100% !important;
    border-radius: 6px;

    &:hover {
      border: 1px solid rgb(1, 189, 207);
    }

    .arabicText {
      padding: 15px 0px 15px 10px;
    }
  }

  .cardText {
    padding: 15px 10px 15px 0px;
    flex: 1;

    .status {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #c4c4c4;
      margin: 0;

      &.available {
        color: #bccf0d !important;
      }

      span {
        text-transform: capitalize;
      }
    }

    .name {
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 16px;
      color: #0f1134;
      margin: 0;
      margin-top: 15px;
    }

    .experience {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      color: #0f1134;
      opacity: 0.6;
      margin: 0;
      margin-top: 10px;
    }

    .btnDiv {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 25px;
      gap: 15px;

      .askBtn {
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 20px;
        color: #ffffff;
        background: #224292;
        border-radius: 18px;
        height: 36px;
        width: 171px;

        @media (max-width: 575.98px) {
          width: 140px;
        }
      }

      .socialIconDiv {
        height: 36px;
        width: 36px;
        background-color: rgb(0, 190, 206);
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .socialIcon {
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
`;

export const AudioPlayBtn = styled.button`
  padding: 10px;
  background: #008c9d;
  border-radius: 18px;
  margin-top: 1rem;
  width: 9rem;
  cursor: pointer !important;
  border: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &.rowReverse {
    flex-direction: row-reverse;
  }

  span {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }

  .pauseDiv {
    height: 24px;
    width: 24px;
    border-radius: 30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PDFCardWrapper = styled.div`
  .card {
    width: 100%;
    height: 176px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 2rem;

    .pdfImg {
      height: 60px;
      width: 60px;
      display: block;
      margin: 2rem auto 0 auto;
      cursor: pointer;
    }

    .imgText {
      margin: 0;
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
      text-align: center;
      margin-top: 1rem;
    }

    .threeDots {
      display: block;
      margin: 0 0 0 auto;
    }
  }
`;
