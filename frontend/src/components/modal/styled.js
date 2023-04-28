import styled from "styled-components";

export const ModalWrapper = styled.div`
  .title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #0f1134;
  }
  .description {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0f1134;
  }
  .registerBtn {
    background: #224292;
    border-radius: 50px;
    width: 100%;
    color: #ffffff;
    padding: 10px 10px;
    border: none;
  }
  .contentWrapper {
    padding: 1rem;
  }
`;

export const PDFModalWrapper = styled.div`
  padding: 2rem;
  height: 400px;
  overflow-y: auto !important;
  overflow-x: hidden !important;
`;
