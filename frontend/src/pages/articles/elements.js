import styled from "styled-components";

export const ArticleSection = styled.section`
  .supportIcon {
    position: absolute;
    right: 0;
    top: 10%;

    @media (max-width: 1400px) {
      top: 15%;
    }
  }

  .topContainer {
    padding: 5rem 0;
    background-color: #f7f7f7;

    @media (max-width: 991.98px) {
      padding: 0rem 0;
    }
  }

  &.noPadding {
    padding: 0;
  }

  .img {
    text-align: center;
  }
  .swiperImg {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .imgWrapperDiv {
    @media (max-width: 991.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }
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

  .top-info {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991.98px) {
      flex-direction: column;
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex: 1;

      @media (max-width: 991.98px) {
        justify-content: center;
        align-items: center;
      }
    }
  }

  .viewBtn {
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    margin-top: 1rem;
    padding: 3px 12px;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 990px) {
    padding: 1rem;
  }
`;

export const FeaturedTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 54px */

  /* Space blue */

  color: #0f1134;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FeauturedText = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* or 150% */

  /* Space blue */

  color: #0f1134;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const ReadmoreBtn = styled.button`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  background: #243773;
  border-radius: 24px;
  width: 154px;
  height: 48px;
  border: none;
  margin-top: 2rem;

  @media (max-width: 991.98px) {
    display: block;
    margin: 2rem auto 2rem auto;
  }
`;

export const LatestTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 107%;
  /* or 34px */

  /* Space blue */

  color: #0f1134;

  &.podcastText {
    @media (max-width: 575.98px) {
      font-size: 24px;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

export const LatestSection = styled.section`
  margin-top: 3rem;

  .header-info {
    display: flex;
    justify-content: space-between;
  }
  .filter-info {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .filter-data {
    margin-top: 2rem;
  }

  @media (max-width: 1100px) {
    .filter-info {
    }
  }
`;

export const FilterTitle = styled.h5`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0f1134;
  padding: 0.3rem;
  /* border-bottom: 1px solid #f0f0f0; */

  &.borderBottom {
    padding-bottom: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const Text = styled.p`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #0f1134;
  margin-top: 1rem;
`;

export const FilterName = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: rgba(15, 17, 52, 0.5);
  background: #ffffff;
  border: 1px solid #f0f0f0;
  color: rgba(15, 17, 52, 0.5);
  border-radius: 16px;
  padding: 4px 12px;

  &.activeFilter {
    background: rgba(0, 190, 206, 0.12);
    border: 1px solid #00bece;
    border-radius: 16px;
    color: #000;
  }
`;

export const ArticleDetailsWrapper = styled.div`
  margin-top: 3rem;

  .supportIcon {
    position: absolute;
    right: 0;
    top: 10%;

    @media (max-width: 1400px) {
      top: 15%;
    }
  }
  .viewBtnDetails {
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    margin-top: 1rem;
    padding: 3px 12px;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  .breadCrums {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    color: #8ca2c0;
  }
  .profileWrapper {
    display: flex;
    gap: 1.3rem;
    align-items: center;

    .name {
      font-family: "FS Albert Arabic";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      color: #0f1134;
      padding-top: 1.2rem;
    }
    .profession {
      margin-top: -0.3rem;
      color: #989898;
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 13px;
      color: #989898;
    }
    img {
      border-radius: 50%;
    }
  }

  .title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #0f1134;
  }
  .duration {
    color: #00bece;
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 13px;
  }

  .shareStats {
    display: flex;
    gap: 1rem;
    .shareMain {
      background: #ffffff;
      padding: 5px 16px 5px 5px;

      display: flex;
      flex-direction: row;
      align-items: center;

      border: 1px solid #f0f0f0;
      border-radius: 33px;
      .icon {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        img {
          border-radius: 33px;
          padding: 0.5rem;
          border: 1px solid #f0f0f0;
        }
      }
      .statsPara {
        transform: translateY(9px);
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 13px;
        color: #0f1134;
      }
    }
  }

  .relatedArticle {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 107%;
    color: #0f1134;
  }
  @media (max-width: 490px) {
    .shareStats {
      flex-direction: column;
    }
  }
`;

export const ArticleInfoDetails = styled.div`
  padding: 0 2rem;
  .articleImg {
    width: 100%;
    height: 391px;
    border-radius: 24px;
  }
  .subArticleImg {
    width: 100%;
    height: 300px;
    border-radius: 24px;
  }
  .articleText {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    color: rgba(15, 17, 52, 0.7);
    margin-top: 1rem;
  }
  .articlesDetailsTitle {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 46px;
    color: #0f1134;
  }
  .toolTipBtn {
    padding: 4px 10px;
    border: none;
    color: white;
    background: #008c9d;
    font-size: 12px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .mainImg {
    width: 332px;
    height: 380px;
    animation: fade 2s infinite;
    opacity: 1;

    @keyframes fade {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;
export const TextWrapper = styled.div`
  .mainText {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 120%;
    color: #0f1134;
    margin-top: 2rem;

    @media (max-width: 991.98px) {
      margin-top: 3rem;
      text-align: center;
    }
  }

  .subText {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0f1134;
    margin-top: 2rem;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 3rem;

  @media (max-width: 991.98px) {
    margin-bottom: 2rem;
  }

  .div {
    height: 12px;
    width: 12px;
    border-radius: 100px;
  }
`;
