import React from "react";
import { Outlet } from "react-router";
import Footer from "~/components/layout/footer/Footer";
import Navbar from "~/components/layout/navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
