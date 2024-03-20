import React from "react";
import Navbar from "./nav/navbar";
import NavBottom from "./nav/navBottom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-4 md:py-4 md:px-8">{children}</div>
      <NavBottom />
    </>
  );
}

export default Layout;
