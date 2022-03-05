import styled from "styled-components";
import { device } from "../../mediaQueries";

export const Container = styled.footer`
  width: 100%;
  border-top: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem 0;
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
