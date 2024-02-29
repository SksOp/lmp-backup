import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={paths.resetPassword}>
        <Icon icon="prime:user-edit" className="h-8 w-8" />
      </Link>
      <Link to={paths.home}>
        <h3 className="text-lg font-bold">Tamweel</h3>
      </Link>
      <Link to={paths.home}>
        <Icon icon="carbon:notification" className="h-7 w-7" />
      </Link>
    </nav>
  );
}

export default Navbar;
