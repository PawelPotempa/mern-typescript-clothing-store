import React from "react";
import * as s from "./dropdownStyles";

interface IProps {
  target: string;
}

const Dropdown = ({ target }: IProps) => {
  return (
    <s.Container>
      <s.Wrapper>
        {target === "CLOTHING" && (
          <s.CategoriesContainer>
            <s.Category>Pants</s.Category> <s.Category>Skirts</s.Category>
            <s.Category>T-shirts and tops</s.Category>
            <s.Category>Sweaters</s.Category>
            <s.Category>Jumpsuits</s.Category>
            <s.Category>Sportswear</s.Category>
          </s.CategoriesContainer>
        )}
        {target === "FOOTWEAR" && (
          <s.CategoriesContainer>
            <s.Category>Boots</s.Category> <s.Category>Flip flops</s.Category>
            <s.Category>Sliders</s.Category>
            <s.Category>Trainers</s.Category>
          </s.CategoriesContainer>
        )}
        {target === "ACCESSORIES" && (
          <s.CategoriesContainer>
            <s.Category>Bags & Backpacks</s.Category>{" "}
            <s.Category>Hats & Caps</s.Category>
            <s.Category>Underwear</s.Category>
            <s.Category>Socks</s.Category>
            <s.Category>Scarves</s.Category>
          </s.CategoriesContainer>
        )}
      </s.Wrapper>
    </s.Container>
  );
};

export default Dropdown;
