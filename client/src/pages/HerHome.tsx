import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { genderHer } from "../redux/gender";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import LookbookBanner from "../components/LookbookBanner/LookbookBanner";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import DoubleBanner from "../components/DoubleBanner/DoubleBanner";
import CenterBanner from "../components/CenterBanner/CenterBanner";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Footer from "../components/Footer/Footer";

const HerHome = () => {
  const dispatch = useDispatch();

  // Redux setState triggers on component mount and whenever dispatch happens.
  useEffect(() => {
    dispatch(genderHer());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <SaleBanner />
      <LookbookBanner />
      <BannerSlider position="top" background="herBanner.jpg" />
      <DoubleBanner />
      <CenterBanner />
      <ProductSlider position="bottom" />
      <Footer />
    </>
  );
};

export default HerHome;
