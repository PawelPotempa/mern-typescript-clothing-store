import React from "react";
import * as s from "./salebannerStyles";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const SaleBanner = () => {
  const genderState = useSelector((state: any) => state.gender);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <s.BannerContainer>
          {genderState.gender === "her" ? (
            <s.Banner src="herMobileBanner.mp4" muted loop autoPlay />
          ) : (
            <s.Banner src="himMobileBanner.mp4" muted loop autoPlay />
          )}
          <s.BannerText>latest collection.</s.BannerText>
          <s.BannerText>autumn 2022</s.BannerText>
        </s.BannerContainer>
      ) : (
        <s.BannerContainer>
          {genderState.gender === "her" ? (
            <s.Banner src="herDesktopBanner.mp4" muted loop autoPlay />
          ) : (
            <s.Banner src="himDesktopBanner.mp4" muted loop autoPlay />
          )}
          <s.BannerText>latest collection.</s.BannerText>
          <s.BannerText>autumn 2022</s.BannerText>
        </s.BannerContainer>
      )}
    </>
  );
};

export default SaleBanner;
