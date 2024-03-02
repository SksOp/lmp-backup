import { paths } from "@/router";
import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={"#"}>
        <Icon icon="ic:baseline-search" className="h-8 w-8" />
      </Link>
      <Link to={"#"}>
        <h3 className="text-lg font-bold">Leads</h3>
      </Link>
      <Link to={"#"}>
        <Icon icon="f7:sort-down" className="h-7 w-7" />
      </Link>
    </nav>
  );
}

export default Navbar;
