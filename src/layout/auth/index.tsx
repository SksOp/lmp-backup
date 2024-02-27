import React from "react";
import Navbar from "./nav/navbar";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default AuthLayout;
