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

function NavBottom() {
  return (
    <footer className="z-10 fixed bottom-0 right-0 m-5">
      <Drawer>
        <DrawerTrigger>
          <EditIcon className="" />
        </DrawerTrigger>
        <DrawerContent className="min-h-[60vh]">
          <ApplicationDrawerContent />
        </DrawerContent>
      </Drawer>
    </footer>
  );
}

export default NavBottom;
