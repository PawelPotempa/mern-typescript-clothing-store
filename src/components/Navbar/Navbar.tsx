import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { MouseEvent, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { herNavData } from "../navigationData";
import Sidebar from "../Sidebar/Sidebar";
import * as s from "./navbarStyles";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState("");

  // Show product categories based on the moused over LIElement
  const mouseOverHandler = (e: MouseEvent<HTMLLIElement>) => {
    const listItem = e.target as HTMLLIElement;
    setTarget(listItem.innerText);
  };

  // Hide product categories. Called on <s.Container> in an attempt to leave categories
  // open until mouse leaves the navbar or dropdown completely.
  const mouseLeaveHandler = (e: MouseEvent<HTMLElement>) => {
    setTarget("");
  };

  // Insert a comment here. <----------------------------
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <s.Container onMouseLeave={mouseLeaveHandler}>
        <s.Wrapper>
          <s.Left>
            <s.IconWrapper>
              {!open ? (
                <s.MenuIconBars style={{ fontSize: 32 }} onClick={toggle} />
              ) : (
                <s.MenuIconClose style={{ fontSize: 32 }} onClick={toggle} />
              )}
            </s.IconWrapper>
            <s.Logo to="/">DAPPER.</s.Logo>
          </s.Left>
          <s.Center>
            {herNavData.map((item, index) => {
              return (
                <s.MenuElement key={index} onMouseOver={mouseOverHandler}>
                  {item.title}
                </s.MenuElement>
              );
            })}
          </s.Center>
          <s.Right>
            <s.SearchContainer>
              <s.SearchInput />
              <s.SearchIcon />
            </s.SearchContainer>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </s.Right>
        </s.Wrapper>
        <s.MobileSearch>
          <s.SearchIcon />
          <s.SearchInput placeholder="What are you looking for?" />
        </s.MobileSearch>
      </s.Container>
      {target.length > 0 && <Dropdown target={target} />}
      {open && <Sidebar />}
    </>
  );
};

export default Navbar;
