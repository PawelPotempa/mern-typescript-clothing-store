import React, { useState, MouseEvent } from "react";
import * as s from "./submenuStyles";
import { useMediaQuery } from "react-responsive";

export interface IProps {
  item:
    | {
        title: string;
        path: string;
        subMenu?: undefined;
      }
    | {
        title: string;
        path: string;
        subMenu: {
          title: string;
          path: string;
        }[];
      };
}

const Submenu = ({ item }: IProps) => {
  const [subnav, setSubnav] = useState(false);

  // Show product categories.
  const mouseOverHandler = (e: MouseEvent<HTMLElement>) => {
    setSubnav(true);
  };

  // Hide product categories.
  const mouseLeaveHandler = (e: MouseEvent<HTMLElement>) => {
    setSubnav(false);
  };

  // Show submenu items.
  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    setSubnav(!subnav);
  };

  // Map through items inside subMenu property inside of relevant navigationData object.
  const populateSubmenu = item.subMenu?.map((item, index) => {
    return <s.SubmenuItem key={index}>{item.title}</s.SubmenuItem>;
  });

  // Detect the device. Possible fix required: while using devtools, sometimes navbar items become unresponsive
  // until refresh. NOT RELEVANT DURING NORMAL USE.
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <s.ItemWrapper
        onMouseEnter={
          isTabletOrMobile && item.subMenu ? () => false : mouseOverHandler
        }
        onClick={isTabletOrMobile && item.subMenu ? clickHandler : () => false}
        onMouseLeave={isTabletOrMobile ? () => false : mouseLeaveHandler}
      >
        <s.SidebarItem>{item.title}</s.SidebarItem>
        {item.subMenu && subnav ? (
          <s.IconWrapper>
            <s.MinusIcon />
          </s.IconWrapper>
        ) : item.subMenu ? (
          <s.IconWrapper>
            <s.PlusIcon />
          </s.IconWrapper>
        ) : null}
      </s.ItemWrapper>
      {isTabletOrMobile ? console.log("MOBILE") : console.log("DESKTOP")}
      <s.SubnavWrapper
        onMouseEnter={isTabletOrMobile ? () => false : mouseOverHandler}
        onMouseLeave={isTabletOrMobile ? () => false : mouseLeaveHandler}
      >
        {/* Populate submenu ONLY if subMenu property exists inside of the object. Controlled by subnav state. */}
        {subnav && populateSubmenu}
      </s.SubnavWrapper>
    </>
  );
};

export default Submenu;
