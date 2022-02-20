import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { genderHer } from "../redux/gender";
import SaleBanner from "../components/SaleBanner/SaleBanner";

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
    </>
  );
};

export default HerHome;
