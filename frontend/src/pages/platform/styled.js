import styled from "styled-components";
import platformBg from "../../assets/images/platformBg.jpg";
import { Pagination } from "antd";

export const HeroWrapper = styled.section`
  /* background: url(${platformBg})  no-repeat; */

  min-height: 30rem;
  /* min-height: 33rem; */
  background: linear-gradient(
      180deg,
      rgba(0, 136, 148, 0.8) 0%,
      rgba(0, 106, 119, 0.8) 100%
    ),
    url(${platformBg});
  background-repeat: repeat;
  overflow: hidden;

  div {
    transform: translateY(70px);
    h1 {
      color: white;

      margin-top: 1rem;

      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 76px;
      letter-spacing: 0.5px;
    }
    p {
      color: white;
      width: 40%;

      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 24px;
    }
  }
  @media (max-width: 990px) {
    div {
      width: 100%;
      /* padding: 3rem; */

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

export const MainWrapper = styled.div`
  .filterdDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    h2 {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 107%;

      color: #0f1134;
    }
  }
  @media (max-width: 767px) {
    .filterdDiv {
      flex-direction: column;
      h2 {
        text-align: center;
      }
    }
  }
`;

export const MainPagination = styled(Pagination)`
  display: flex;
  margin-top: 1rem;
  justify-content: center;

  .anticon {
    vertical-align: 0rem !important;
  }
  .ant-pagination-item-active {
    background: #008c9d !important;
    border: 1px solid #efefef !important ;
    color: white !important;
  }
`;

export const FilterBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;

  .filterBtn {
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 7px;
  }
  @media (max-width: 990px) {
    justify-content: center;
  }
`;

export const NewsLetter = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;

  @media (max-width: 991.98px) {
    border: none !important;
  }

  .newsLetterMain {
    display: flex;
    justify-content: center;
    align-items: center;

    .detailSubscribe {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 120%;
      color: #008c9d;
    }

    .subscribeText {
      @media (max-width: 991.98px) {
        display: block;
        margin: 0 auto 1.5rem auto;
      }
    }

    p {
      color: #0f1134;
      font-style: normal;
      font-weight: 200;
      font-size: 11px;
      color: #0f1134;
      /* width: 90%; */
    }

    h2 {
      font-family: "FS Albert Arabic";
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 120%;
      color: #008c9d;
    }

    .emailWrapper {
      display: flex;
      gap: 1rem;
      input {
        border: 1px solid #f0f0f0;
        border-radius: 40px;
        padding: 12px 16px 12px 24px;
      }
      input::placeholder {
        font-size: 12px;
        color: #0f1134;
      }
      button {
        font-family: "FS Albert Arabic";
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 24px;
        background: #008c9d;
        padding: 0.2rem 1rem;
        border-radius: 30px;
        border: none;
        color: white;
      }
    }
  }

  @media (max-width: 990px) {
    .newsLetterMain {
      display: flex;
      flex-direction: column;
    }
    .filterdDiv {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .emailWrapper {
      flex-direction: column;
    }
  }
`;
