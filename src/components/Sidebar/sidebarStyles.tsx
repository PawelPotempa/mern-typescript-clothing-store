import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  active: boolean;
}

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  width: 100%;
  top: 40px;
  background-color: white;
  z-index: 99;
`;

export const ItemContainer = styled.ul`
  padding: 20px 15px;
`;

export const TabContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  height: 40px;
`;

export const TabLabel = styled(Link)<IProps>`
  text-decoration: none;
  color: black;
  position: relative;
  flex: 1;
  font-size: clamp(0.75rem, 1.25rem, 1.75rem);
  text-align: center;
  line-height: 40px;
  border-bottom: ${(p) => (p.active ? "2px solid black" : "none")};

  :last-child::before {
    content: "";
    border-left: 1.5px solid lightgrey;
    position: absolute;
    height: 20px;
    left: 0;
    top: 25%;
  }
`;
