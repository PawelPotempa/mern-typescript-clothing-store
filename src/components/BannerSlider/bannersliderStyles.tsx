import styled from "styled-components";
import { device } from "../../mediaQueries";

export const BannerSlider = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Banner = styled.div``;

export const BannerSlogan = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  color: white;

  ${device.tablet`
font-size: 4rem;
`}
`;

export const BannerImage = styled.img`
  object-fit: cover;
  object-position: 50% 0;
  width: 100%;
  min-height: 18rem;

  ${device.tablet`
object-position: 0 0;
`}
`;
