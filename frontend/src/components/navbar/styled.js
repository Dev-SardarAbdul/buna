import { Dropdown, Row, Col, Container, NavDropdown } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Input } from "antd";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

export const NavbarWrapper = styled.div`
  .bg-light {
    background-color: #fff !important;
    padding: 15px 0px;
    min-height: 100px;
    border-bottom: 2px solid #f0f0f0;
  }

  .nav-link {
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 15px !important;
    line-height: 37px;
    color: #0f1134 !important;
    font-family: "DM Sans", sans-serif !important;

    @media (max-width: 1199.98px) {
      text-align: center;
    }
  }

  .navbar-brand {
    height: 45px;
    width: 163px;
    margin-top: -0.8rem;
  }

  .ant-input-affix-wrapper {
    border: 1px solid #f0f0f0 !important;
    border-radius: 6px !important;
    width: 286px;

    @media (max-width: 1399.98px) {
      width: 100%;
    }

    @media (max-width: 1199.98px) {
      display: block;
      margin: 0 auto;
      width: 286px;
    }

    @media (max-width: 420px) {
      width: 90%;
    }
  }

  .btnDiv {
    display: flex;
    gap: 10px;

    @media (max-width: 1199.98px) {
      justify-content: center;
      margin-top: 1rem;
    }

    @media (max-width: 991.98px) {
      justify-content: center;
      margin-top: 0rem;
    }

    @media (max-width: 575.98px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const StyledLink = styled.a`
  color: black;

  &:hover {
    color: black;
  }
`;

export const StyledHeader = styled(Dropdown.Header)`
  font-weight: 600;
  padding-left: 0em;
`;

export const StyledDivider = styled(Dropdown.Divider)`
  &.d-md-none {
    display: none;
  }
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  height: 2em;
  padding-left: 0em;
  &:hover {
    outline: none;
    box-shadow: none;
    background: none;
  }
`;

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  padding: 1em;
`;

export const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    width: 40rem;
    height: 17rem;
    margin-top: 1.45rem;

    @media (max-width: 991.98px) {
      margin-top: 0.5rem;
    }

    animation-name: popup;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;

    @keyframes popup {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .dropdown-toggle {
    color: #0f1134 !important;
  }
  .dropdown-toggle::after {
    display: none !important;
  }

  ${(p) =>
    p.searchDropdown &&
    css`
      .dropdown-menu {
        width: 65rem !important;
        height: 31rem;
        margin-left: -42rem;
        margin-top: 2rem;
      }
    `}

  ${(p) =>
    p.isDigitalRtl &&
    css`
      .dropdown-menu {
        margin-left: -22rem !important;
      }
    `}

      ${(p) =>
    p.isBunaPlatformRtl &&
    css`
      .dropdown-menu {
        margin-left: -35rem !important;
      }
    `}
    
 
  @media (max-width: 990px) {
    .dropdown-menu {
      width: 100% !important;
      height: 20rem;
    }
    ${(p) =>
      p.searchDropdown &&
      css`
        .dropdown-menu {
          width: 100% !important;
          height: 100% !important;
          margin-left: 0rem;
          margin-top: 0rem;
        }
      `}
    ${(p) =>
      p.digitalLibrary &&
      css`
        .dropdown-menu {
          height: 100% !important;
          width: 100% !important;
        }
      `}
  }
`;

export const MegaDropdownContainer = styled(Container)`
  .eventsNav {
    padding-bottom: 1em;
  }
  .megaPara {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    padding-top: 0.3rem;
    color: #0f1134;
  }

  .megaPara:nth-child(1) {
    animation: fade-in 1s forwards;

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const SearchInput = styled(Input)`
  height: 2.6rem;
  margin-left: -2rem;

  .ant-input::placeholder {
    font-family: "FS Albert Arabic";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    color: #dbdbdb !important;
  }

  @media (max-width: 1399.98px) {
    margin-left: 0rem;
  }

  .site-form-item-icon {
    /* color: rgba(15, 17, 52, 0.6); */
    fill: red !important;
    font-size: 22px;
    &.anticon svg {
      color: #d9d9d9 !important;
    }
  }

  ${(p) =>
    p.isRtlDataSearch &&
    css`
      margin-left: 0rem !important;
    `}

  ${(p) =>
    p.smallScreen &&
    css`
      display: none !important;
    `}

  ${(p) =>
    p.largerScreen &&
    css`
      display: flex !important;
    `}
   
    
   

  @media(max-width:1440px) {
    width: 100%;
  }

  @media (max-width: 990px) {
    ${(p) =>
      p.largerScreen &&
      css`
        display: none !important;
      `}

    ${(p) =>
      p.smallScreen &&
      css`
        display: flex !important;
      `}
  margin-left: 0rem;
  }
`;

export const Button = styled.button`
  ${(p) =>
    p.login &&
    css`
      background: #224292;
      width: 123px;
      height: 52px;
      border-radius: 30px;
      border: none;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;

      @media (max-width: 575.98px) {
        width: 200px;
      }
    `}
  ${(p) =>
    p.register &&
    css`
      background: #fff;
      width: 123px;
      height: 52px;
      border-radius: 30px;
      color: black;
      border-radius: 30px;
      border: 1px solid #008c9d;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #008c9d;

      @media (max-width: 575.98px) {
        width: 200px;
      }
    `}
`;

export const CustomCaret = styled(RxCaretDown)`
  font-size: 1.4rem;
  margin-left: 0.2rem;
`;

export const NavDiv = styled.div`
  display: flex;

  :nth-child(2) {
    margin-top: 0.5rem;
  }

  :nth-child(3) {
    margin-top: 0.5rem;
  }

  justify-content: space-between;
  padding: 0.4rem;

  &.active {
    border: 1px solid #008c9d;
    background: #eafdff;

    border-radius: 32px;
    color: black;
  }

  .navIcon {
    font-size: 1.3rem;
    color: black;

    &.active {
      color: #008c9d;
    }
  }
`;

export const SearchDropdownDiv = styled.div`
  img {
    border-radius: 7px;
  }
  .title {
    font-size: 0.9rem;
    margin-left: 1rem;
    font-weight: 500;
    padding-top: 1rem;
  }
  .heading {
    font-size: 0.9rem;
    transform: translateY(10px);
  }

  > .rightCol {
    border-left: 1px solid black;
    background: red;
  }
`;

export const SearchedList = styled.div`
  height: 90%;

  border-left: 1px solid #dfdfdf;
  margin: 1rem 0;
`;
