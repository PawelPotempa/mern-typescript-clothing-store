import React, { useState } from "react";
import { herNavData, himNavData } from "../navigationData";
import Submenu from "../Submenu/Submenu";
import * as s from "./sidebarStyles";

const Sidebar = () => {
  const [gender, setGender] = useState("HER");

  return (
    <s.Container>
      <s.TabContainer>
        <s.TabLabel
          to="/her"
          active={gender === "HER" && true}
          onClick={() => setGender("HER")}
        >
          HER
        </s.TabLabel>
        <s.TabLabel
          to="/him"
          active={gender === "HIM" && true}
          onClick={() => setGender("HIM")}
        >
          HIM
        </s.TabLabel>
      </s.TabContainer>
      {gender === "HIM" ? (
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
