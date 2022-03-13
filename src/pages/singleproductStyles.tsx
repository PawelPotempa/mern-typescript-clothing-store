import styled from "styled-components";
import { device } from "../mediaQueries";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: 90px 10px 10px 10px;
  margin-bottom: -3rem;
  flex-direction: column;

  ${device.tablet`
  padding: 50px 10px 10px 10px;
  flex-direction: row;
  `}
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  flex: 1;

  ${device.tablet`
  flex: 1.5;
  `}

  ${device.laptopL`
  flex: 1;`}
`;

///////////////////////////////// SLIDER START

export const SliderItem = styled.div``;

export const ProductImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  padding: 0 10px;

  :first-of-type {
    padding: 0 5px;
  }

  ${device.tablet`
   height: 90vh;
 `}
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

///////////////////////////////// SLIDER FINISH

export const InfoContainer = styled.div`
  flex: 1;
  margin: 1rem;

  ${device.tablet`
    flex: 1;
  margin: 1rem 2rem;
  `}

  ${device.laptopL`
    flex: 0.7;
  margin: 1rem 10rem;
  `}
`;

export const Title = styled.h1`
  font-weight: 300;
`;

export const Description = styled.p`
  margin: 1rem 0;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

export const FilterContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;

  :last-of-type {
    flex-direction: column;
  }
`;

export const FilterTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 0.5rem;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  width: 100%;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid #000;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
