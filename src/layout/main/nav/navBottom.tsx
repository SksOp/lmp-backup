import ApplicationDrawerContent from "@/components/application";
import HomeIcon, { LeadIcon } from "@/components/svgs/icon";
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
    <footer className="w-full h-14 bg-background flex justify-between  items-center z-10 px-3 py-5 fixed bottom-0  shadow-[0_-8px_15px_-8px_rgba(0,0,0,0.2)] border-t-2">
      <Link to={paths.home}>
        <div className="flex flex-col justify-center items-center p-2">
          <HomeIcon />
          <p className="text-black">Home</p>
        </div>
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
        <div className="flex flex-col justify-center items-center p-2">
          <LeadIcon />
          <p className="text-black">Leads</p>
        </div>
      </Link>
    </footer>
  );
}

export default NavBottom;
