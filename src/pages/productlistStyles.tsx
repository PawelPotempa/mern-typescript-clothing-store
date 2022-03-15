import styled from "styled-components";
import { device } from "../mediaQueries";

export const Container = styled.div`
  padding: 100px 20px 0 20px;

  ${device.tablet`
  padding: 60px 20px 0 20px;
  `}
`;

export const Title = styled.div``;

export const CategoryName = styled.h1``;

export const ItemAmount = styled.span``;

export const FilterContainer = styled.div`
  padding: 1rem 0;
`;

export const Filter = styled.div``;

export const Select = styled.select`
  border: 1px solid lightgrey;
  border-right-width: 0px;
  padding: 1.7px;
  margin-right: 0px;
  border-radius: 0;

  :last-of-type {
    border-right-width: 1px;
  }

  ${device.mobileM`
  padding: 5px;
  `}

  ${device.tablet`
  padding: 10px;
  `}
`;

export const Option = styled.option``;

// Products

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

export const SliderItem = styled.div``;

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
