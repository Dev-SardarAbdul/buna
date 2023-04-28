import styled from "styled-components";

export const MainSection = styled.section`
  padding: 3rem;

  background: #f7f7f7;
  .supportIcon {
    position: absolute;
    right: 0;
    top: 12%;
  }
`;

export const Title = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  /* or 117% */

  /* Space blue */

  color: #0f1134;

  @media (max-width: 756px) {
    font-size: 24px;
  }

  @media (max-width: 427px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* or 150% */

  /* Space blue */

  color: #0f1134;

  @media (max-width: 427px) {
    font-size: 14px;
  }
`;

export const MainWrapper = styled.div`
  padding: 0rem;
  background: #ffffff;
  border: 0.5px solid #f0f0f0;
  border-radius: 6px;
  margin-top: 2rem;
  /* height: 14rem; */

  .warpperCard {
    height: 14rem;
    border: none;
    @media (max-width: 990px) {
      height: 18rem;
    }
    @media (max-width: 767px) {
      height: 100%;
    }
  }

  .img-wrapper {
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;

    height: 6rem;
  }

  @media (max-width: 990px) {
    .img-wrapper {
      text-align: center;
      justify-content: center;
      display: flex;
      padding: 1rem;
      img {
        width: 100%;
        height: 90px;
      }
    }
  }
  img {
    padding-top: 2rem;
  }

  h5 {
    margin-top: 0.7rem;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 30px;
    /* identical to box height, or 150% */

    /* Space blue */

    color: #0f1134;
    padding-left: 2rem;

    &.paddingRight {
      padding-left: 0rem !important;
      padding-right: 2rem !important;
    }
  }

  p {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    color: rgba(15, 17, 52, 0.7);
    padding-left: 2rem;
    padding-bottom: 1rem;
    margin-top: -0.5rem;

    &.paddingRight {
      padding-left: 0rem !important;
      padding-right: 2rem !important;
    }

    @media (max-width: 427px) {
      font-size: 13px;
    }
  }
`;
