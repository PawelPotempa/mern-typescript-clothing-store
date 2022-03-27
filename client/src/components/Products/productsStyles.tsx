import styled from "styled-components";
import { device } from "../../mediaQueries";

export const Container = styled.div``;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;

  ${device.tablet`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  `}

  ${device.laptop`
  grid-template-columns: repeat(4, 1fr);
  `}

  ${device.laptopL`
  grid-template-columns: repeat(5, 1fr);
  `}
`;

export const SliderItem = styled.div`
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100%;
`;
export const ProductName = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;
export const ProductPrice = styled.p`
  font-weight: 700;
`;
