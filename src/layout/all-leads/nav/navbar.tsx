import { SearchIcon, SortDescIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={"#"}>
        <SearchIcon />
      </Link>
      <Link to={"#"}>
        <h3 className="text-lg font-bold">Leads</h3>
      </Link>
      <Link to={"#"}>
        <SortDescIcon />
      </Link>
    </nav>
  );
}

export default Navbar;
