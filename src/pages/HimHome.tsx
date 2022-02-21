import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { genderHim } from "../redux/gender";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import LookbookBanner from "../components/LookbookBanner/LookbookBanner";

const HimHome = () => {
  const dispatch = useDispatch();

  // Redux setState triggers on component mount and whenever dispatch happens.
  useEffect(() => {
    dispatch(genderHim());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <SaleBanner />
      <LookbookBanner />
    </>
  );
};

export default HimHome;
