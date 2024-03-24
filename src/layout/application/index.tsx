import React from "react";
import Navbar from "./nav/navbar";
function Layout({ children,backFn }: { children: React.ReactNode; backFn:()=>void }) {
  return (
    <>
      <Navbar backFn={backFn}  />
      {children}
    </>
  );
}

export default Layout;
