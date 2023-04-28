import styled from "styled-components";

export const FooterSection = styled.section`
  padding: 3rem;
  background: #224292;

  .socialTitle {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #00bece;
    margin-top: 5rem;

    @media (max-width: 756px) {
      text-align: center;
    }
  }
  @media (max-width: 756px) {
    .img-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 756px) {
    .footer-data {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
  }
`;

export const FooterText = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* or 200% */

  /* White */

  color: #ffffff;
  margin-top: 1.5rem;
  /* width: 350px; */
`;

export const Menu1 = styled.div`
  @media (max-width: 756px) {
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }

  .title {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #00bece;
  }
  .subTitle {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #00bece;
  }
  p {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 0rem;
    margin-top: 0.3rem;
  }

  h4 {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;

    color: #00bece;
    margin-top: 1.5rem;
  }
`;

export const SocilaIcon = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 756px) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .icon {
    background: #dadada;
    border-radius: 50px;
    padding: 0.3rem;
    width: 2rem;
    display: flex;
    justify-content: center;

    :hover {
      background: #008c9d;
    }
  }
`;

export const LastText = styled.div`
  font-family: "FS Albert Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  /* White */

  color: #ffffff;
  margin-top: 1rem;
`;
