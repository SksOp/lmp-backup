import { BackIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full  flex justify-center items-center bg-background z-10 px-3 py-5  fixed top-0 border-b">
      <div className="absolute left-4 flex items-center gap-1">
        <Link to={paths.home}>
          <BackIcon className="mb-1" />
        </Link>
      </div>
      <h3 className="text-base font-bold mb-1">Edit profile</h3>
    </nav>
  );
}

export default Navbar;
