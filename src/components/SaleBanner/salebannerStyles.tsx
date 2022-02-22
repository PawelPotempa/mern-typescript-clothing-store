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
  font-size: clamp(1.5rem, 3rem, 4rem);
  color: white;

  :last-of-type {
    font-size: clamp(1rem, 1.5rem, 2rem);
    padding: 2rem 2rem;
  }
`;
