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
import { cn } from "@/lib/utils";
import { paths } from "@/router";
import { ClassValue } from "clsx";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ApplyButtonDrawer({ scrollDirection, className }: { scrollDirection?: "up" | "down"; className?: ClassValue }) {
  return (
    // <Drawer>
      <Link to={paths.application}>
      <div className={cn("", className)}>
        {scrollDirection === "down" && <Plus className=" bg-primary text-white rounded-full w-16 h-16 p-4" />}
        {scrollDirection ? (
          scrollDirection === "up" && (
            <div className="flex items-center text-white rounded-full pl-4 pr-5 py-3 justify-center bg-primary">
              <Plus className=" bg-primary  rounded-full w-12 h-6 pr-2 " />
              <h2 className="font-semibold">Apply</h2>
            </div>
          )
        ) : (
          <div className="flex items-center text-white rounded-full pl-4 pr-5 py-3 justify-center bg-primary md:mb-4">
            <Plus className=" bg-primary  rounded-full w-12 h-6 pr-2" />
            <h2 className="font-semibold">Apply</h2>
          </div>
        )}
      </div>
      </Link>
    //   <DrawerContent className="min-h-[60vh]">
    //     {/* <ApplicationDrawerContent /> */}
    //   </DrawerContent>
    // </Drawer>
  );
}

function NavBottom() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
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
    <footer className="z-10 fixed bottom-0 right-0 m-7 md:hidden">
      <ApplyButtonDrawer scrollDirection={scrollDirection} />
    </footer>
  );
}

export default NavBottom;
