import styled from "styled-components";
import { device } from "../../mediaQueries";
import { Add, Remove } from "@material-ui/icons";

interface IProps {
  width?: string;
}

export const IconWrapper = styled.div`
  ${device.tablet`
  display: none;
  `}
`;

export const PlusIcon = styled(Add)``;

export const MinusIcon = styled(Remove)``;

export const CategoryWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  ${device.tablet`
  flex-direction: column;
  max-width: 30%;
  width: 12rem;
  padding: 0.5rem 0;
  `}
`;

export const Category = styled.ul<IProps>`
  padding: 0;
  font-size: 1.25rem;
  line-height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.width === "narrow" ? "center" : "flex-start"};

  ${device.tablet`
  align-items: center;
  `};
`;

export const CategoryName = styled.p`
  font-weight: 700;
`;

export const CategoryItem = styled.li<IProps>`
  font-size: ${(props) => (props.width === "narrow" ? "1rem" : "1.25rem")};
  list-style-type: none;
  padding: 0 1rem;

  ${device.tablet`
  padding: 0;
  `}
`;
