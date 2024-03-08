import ApplicationDrawerContent from "@/components/application";
import HomeIcon, { EditIcon, LeadIcon } from "@/components/svgs/icon";
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
    <footer className="z-10 fixed bottom-0 right-0 m-5">
      {/* <Link to={paths.home}>
        <div className="flex flex-col justify-center items-center p-2">
          <HomeIcon />
          <p className="text-black">Home</p>
        </div>
      </Link> */}

      <Drawer>
        <DrawerTrigger>
          <EditIcon className="" />
        </DrawerTrigger>
        <DrawerContent className="min-h-[90vh]">
          <ApplicationDrawerContent />
        </DrawerContent>
      </Drawer>
      {/* <Link to={paths.allLead}>
        <div className="flex flex-col justify-center items-center p-2">
          <LeadIcon />
          <p className="text-black">Leads</p>
        </div>
      </Link> */}
    </footer>
  );
}

export default NavBottom;
