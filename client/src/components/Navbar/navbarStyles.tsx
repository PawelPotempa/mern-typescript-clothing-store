import styled from "styled-components";
import { device } from "../../mediaQueries";
import {
  MenuOpen,
  Search,
  Close,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: white;
  z-index: 99;
`;

export const Wrapper = styled.div`
  height: 40px;
  padding: 10px 30px 10px 15px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 10px;

  ${device.tablet`
  display: none;
  `}
`;

export const MenuIconBars = styled(MenuOpen)`
  cursor: pointer;
`;

export const MenuIconClose = styled(Close)`
  cursor: pointer;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  letter-spacing: 0.25em;
  cursor: pointer;
`;

export const Center = styled.ul`
  display: none;
  padding: 0;

  ${device.tablet`
  flex:2; 
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchContainer = styled.div`
  display: none;

  ${device.tablet`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 2px;
  max-width: 100%;
`}
`;

export const MobileSearch = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  height: 40px;

  ${device.tablet`
    display: none;
  `}
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  padding: 0;
`;

export const CartIcon = styled(ShoppingCartOutlined)`
  cursor: pointer;
`;
