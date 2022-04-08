import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import About from "./pages/About";
import Adress from "./pages/Adress";
import Home from "./pages/Home";
import Publish from "./pages/Publish";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/about" element={<About />} />
        <Route path="/publish" element={<Publish />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;