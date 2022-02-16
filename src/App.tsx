import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HimHome from "./pages/HimHome";
import HerHome from "./pages/HerHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/him" element={<HimHome />} />
        <Route path="/her" element={<HerHome />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
