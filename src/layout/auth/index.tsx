import React from "react";
import { ThemeProvider } from "../../components/theme-provider";
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
