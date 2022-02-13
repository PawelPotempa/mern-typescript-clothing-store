import styled from "styled-components";
import { device } from "../../mediaQueries";
import { MenuOpen, Search } from "@material-ui/icons";

export const Wrapper = styled.div`
  height: 40px;
  padding: 10px 15px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
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

export const MenuIcon = styled(MenuOpen)`
  cursor: pointer;
  font-size: 36px;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.25em;
`;

export const Center = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;

  ${device.tablet`
  flex:2; 
  display: flex;
  `}
`;

export const MenuElement = styled.li`
  list-style-type: none;
  font-size: 1rem;
  padding: 20px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchContainer = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 2px;
  width: clamp(110px, 70%, 90%);
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  padding: 0;
`;
