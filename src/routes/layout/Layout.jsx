import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { listData } from "../../Lib/dummydata";

import Navbar from "../../Components/Navbar/Navbar";

const Layout = () => {
  const data = listData;
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
