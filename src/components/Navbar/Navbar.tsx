import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import * as s from "./navbarStyles";

const Navbar = () => {
  return (
    <s.Wrapper>
      <s.Left>
        <s.IconWrapper>
          <s.MenuIcon style={{ fontSize: 32 }} />
        </s.IconWrapper>
        <s.Logo>DAPPER.</s.Logo>
      </s.Left>
      <s.Center>
        <s.MenuElement>NEW</s.MenuElement>
        <s.MenuElement>CLOTHES</s.MenuElement>
        <s.MenuElement>SHOES</s.MenuElement>
        <s.MenuElement>ACCESSORIES</s.MenuElement>
        <s.MenuElement>SALE</s.MenuElement>
      </s.Center>
      <s.Right>
        <s.SearchContainer>
          <s.SearchInput />
          <s.SearchIcon />
        </s.SearchContainer>
        <Badge badgeContent={3} color="primary">
          <ShoppingCartOutlined />
        </Badge>
      </s.Right>
    </s.Wrapper>
  );
};

export default Navbar;
