import styled from "styled-components";
import { device } from "../../mediaQueries";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${device.tablet`
  grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export const SquareContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Square = styled.img`
  object-fit: cover;
  width: 100%;
  height: 25rem;
  max-height: 80%;

  ${device.laptop`
  height: auto;
  `}
`;

export const PortraitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Portrait = styled.img`
  object-fit: cover;
  width: 80%;
  height: 80%;
`;

export const InfoContainer = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5% 10% 5%;

  ${device.mobileL`
  padding: 0 5% 5% 5%;
  `}

  ${device.tablet`
  grid-column: 3/4;
  justify-content: center;
  padding: 1rem 5%;
  `}
`;

export const Label = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  max-width: 10rem;

  ${device.tablet`
  grid-column: 3/4;
  justify-content: center;
  max-width: 16rem;
  `}
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #111;
  border-radius: 4px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 10rem;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-transform: none;
  user-select: none;
  width: 100%;

  :hover,
  :focus {
    opacity: 0.85;
  }
`;
