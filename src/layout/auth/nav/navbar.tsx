import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav className="w-full  flex justify-center items-center bg-background z-10 px-3 py-5 fixed top-0 ">
      <h3 className="text-lg font-bold">Tamweel</h3>
      {/* an absolute help button to keep the above h3 in middle */}
      <div className="absolute right-4 flex items-center gap-1">
        <p className="text-primary text-sm ">Help</p>
        <Icon
          icon="mdi:tooltip-help-outline"
          width="1.2rem"
          height="1.2rem"
          className="text-primary translate-y-[2px]"
        />
      </div>
    </nav>
  );
}

export default Navbar;
