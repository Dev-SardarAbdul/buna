import styled from "styled-components";
import { AiOutlinePlus, AiOutlineHeart, AiOutlineSave } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";

export const Subsicon = styled(AiOutlinePlus)`
  border: 1px solid #f0f0f0;
  border-radius: 33px;
  font-size: 2rem;
  padding: 5px;
  color: #008c9d;
`;
export const Hearticon = styled(AiOutlineHeart)`
  border: 1px solid #f0f0f0;
  border-radius: 33px;
  font-size: 2rem;
  padding: 5px;
`;
export const Shareicon = styled(RxShare2)`
  border: 1px solid #f0f0f0;
  border-radius: 33px;
  font-size: 2rem;
  padding: 5px;
`;
export const Saveicon = styled(AiOutlineSave)`
  border: 1px solid #f0f0f0;
  border-radius: 33px;
  font-size: 2rem;
  padding: 5px;
`;

export const VideoSections = styled.section`
  margin-top: 4rem;

  background-color: #ffffff;

  &.detailNoPadding {
    padding: 0;
  }

  .videoContainer {
    padding: 1rem;
  }

  .detailHeadphone {
    display: block;
    margin-left: auto;
    margin-top: 2rem;
    cursor: pointer;
  }

  .headphone {
    display: block;
    margin-left: auto;
    margin-top: 2rem;
    cursor: pointer;
  }

  .detailImg {
    height: 100%;
  }

  .detailWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }

  &.noPadding {
    padding: 0rem;
  }
  .video-data {
    border: 1px solid lightgray;
    padding: 1rem;
  }
  .icon-div {
    border: 1px solid #f0f0f0;
    border-radius: 33px;
    width: 132px;
    height: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 16px 5px 5px;
    gap: 8px;
    span {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 13px;
      /* identical to box height, or 81% */

      /* Space blue */

      color: #0f1134;
    }
  }

  .last-icon-div {
    border: 1px solid #f0f0f0;
    border-radius: 33px;
    width: 202px;
    height: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 16px 5px 5px;
    gap: 8px;
    span {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 13px;
      /* identical to box height, or 81% */

      /* Space blue */

      color: #0f1134;
    }
  }

  .video-info {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;

    @media (max-width: 800px) {
      flex-wrap: wrap;
    }
  }
`;

export const MarketingText = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  color: rgba(15, 17, 52, 0.5);
  margin-top: 2rem;
  margin-bottom: 0rem;

  @media (max-width: 1199.98px) {
    text-align: center;
  }
`;

export const MarketingTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;
  /* identical to box height, or 138% */

  letter-spacing: 0.5px;

  /* Space blue */

  color: #0f1134;
  @media (max-width: 1199.98px) {
    text-align: center;
  }
`;

export const PoweredText = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  letter-spacing: 0.5px;

  /* Space blue */

  color: #0f1134;

  @media (max-width: 1199.98px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.5px;

  color: rgba(15, 17, 52, 0.5);
  width: 80%;

  @media (max-width: 1199.98px) {
    width: 100%;
    text-align: center;
  }
`;

export const EpisodeSection = styled.section`
  .episode-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fcfcfc;
    /* Light gray */

    border: 1px solid #f0f0f0;
    border-radius: 6px;
    padding: 16px 24px 16px 16px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  h4 {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.5px;

    color: rgba(15, 17, 52, 0.5);
    margin-top: 2rem;
  }
`;

export const EpisodeTitle = styled.h5`
  margin-top: 2rem;
`;

export const EpisodeDiv = styled.div`
  display: flex;
  gap: 1rem;

  h5 {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #0f1134;
  }

  p {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #008c9d;
    margin-top: 1rem;
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.5px;

  color: rgba(15, 17, 52, 0.7);
  width: 700px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const PlayBtn = styled.button`
  width: 107px;
  height: 48px;

  /* Dark tiffany */

  background: #008c9d;
  border-radius: 30px;
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height, or 144% */

  /* White */

  color: #ffffff;
  border: none;
`;

export const RelatedPodcastSection = styled.section`
  padding: 3rem;
  .filterdDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    @media (max-width: 756px) {
      display: block;
      gap: 2rem;
    }

    .filterBtnMain {
      display: flex;
      gap: 1rem;
    }

    .filterBtn {
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      background: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 7px;
    }
  }
`;

export const DetailSection = styled.section`
  padding: 3rem;
  background-color: #ffffff;
`;

export const AudioDiv = styled.div`
  margin-top: 1rem;
  audio {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0.1px;
  background: rgba(15, 17, 52, 0.88);
  border-radius: 0px 0px 6px 6px;
  min-height: 84px;
  width: 100%;
  padding: 0 20px;

  .btnDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .spans {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    color: #ffffff;
  }

  .inputDiv {
    flex: 2;

    .progress {
      height: 2px;

      .progress-bar {
        background-color: #00bece;
      }
    }
  }

  .playPauseIcon {
    height: 48px;
    width: 48px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;

    .icon {
      color: #00bece;
      width: 24px;
      height: 24px;
    }
  }

  .videoBtns {
    height: 36px;
    width: 36px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;

    .icon {
      color: #00bece;
      height: 20px;
      width: 20px;
    }
  }
`;
