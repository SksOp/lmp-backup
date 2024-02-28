import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function NavBottom() {
  return (
    <nav className="w-full h-14 bg-background flex justify-between items-center z-10 px-3 py-5 fixed bottom-0 border-t-2">
      <Link to={paths.home}>
        <Icon icon="solar:home-2-bold" className="h-8 w-8" />
      </Link>

      <a href={paths.application}>
        <Icon icon="zondicons:add-solid" className="h-14 w-14 mb-4" />
      </a>
      <Link to={paths.home}>
        <Icon icon="fluent:people-20-regular" className="h-7 w-7" />
      </Link>
    </nav>
  );
}

export default NavBottom;
