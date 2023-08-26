import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Navitem from "../pages/shared pages/navbar/Navitem";

const Main = () => {
  const location = useLocation();
  const loginLocation =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {!loginLocation && <Navitem></Navitem>}
      <Outlet></Outlet>
      {!loginLocation && <Footer></Footer>}
    </div>
  );
};

export default Main;
