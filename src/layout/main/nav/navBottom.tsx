import ApplicationDrawerContent from "@/components/application";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { paths } from "@/router";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function NavBottom() {
  return (
    <nav className="w-full h-14 bg-background flex justify-between  items-center z-10 px-3 py-5 fixed bottom-0  shadow-[0_-8px_15px_-8px_rgba(0,0,0,0.2)] border-t-2">
      <Link to={paths.home}>
        <Icon icon="solar:home-2-bold" className="h-8 w-8" />
      </Link>

      <Drawer>
        <DrawerTrigger>
          <Icon icon="zondicons:add-solid" className="h-14 w-14 mb-4" />
        </DrawerTrigger>
        <DrawerContent className="min-h-[90vh]">
          <ApplicationDrawerContent />
        </DrawerContent>
      </Drawer>
      <Link to={paths.allLead}>
        <Icon icon="fluent:people-20-regular" className="h-7 w-7" />
      </Link>
    </nav>
  );
}

export default NavBottom;
