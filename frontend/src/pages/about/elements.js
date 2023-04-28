import styled, { css } from "styled-components";

export const HeroSection = styled.section`
  padding: 3rem;
  background: #ffffff;

  .supportIcon {
    position: absolute;
    right: 0;
    top: 10%;
  }
`;

export const AboutTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  @media (max-width: 756px) {
    text-align: center;
  }
`;
export const AboutText = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #0f1134;
`;

export const ContactUsBtn = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: #224292;
  border-radius: 50px;
  border: none;
  width: 110px;
  height: 40px;

  @media (max-width: 756px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const MissionSection = styled.section`
  /* padding: 3rem; */

  .missionWrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const MissionMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  .missionInner {
    width: 100%;
  }
  .missionMain {
    margin-left: 11rem;
  }
  @media (max-width: 1880px) {
    .missionMain {
      margin-left: 15.9rem;
    }
  }
  @media (max-width: 1800px) {
    .missionMain {
      margin-left: 13.9rem;
    }
  }
  @media (max-width: 1760px) {
    .missionMain {
      margin-left: 12.9rem;
    }
  }
  @media (max-width: 1700px) {
    .missionMain {
      margin-left: 10.6rem;
    }
  }
  @media (max-width: 1660px) {
    .missionMain {
      margin-left: 9.3rem;
    }
  }
  @media (max-width: 1600px) {
    .missionMain {
      margin-left: 7.8rem;
    }
  }
  @media (max-width: 1560px) {
    .missionMain {
      margin-left: 6.5rem;
    }
  }
  @media (max-width: 1500px) {
    .missionMain {
      margin-left: 4.7rem;
    }
  }
  @media (max-width: 1441px) {
    .missionMain {
      margin-left: 3rem;
    }
  }
  @media (max-width: 1399px) {
    .missionMain {
      margin-left: 7.3rem;
    }
  }
  @media (max-width: 1380px) {
    .missionMain {
      margin-left: 7rem;
    }
  }
  @media (max-width: 1350px) {
    .missionMain {
      margin-left: 6rem;
    }
  }
  @media (max-width: 1300px) {
    .missionMain {
      margin-left: 4rem;
    }
  }
  @media (max-width: 1280px) {
    .missionMain {
      margin-left: 3.7rem;
    }
  }
  @media (max-width: 1250px) {
    .missionMain {
      margin-left: 2.3rem;
    }
  }
  @media (max-width: 667px) {
    flex-wrap: wrap;
    .visionMain {
      margin-left: 2.3rem;
    }
  }

  /* arabic */

  .missionInner {
    width: 100%;
  }
  .missionArabicMain {
    margin-right: 11rem;
  }
  @media (max-width: 1880px) {
    .missionArabicMain {
      margin-right: 15.9rem;
    }
  }
  @media (max-width: 1800px) {
    .missionArabicMain {
      margin-right: 13.9rem;
    }
  }
  @media (max-width: 1760px) {
    .missionArabicMain {
      margin-right: 12.9rem;
    }
  }
  @media (max-width: 1700px) {
    .missionArabicMain {
      margin-right: 10.6rem;
    }
  }
  @media (max-width: 1660px) {
    .missionArabicMain {
      margin-right: 9.3rem;
    }
  }
  @media (max-width: 1600px) {
    .missionArabicMain {
      margin-right: 7.8rem;
    }
  }
  @media (max-width: 1560px) {
    .missionArabicMain {
      margin-right: 6.5rem;
    }
  }
  @media (max-width: 1500px) {
    .missionArabicMain {
      margin-right: 4.7rem;
    }
  }
  @media (max-width: 1441px) {
    .missionArabicMain {
      margin-right: 3rem;
    }
  }
  @media (max-width: 1399px) {
    .missionArabicMain {
      margin-right: 7.3rem;
    }
  }
  @media (max-width: 1380px) {
    .missionArabicMain {
      margin-right: 7rem;
    }
  }
  @media (max-width: 1350px) {
    .missionArabicMain {
      margin-right: 6rem;
    }
  }
  @media (max-width: 1300px) {
    .missionArabicMain {
      margin-right: 4rem;
    }
  }
  @media (max-width: 1280px) {
    .missionArabicMain {
      margin-right: 3.7rem;
    }
  }
  @media (max-width: 1250px) {
    .missionArabicMain {
      margin-right: 2.3rem;
    }
  }
  @media (max-width: 667px) {
    flex-wrap: wrap;
    .visionMain {
      margin-right: 2.3rem;
    }
  }
`;
export const MissioTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 57px;
  color: #0f1134;
`;
export const MissionText = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #0f1134;
  margin-top: 1.5rem;
  width: 600px;
  margin-left: 11rem;
  @media (max-width: 1880px) {
    margin-left: 16rem;
    width: 600px;
  }
  @media (max-width: 1800px) {
    margin-left: 14rem;
    width: 580px;
  }
  @media (max-width: 1760px) {
    margin-left: 13rem;
  }
  @media (max-width: 1700px) {
    margin-left: 11rem;
  }
  @media (max-width: 1660px) {
    margin-left: 9.3rem;
  }
  @media (max-width: 1600px) {
    margin-left: 7.8rem;
  }
  @media (max-width: 1560px) {
    margin-left: 6.5rem;
  }
  @media (max-width: 1500px) {
    margin-left: 4.7rem;
  }
  @media (max-width: 1441px) {
    margin-left: 3rem;
    width: 580px;
  }
  @media (max-width: 1399px) {
    margin-left: 7.3rem;
    width: 500px;
  }
  @media (max-width: 1380px) {
    margin-left: 6.7rem;
    width: 500px;
  }
  @media (max-width: 1350px) {
    margin-left: 6rem;
    width: 500px;
  }
  @media (max-width: 1300px) {
    margin-left: 4.3rem;
    width: 500px;
  }
  @media (max-width: 1280px) {
    margin-left: 4rem;
    width: 500px;
  }
  @media (max-width: 1250px) {
    margin-left: 2.6rem;
    width: 400px;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin-left: 2rem;
    padding-right: 2rem;
  }

  ${(p) =>
    p.visionText &&
    css`
      width: 600px;
      margin-left: 0rem;

      @media (max-width: 1880px) {
        margin-left: 0.6rem;
        width: 600px;
      }
      @media (max-width: 1800px) {
        margin-left: 0.1rem;
        width: 580px;
      }
      @media (max-width: 1250px) {
        width: 400px;
      }
      @media (max-width: 990px) {
        width: 100%;
      }
      @media (max-width: 760px) {
        width: 100%;
        margin-left: 2rem;
        padding-right: 2rem;
      }
    `}

  /* arabic */

    ${(p) =>
    p.missionRtl &&
    css`
      margin-right: 11rem;
      @media (max-width: 1880px) {
        margin-right: 16rem;
        width: 600px;
      }
      @media (max-width: 1800px) {
        margin-right: 14rem;
        width: 580px;
      }
      @media (max-width: 1760px) {
        margin-right: 13rem;
      }
      @media (max-width: 1700px) {
        margin-right: 11rem;
      }
      @media (max-width: 1660px) {
        margin-right: 9.3rem;
      }
      @media (max-width: 1600px) {
        margin-right: 7.8rem;
      }
      @media (max-width: 1560px) {
        margin-right: 6.5rem;
      }
      @media (max-width: 1500px) {
        margin-right: 4.7rem;
      }
      @media (max-width: 1441px) {
        margin-right: 3rem;
        width: 580px;
      }
      @media (max-width: 1399px) {
        margin-right: 7.3rem;
        width: 500px;
      }
      @media (max-width: 1380px) {
        margin-right: 6.7rem;
        width: 500px;
      }
      @media (max-width: 1350px) {
        margin-right: 6rem;
        width: 500px;
      }
      @media (max-width: 1300px) {
        margin-right: 4.3rem;
        width: 500px;
      }
      @media (max-width: 1280px) {
        margin-right: 4rem;
        width: 500px;
      }
      @media (max-width: 1250px) {
        margin-right: 2.6rem;
        width: 400px;
      }
      @media (max-width: 990px) {
        width: 100%;
        margin-right: 2rem;
        padding-right: 2rem;
      }
    `}

    ${(p) =>
    p.visionArabic &&
    css`
      width: 600px;
      margin-right: 0rem !important;

      @media (max-width: 1880px) {
        margin-right: 0.6rem;
        width: 600px;
      }
      @media (max-width: 1800px) {
        margin-right: 0.1rem;
        width: 580px;
      }
      @media (max-width: 1250px) {
        width: 400px;
      }
      @media (max-width: 990px) {
        width: 100%;
      }
      @media (max-width: 760px) {
        width: 100%;
        margin-right: 2rem;
        padding-left: 2rem;
      }
    `}
`;

export const MissionWrapper = styled.div`
  background: #f7f7f7;
  border-radius: 0px 24px 24px 0px;
  padding: 3rem 2rem;
`;

export const VisionWrapper = styled.div`
  background: #f7f7f7;
  border-radius: 24px 0px 0px 24px;
  padding: 3rem 2rem;
`;
export const GoalSection = styled.section`
  background: #008c9d;
  padding: 3rem;

  @media (max-width: 756px) {
    .title {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const GoalTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  /* identical to box height, or 117% */

  /* White */

  color: #ffffff;
`;
export const DataDiv = styled.div`
  margin-top: 2rem;

  @media (max-width: 756px) {
    .img-wrapper {
      text-align: center;
      justify-content: center;
    }
  }

  .title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;

    color: #ffffff;
    margin-top: 1.5rem;
  }

  p {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 2rem;
  }
`;

export const SupervisorySection = styled.section`
  padding: 3rem;
`;
export const SupervisorTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  /* identical to box height, or 119% */

  /* Space blue */

  color: #0f1134;
`;
export const SupervisorText = styled.div`
  font-style: normal;
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  /* or 150% */

  /* Space blue */

  color: #0f1134;
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }
`;

export const SteeringCommiteeSection = styled.section`
  background: #ffffff;
  padding: 3rem;

  .steeringmember-info {
    margin-top: 6rem;
  }

  .topexpertInfoWrapper {
    display: inline-block;

    &::after {
      display: block;
      content: "";
      border-bottom: solid 3px rgb(34, 66, 146);
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
  .expertInfoWrapper {
    display: inline-block;

    &::after {
      display: block;
      content: "";
      border-bottom: solid 3px #01bdcf;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }

  .expert-info {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #ffffff;
  }

  .chairmanStatus {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    width: 106px;
    padding: 5px 24px 5px 10px;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    background: #224292;
    border-radius: 60px;
    color: white;

    P {
      padding: 0;
      margin: 0;
    }
  }
  .status {
    background: #00bece;
    border-radius: 60px;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    width: 80px;
    padding: 0.3rem 0rem;
    color: #ffffff;
    @media (max-width: 756px) {
      padding: 5px;
      width: 70px;
    }
  }

  .expert-info {
    /* padding: 10px; */
  }

  .expert-data {
    padding: 20px 0px;
  }

  .top-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SteeringTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #0f1134;

  @media (max-width: 756px) {
    font-size: 26px;
  }
`;
export const SteeringText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 150% */

  /* Space blue */

  color: #0f1134;
  margin-top: 1.5rem;
`;

export const Name = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  color: #0f1134;

  margin-top: 0rem;

  @media (max-width: 756px) {
    font-size: 12px;
  }
`;
export const Experience = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #224292;
  margin: 0rem !important;
  margin-top: -0.7rem !important;

  @media (max-width: 756px) {
    font-size: 12px;
  }
`;

export const TargetedUsersWrapper = styled.div`
  overflow: hidden;
  background-color: #f7f7f7;

  .container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const TargetedUsersHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (max-width: 575.98px) {
    justify-content: center;
    gap: 10px;
  }

  .icon {
    transform: translateY(-5px);
    width: 50px;
    height: 50px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    color: #0f1134;

    @media (max-width: 575.98px) {
      font-size: 30px;
    }
  }
`;

export const TargetedUserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;

  .bottomIcon {
    height: 100px;
    width: 100px;
  }

  .userName {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #008c9d;
    margin: 0;
  }
`;

export const MainActivityWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const MainActivityHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (max-width: 575.98px) {
    justify-content: center;
    gap: 10px;
  }

  .icon {
    transform: translateY(-5px);
    width: 50px;
    height: 50px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    color: #0f1134;

    @media (max-width: 575.98px) {
      font-size: 30px;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 170px;
  background: #ffffff;
  border: 1px solid #00bece;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 3rem;

  .infoImg {
  }

  .imgText {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #008c9d;
    margin: 0;
    text-transform: capitalize;
  }
`;
