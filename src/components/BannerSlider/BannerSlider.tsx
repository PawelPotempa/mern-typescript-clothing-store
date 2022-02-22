import React from "react";
import * as s from "./bannersliderStyles";
import ProductSlider from "../ProductSlider/ProductSlider";
import { useSelector } from "react-redux";

export interface IProps {
  position: string;
}

const BannerSlider = ({ position }: IProps) => {
  const genderState = useSelector((state: any) => state.gender);

  return (
    <>
      <s.BannerSlider>
        {genderState.gender === "her" ? (
          <s.Banner>
            <s.BannerImage src="herBanner.jpg"></s.BannerImage>
            <s.BannerSlogan>INSPIRACJE</s.BannerSlogan>
          </s.Banner>
        ) : (
          <s.Banner>
            <s.BannerImage src="himBanner.jpg"></s.BannerImage>
            <s.BannerSlogan>INSPIRACJE</s.BannerSlogan>
          </s.Banner>
        )}
        <ProductSlider position={position} />
      </s.BannerSlider>
    </>
  );
};

export default BannerSlider;
