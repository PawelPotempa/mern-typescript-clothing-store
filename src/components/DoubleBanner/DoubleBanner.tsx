import React from "react";
import * as s from "./doublebannerStyles";
import { useSelector } from "react-redux";

const DoubleBanner = () => {
  const genderState = useSelector((state: any) => state.gender);

  return (
    <s.Container>
      <s.Left>
        <s.Image
          src={
            genderState.gender === "her"
              ? "herDoubleBannerLeft.jpg"
              : "himDoubleBannerLeft.jpg"
          }
        />
        <s.Text>
          spring
          <br />
          newcomers.
        </s.Text>
      </s.Left>
      <s.Right>
        <s.Image
          src={
            genderState.gender === "her"
              ? "herDoubleBannerRight.jpg"
              : "himDoubleBannerRight.jpg"
          }
        />
        <s.Text>accessories.</s.Text>
      </s.Right>
    </s.Container>
  );
};

export default DoubleBanner;
