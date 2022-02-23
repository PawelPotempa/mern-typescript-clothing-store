import styled from "styled-components";
import { device } from "../../mediaQueries";

export const BannerContainer = styled.header`
  position: relative;
  padding-top: 80px;
  height: 100vh;

  ${device.tablet`
  padding-top: 40px;
  height: 100vh;
  `}
`;

export const Banner = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;

  ${device.mobileL`
  object-position: 0 10%;
  `}
`;

export const BannerText = styled.p`
  position: absolute;
  bottom: 0;
  padding: 4rem 2rem;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;

  ${device.tablet`
font-size: 5rem;
`}

  :last-of-type {
    font-size: 1.5rem;
    padding: 2rem 2rem;

    ${device.tablet`
font-size: 2.5rem;
`}
  }
`;
