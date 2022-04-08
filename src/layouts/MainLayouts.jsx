import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
