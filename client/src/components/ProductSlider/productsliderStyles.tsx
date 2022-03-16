import styled from "styled-components";
import { device } from "../../mediaQueries";

interface IProps {
  banner: string;
}

export const Container = styled.div<IProps>`
  padding-top: ${(p) => (p.banner === "top" ? "30rem" : "4rem")};
  overflow: hidden;
`;

export const SliderItem = styled.div`
  padding: 0 5%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;
export const ProductName = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProductPrice = styled.p`
  font-weight: 700;
`;

export const ArrowContainer = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - 3rem);
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border: 2px solid lightgrey;
  cursor: pointer;
  z-index: 99;

  :first-of-type {
    left: 10px;
  }

  :last-of-type {
    right: 10px;
  }

  ${device.tablet`
  display: flex;
  `}
`;
