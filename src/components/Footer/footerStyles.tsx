import styled from "styled-components";
import { device } from "../../mediaQueries";

interface IProps {
  width?: string;
}

export const Container = styled.footer<IProps>`
  border-top: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${(props) =>
    props.width === "narrow" ? "0 0 1rem 0" : "3rem 0 1rem 0"};
  ${(props) =>
    device.tablet(`max-width: ${props.width === "narrow" ? "70%" : "100%"}`)};
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${device.tablet`
  flex-direction: row;
  justify-content: center;
  `}
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  padding: 1rem 0.5rem 0 0.5rem;
`;
