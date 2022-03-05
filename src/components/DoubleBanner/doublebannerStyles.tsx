import styled from "styled-components";
import { device } from "../../mediaQueries";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 0;
  ${device.tablet`
  flex-direction: row;
  padding: 4rem 2%;
  `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 3% 0;

  ${device.tablet`
  padding: 0 1%;
  `}
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 3% 0;

  ${device.tablet`
  padding: 0 1%;
  `}
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Text = styled.span`
  position: absolute;
  max-width: 100%;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;

  ${device.tablet`
font-size: 4rem;
`}

  ${device.laptop`
font-size: 5rem;
`}
`;
