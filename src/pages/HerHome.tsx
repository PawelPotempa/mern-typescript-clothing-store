import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { genderHer } from "../redux/gender";

const HerHome = () => {
  const dispatch = useDispatch();

  // Redux setState triggers on component mount and whenever dispatch happens.
  useEffect(() => {
    dispatch(genderHer());
  }, [dispatch]);

  return <Navbar />;
};

export default HerHome;
