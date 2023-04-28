import styled,{css} from "styled-components";
import meetheroBg from "../../assets/images/meetHero.png";

export const HeroSection = styled.section`
  overflow: hidden;
  background-image: url(${meetheroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;

  @media (max-width: 767.98px) {
    min-height: 0;
  }

  .headphone {
    margin-top: 2rem;
    display: block;
    margin-left: auto;
    cursor: pointer;
  }

  .headphoneReversed {
    margin-right: auto !important;
    margin-left: 0 !important;
  }

  .container {
    margin-top: 5rem;
    margin-bottom: 7rem;

    @media (max-width: 767.98px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

export const HeroTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 56px;
  color: #ffffff;

  @media (max-width: 1399.98px) {
    br {
      display: none;
    }
  }

  @media (max-width: 1199.98px) {
    text-align: center;
  }

  @media (max-width: 575.98px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const HeroText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  /* line-height: 24px; */

  /* or 150% */

  /* White */

  color: #ffffff;
  margin-top: 1rem;

  @media (max-width: 1199.98px) {
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 575.98px) {
    text-align: justify;
    text-align-last: center;
  }
`;

export const MeetExpertSection = styled.section`
  padding: 3rem 0;
  background: #ffffff;

  .filterdDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 0rem;
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

  .expert-info {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #ffffff;
    min-height: 160px;
    width: 100%;
    padding: 0 5px 0 0;

    li {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      /* identical to box height, or 160% */

      /* Space blue */

      color: #0f1134;
      margin-top: 0.5rem;
    }

    .statusWrapper {
      margin-top: 5px;

      .expertStatus {
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 16px;
        /* identical to box height, or 160% */

        /* Space blue */

        color: #c4c4c4;
        margin: 0;

        &.availableColor {
          color: #bccf0d !important;
        }
      }
    }
  }
`;

export const MeetTitle = styled.h5`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 107%;
  /* or 34px */

  /* Space blue */

  color: #0f1134;
  text-transform: capitalize;
`;

export const Name = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: #0f1134;
  margin-top: 0.3rem;

  &.meetExpertsName {
    margin: 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 756px) {
    font-size: 12px;

    &.meetExpertsName {
      margin-top: 0.5rem;
    }
  }
`;
export const Experience = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  margin-top: -0.9rem;

  color: rgba(15, 17, 52, 0.5);
  &.meetExpertExperience {
    color: #0f1134;
    opacity: 0.6;
    transform:translateY(17px);

  }

  @media (max-width: 1400px) {
    margin-top: 0rem;
  }
  @media (max-width: 756px) {
    font-size: 11px;
  }
`;

export const ConseltBtn = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background: #224292;
  border-radius: 18px;
  border: none;
  width: 220px;
  height: 36px;

  ${(p)=>(p.meetBtn && css`
     /* margin-top:-1rem; */
  `)}

  @media (max-width: 756px) {
    font-size: 12px;
  }
`;

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  .ant-pagination .ant-pagination-options {
    display: none;
  }

  .ant-pagination .ant-pagination-item-active a {
    /* border: 1px solid #efefef; */
    /* border-radius: 15px; */
    color: #ffffff !important ;
  }

  .ant-pagination .ant-pagination-item-active {
    background: #008c9d;
    border: none;
    border: 1px solid #efefef;
  }

  .ant-pagination .ant-pagination-item {
    border: 1px solid #f0f0f0;
    border-radius: 12px;
  }
  .ant-pagination .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination .ant-pagination-next .ant-pagination-item-link {
    border: 1px solid #f0f0f0;
    border-radius: 12px;
  }

  .anticon svg {
    transform: translateY(-3px);
  }
`;

export const RecomendedExpertSection = styled.section`
  background-color: #ffffff;
  padding: 3rem 0;
`;

export const RecomendedTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 107%;
  /* or 34px */

  /* Dark tiffany */

  color: #008c9d;

  @media (max-width: 767.98px) {
    text-align: center;
  }
`;

export const MainActiveDev = styled.div`
  background: #f7f7f7;
  /* Light gray */

  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 20px;
  margin-top: 2rem;
`;

export const Imgdiv = styled.div`
  text-align: center;
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

export const ConsulatntBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;

  /* White */

  color: #ffffff;
  background: #224292;
  border-radius: 36px;
  border: none;
  width: 100%;
  height: 46px;
  margin-top: 1rem;
`;

export const ViewProfileBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  /* identical to box height, or 29px */

  text-align: center;

  /* Medium Dark */

  color: #646464;

  background: #ffffff;
  /* Light gray */

  border: 1px solid #f0f0f0;
  border-radius: 36px;
  width: 100%;
  height: 46px;
  margin-top: 1rem;
`;

export const NewsletterSection = styled.section`
  padding: 3rem 0;
  background-color: #ffffff;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  .info {
    display: flex;
    /* text-align: center;
  justify-content: center; */
    gap: 2rem;
    margin-top: 1rem;
  }

  input {
    padding: 10px;
    border-radius: 40px;
    background: #ffffff;
    /* Light gray */
    width: 350px;
    border: 1px solid #f0f0f0;
    &:focus {
      outline: none;
    }
  }
`;

export const NewsTitle = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 120%;
  /* or 43px */

  /* Dark tiffany */

  color: #008c9d;
`;

export const NewsText = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* Space blue */
  margin-top: 1rem;
  color: #0f1134;
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
`;
export const NewsMaindev = styled.div`
  /* text-align: center;
justify-content: center; */
`;

export const ExpertDetailSection = styled.section`
  padding: 3rem;
  background: #ffffff;

  .supportIcon {
    position: absolute;
    right: 0;
    top: 12%;

    @media (max-width: 1400px) {
      top: 15%;
    }
  }

  .buttonWrapper {
    margin-top: -1.3rem;
  }
  .img-wrapper {
    img {
      width: 200px;
    }
  }

  @media (max-width: 756px) {
    .img-wrapper {
      img {
        width: 100%;
      }
    }
  }

  .header-info {
    display: flex;
    gap: 40rem;
    /* justify-content: space-between; */
    /* gap: 2rem; */
  }

  .expert-info {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    /* border: 1px solid #f0f0f0; */
    border-radius: 6px;

    .title {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      color: #bccf0d;

      span {
        width: 5px;
        height: 5px;
        color: #0f1134;
        background: #bccf0d;
        border-radius: 50%;
      }
    }

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .top-data {
    border: 1px solid #f0f0f0;
    padding: 10px 20px;
  }
`;

export const Icon = styled.div`
  /* background-color: red; */
  border-radius: 50px;
  padding: 0.6rem;
  border: 1px solid lightgray;

  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  transform: translateX(140px);

  @media (max-width: 1400px) {
    transform: translateX(0px);
  }
  @media (max-width: 1200px) {
    transform: translateX(-105px);
  }
  @media (max-width: 1000px) {
    transform: translateX(-350px);
  }
  @media (max-width: 800px) {
    transform: translateX(-380px);
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 36px;
  /* identical to box height, or 150% */

  letter-spacing: 0.5px;

  /* Space blue */

  color: #0f1134;
  margin-top: 2rem;
`;

export const Text = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  /* line-height: 32px; */
  /* or 160% */

  letter-spacing: 0.5px;

  color: rgba(15, 17, 52, 0.7);
`;
