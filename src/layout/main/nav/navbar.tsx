import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <a href="/">
        <Icon icon="prime:user-edit" className="h-8 w-8" />
      </a>
      <a href="/">
        <h3 className="text-lg font-bold">Tamweel</h3>
      </a>
      <a href="/">
        <Icon icon="carbon:notification" className="h-7 w-7" />
      </a>
    </nav>
  );
}

export default Navbar;
