import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { genderHer } from "../redux/gender";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import LookbookBanner from "../components/LookbookBanner/LookbookBanner";
import ProductSlider from "../components/ProductSlider/ProductSlider";

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
      <ProductSlider position="top" />
    </>
  );
};

export default HerHome;
