import styled from "styled-components";
import { device } from "../../mediaQueries";

export const BannerContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);

  ${device.tablet`
  height: calc(100vh - 40px);
  `}
`;

export const Banner = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
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
