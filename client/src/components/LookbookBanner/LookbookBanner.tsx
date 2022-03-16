import React from "react";
import * as s from "./lookbookbannerStyles";
import { useSelector } from "react-redux";

const LookbookBanner = () => {
  const genderState = useSelector((state: any) => state.gender);

  return (
    <s.Container>
      <s.SquareContainer>
        {genderState.gender === "her" ? (
          <s.Square src="herSquare.jpg" />
        ) : (
          <s.Square src="himSquare.jpg" />
        )}
      </s.SquareContainer>
      <s.PortraitContainer>
        {genderState.gender === "her" ? (
          <s.Portrait src="herPortrait.jpg" />
        ) : (
          <s.Portrait src="himPortrait.jpg" />
        )}
      </s.PortraitContainer>
      <s.InfoContainer>
        <s.Label>color expansion.</s.Label>
        <s.Description>
          New, electrifying lookbook gives you an impulse for spring awakening.
        </s.Description>
        <s.Button>SEE MORE</s.Button>
      </s.InfoContainer>
    </s.Container>
  );
};

export default LookbookBanner;
