import { BackIcon, KebabMenuIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={paths.home}>
        <BackIcon />
      </Link>
      <Link to={paths.home}>
        <h3 className="text-lg font-bold text-foreground">Notification</h3>
      </Link>
      <Link to={paths.home}>
        <KebabMenuIcon />
      </Link>
    </nav>
  );
}

export default Navbar;
