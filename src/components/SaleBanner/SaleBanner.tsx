import React from "react";
import * as s from "./salebannerStyles";
import { useMediaQuery } from "react-responsive";

const SaleBanner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <s.BannerContainer>
          <s.Banner src="mobileBanner.mp4" muted loop autoPlay />
          <s.BannerText>latest collection.</s.BannerText>
          <s.BannerText>autumn 2022</s.BannerText>
        </s.BannerContainer>
      ) : (
        <s.BannerContainer>
          <s.Banner src="desktopBanner.mp4" muted loop autoPlay />
          <s.BannerText>latest collection.</s.BannerText>
          <s.BannerText>autumn 2022</s.BannerText>
        </s.BannerContainer>
      )}
    </>
  );
};

export default SaleBanner;
