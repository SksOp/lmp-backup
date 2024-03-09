import { HamburgerMenuIcon } from "@/components/svgs/icon";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function NavBottom() {
  return (
    <footer className="z-10 fixed bottom-0 right-0 m-5">
      <Drawer>
        <DrawerTrigger>
          <HamburgerMenuIcon className="w-10 h-10 p-2 bg-primary rounded-full" />
        </DrawerTrigger>
        <DrawerContent className="min-h-[90vh]">
          <>here will be the generic and non generic actions</>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}

export default NavBottom;
