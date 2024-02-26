import { Icon } from "@iconify/react";
import React from "react";

function NavBottom() {
  return (
    <nav className="w-full h-14 bg-background flex justify-between items-center z-10 px-3 py-5 sticky bottom-0 border-t-2">
      <a href="/">
        <Icon icon="solar:home-2-bold" className="h-8 w-8" />
      </a>

      <a href="/">
      <Icon icon="zondicons:add-solid" className="h-14 w-14 mb-4" />
      </a>
      <a href="/">
        <Icon icon="fluent:people-20-regular" className="h-7 w-7" />
      </a>
    </nav>
  );
}

export default NavBottom;
