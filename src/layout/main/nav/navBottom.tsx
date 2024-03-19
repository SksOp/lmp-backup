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
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

function NavBottom() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]);
  return (
    <footer className="z-10 fixed bottom-0 right-0 m-7">
      <Drawer>
        <DrawerTrigger>
          {scrollDirection === "down" && <Plus className=" bg-primary text-white rounded-full w-16 h-16 p-4" />}
          {scrollDirection === "up" && (
            <div className="flex items-center text-white rounded-full pl-4 pr-5 py-3 justify-center bg-primary">
              <Plus className=" bg-primary  rounded-full w-10 h-10 pr-2" />
              <h2 className="font-semibold">Apply</h2>
            </div>
          )}
        </DrawerTrigger>
        <DrawerContent className="min-h-[60vh]">
          <ApplicationDrawerContent />
        </DrawerContent>
      </Drawer>
    </footer>
  );
}

export default NavBottom;
