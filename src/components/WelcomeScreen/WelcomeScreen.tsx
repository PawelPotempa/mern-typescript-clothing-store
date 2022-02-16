import React from "react";
import * as s from "./welcomescreenStyles";

const WelcomeScreen = () => {
  return (
    <>
      <s.Container>
        <s.Wrapper>
          <s.Video src="him.mp4" muted loop autoPlay />
          <s.Label to="/him">HIM</s.Label>
        </s.Wrapper>
        <s.Logo>
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
          DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER. DAPPER.
        </s.Logo>
        <s.Wrapper>
          <s.Video src="her.mp4" muted loop autoPlay />
          <s.Label to="/her">HER</s.Label>
        </s.Wrapper>
      </s.Container>
    </>
  );
};

export default WelcomeScreen;
