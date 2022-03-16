import React, { useEffect } from "react";
import { herNavData, himNavData } from "../navigationData";
import Submenu from "../Submenu/Submenu";
import * as s from "./sidebarStyles";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // Redux states
  const genderState = useSelector((state: any) => state.gender);

  // Change overflow on body to hidden when Sidebar component is mounted, change it back to auto when it unmounts.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <s.Container>
      <s.TabContainer>
        <s.TabLabel
          to="/her"
          active={genderState.gender === "her" ? "true" : ""}
        >
          HER
        </s.TabLabel>
        <s.TabLabel
          to="/him"
          active={genderState.gender === "him" ? "true" : ""}
        >
          HIM
        </s.TabLabel>
      </s.TabContainer>
      {genderState.gender === "him" ? (
        <s.ItemContainer>
          {himNavData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </s.ItemContainer>
      ) : (
        <s.ItemContainer>
          {herNavData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </s.ItemContainer>
      )}
    </s.Container>
  );
};

export default Sidebar;
