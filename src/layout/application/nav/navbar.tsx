import { paths } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-center items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <h3 className="text-lg font-bold">New Leasing request</h3>
      <Link to={paths.home} className="text-red-500 absolute right-2">
        Cancel
      </Link>
    </nav>
  );
}

export default Navbar;
