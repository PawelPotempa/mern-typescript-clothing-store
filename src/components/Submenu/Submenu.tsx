import React, { useState } from "react";
import * as s from "./submenuStyles";

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

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <>
      <s.ItemWrapper onClick={item.subMenu && showSubnav}>
        <s.SidebarItem>{item.title}</s.SidebarItem>
        {item.subMenu && subnav ? (
          <s.MinusIcon />
        ) : item.subMenu ? (
          <s.PlusIcon />
        ) : null}
      </s.ItemWrapper>
      {subnav &&
        item.subMenu?.map((item, index) => {
          return <s.SubmenuItem key={index}>{item.title}</s.SubmenuItem>;
        })}
    </>
  );
};

export default Submenu;
