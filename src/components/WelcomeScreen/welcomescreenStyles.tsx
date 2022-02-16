import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 50% 50%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100vw;
`;

export const Label = styled(Link)`
  text-decoration: none;
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  color: white;
  text-shadow: 3px 5px 2px #272727;
  z-index: 99;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50vh;
`;

export const Logo = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 100vh;
  color: white;
  text-shadow: 3px 3px 2px #272727;
  font-size: 1rem;
  z-index: 90;
`;
