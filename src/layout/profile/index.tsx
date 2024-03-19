import React from "react";
import Navbar from "./nav/navbar";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default ProfileLayout;
