import React from "react";
import Navbar from "./nav/navbar";
import NavBottom from "./nav/navBottom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-4">
        {children}
        <NavBottom />
      </div>
    </>
  );
}

export default Layout;
