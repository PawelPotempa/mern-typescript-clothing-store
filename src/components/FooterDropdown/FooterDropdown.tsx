import React, { useState, useEffect, MouseEvent } from "react";
import * as s from "./footerdropdownStyles";
import { useMediaQuery } from "react-responsive";

export interface IProps {
  category: {
    title: string;
    path: string;
    subMenu: {
      title: string;
      path: string;
    }[];
  };
}

const FooterDropdown = ({ category }: IProps) => {
  const [subnav, setSubnav] = useState(false);

  // Detect the device. Possible fix required: while using devtools, sometimes navbar items become unresponsive
  // until refresh. NOT RELEVANT DURING NORMAL USE.
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  // We reset the subnav on mount and everytime isNotMobile changes in order to prevent dropdown staying open
  // despite screen resolution change.
  useEffect(() => {
    setSubnav(false);
    console.log("I see that!");
  }, [isNotMobile]);

  // Show submenu items.
  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    setSubnav(!subnav);
    console.log(subnav);
  };

  return (
    <s.CategoryWrapper onClick={isNotMobile ? () => false : clickHandler}>
      <s.Category>
        <s.CategoryName>{category.title}</s.CategoryName>

        {subnav &&
          category.subMenu?.map((item) => {
            return <s.CategoryItem>{item.title}</s.CategoryItem>;
          })}
        {isNotMobile &&
          category.subMenu?.map((item) => {
            return <s.CategoryItem>{item.title}</s.CategoryItem>;
          })}
      </s.Category>
      {!isNotMobile && subnav ? (
        <s.IconWrapper>
          <s.MinusIcon style={{ fontSize: "2rem" }} />
        </s.IconWrapper>
      ) : !isNotMobile ? (
        <s.IconWrapper>
          <s.PlusIcon style={{ fontSize: "2rem" }} />
        </s.IconWrapper>
      ) : null}
    </s.CategoryWrapper>
  );
};

export default FooterDropdown;
