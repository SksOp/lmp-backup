import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={paths.allLead}>
        <Icon icon="fluent-mdl2:back" className="h-5 w-5" />
      </Link>

      <Link to={paths.home}>
        <Icon icon="bi:three-dots-vertical" className="h-7 w-7" />
      </Link>
    </nav>
  );
}

export default Navbar;
