import styled from "styled-components";

export const PodcastWrapper = styled.div`
  .podcastUpperWrapper {
    background-color: #f7f7f7;
    padding: 5rem 0;
    position: relative;

    .supportIcon
    {
      position: absolute;
      right:0;
      top: 10%;
    }

    .headphone {
      display: block;
      margin-left: auto;
      cursor: pointer;

      @media (max-width: 991.98px) {
        transform: translateY(-20px);
      }
    }
  }

  .seeMoreBtn {
    width: 108.38px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0f1134;
    margin-top: 2rem;

    @media (max-width: 991.98px) {
      margin-bottom: 2rem;
    }
  }
`;
