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
