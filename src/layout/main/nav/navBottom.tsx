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
  const plus = <Plus className=" bg-primary text-white rounded-full w-8 h-8" />;

  return (
    // <Drawer>
    <Link className={cn("flex items-center text-white rounded-full justify-center bg-primary gap-1 p-[0.88rem]", className)} to={paths.application}>
      {scrollDirection && scrollDirection === "down" ? (
        plus
      ) : (
        <>
          {plus}
          <h2 className="font-semibold">Apply</h2>
        </>
      )}
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
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
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
    <footer className="z-10 fixed bottom-9 right-10 md:hidden">
      <ApplyButtonDrawer scrollDirection={scrollDirection} className="shadow-lg" />
    </footer>
  );
}

export default NavBottom;
