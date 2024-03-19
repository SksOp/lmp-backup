import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full  flex justify-center items-center bg-background z-10 px-3 py-5 fixed top-0 border-b">
      <div className="absolute left-4 flex items-center gap-1">
        <Link to={paths.home}>
          <Icon icon="bx:arrow-back" width="1.2rem" height="1.2rem" className="" />
        </Link>
      </div>
      <h3 className="text-lg font-bold">Edit Profile</h3>
    </nav>
  );
}

export default Navbar;
