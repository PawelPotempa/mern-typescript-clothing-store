import React from "react";
import * as s from "./bannersliderStyles";
import ProductSlider from "../ProductSlider/ProductSlider";
import { useSelector } from "react-redux";

export interface IProps {
  position: string;
  background?: string;
}

const BannerSlider = ({ position, background }: IProps) => {
  const genderState = useSelector((state: any) => state.gender);

  return (
    <>
      <s.BannerSlider>
        {genderState.gender === "her" ? (
          <s.Banner>
            <s.BannerSlogan>get inspired.</s.BannerSlogan>
          </s.Banner>
        ) : (
          <s.Banner>
            <s.BannerSlogan>get inspired.</s.BannerSlogan>
          </s.Banner>
        )}
        <s.ProductSliderContainer
          style={{ backgroundImage: `url("${background}")` }}
          background={genderState.gender}
        >
          <ProductSlider position={position} />
        </s.ProductSliderContainer>
      </s.BannerSlider>
    </>
  );
};

export default BannerSlider;
