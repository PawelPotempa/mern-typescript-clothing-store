import React from "react";
import { Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { herNavData, himNavData } from "../navigationData";
import Sidebar from "../Sidebar/Sidebar";
import * as s from "./navbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/sidebarModal";
import Submenu from "../Submenu/Submenu";
import { Link } from "react-router-dom";

// MaterialUI badge styling
const useStyles = makeStyles((theme) => ({
  badge: {
    height: 18,
    minWidth: 16,
    padding: "0px 5px",
    top: 5,
    right: 2,
  },
}));

const Navbar = () => {
  // Redux states
  // TODO: Fix typing on 'state' in all of selectors and Redux altogether.
  const modalState = useSelector((state: any) => state.sidebarModal);
  const genderState = useSelector((state: any) => state.gender);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <s.Container>
        <s.Wrapper>
          <s.Left>
            <s.IconWrapper>
              {!modalState.toggle ? (
                <s.MenuIconBars
                  style={{ fontSize: 32 }}
                  onClick={() => dispatch(openModal())}
                />
              ) : (
                <s.MenuIconClose
                  style={{ fontSize: 32 }}
                  onClick={() => dispatch(closeModal())}
                />
              )}
            </s.IconWrapper>
            <s.Logo to="/" onClick={() => dispatch(closeModal())}>
              DAPPER.
            </s.Logo>
          </s.Left>

          {genderState.gender === "him" ? (
            <s.Center>
              {himNavData.map((item, index) => {
                return <Submenu item={item} key={index} />;
              })}
            </s.Center>
          ) : (
            <s.Center>
              {herNavData.map((item, index) => {
                return <Submenu item={item} key={index} />;
              })}
            </s.Center>
          )}

          <s.Right>
            <s.SearchContainer>
              <s.SearchInput />
              <s.SearchIcon />
            </s.SearchContainer>
            <Badge
              badgeContent={3}
              color="primary"
              classes={{ badge: classes.badge }}
            >
              <Link to="/cart">
                <s.CartIcon />
              </Link>
            </Badge>
          </s.Right>
        </s.Wrapper>
        <s.MobileSearch>
          <s.SearchIcon />
          <s.SearchInput placeholder="What are you looking for?" />
        </s.MobileSearch>
      </s.Container>
      {modalState.toggle && <Sidebar />}
    </>
  );
};

export default Navbar;
