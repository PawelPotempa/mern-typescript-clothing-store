import styled from "styled-components";
import { device } from "../../mediaQueries";

interface IProps {
  background: string;
}

export const BannerSlider = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Banner = styled.div``;

export const BannerSlogan = styled.span`
  position: absolute;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  line-height: 652px;

  ${device.tablet`
font-size: 5rem;
`}

  ${device.laptop`
`}
`;

export const ProductSliderContainer = styled.div<IProps>`
  background-repeat: no-repeat;
  background-position-x: ${(p) => (p.background === "her" ? "70%" : "25%")};
`;
