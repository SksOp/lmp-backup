import { NotificationIcon, ProfileIcon, SearchIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Profile } from "@/sections/profile/profle";
import { useAuth } from "@/hooks/useAuth";
import { notifications } from "@/constants/notifications";

function Navbar() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <nav className="w-full bg-background flex justify-between items-center z-20 px-4 md:px-8 py-3 sticky top-0 border border-b-1">
      <Link to={paths.profile} className="md:hidden">
        <ProfileIcon />
      </Link>
      <Link to={paths.home}>
        <h3 className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold text-foreground underline underline-offset-4 decoration-1">
          Tamweeli
        </h3>
      </Link>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden md:flex">
            <ProfileIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Profile className="" user={user} />
          </DropdownMenuContent>
        </DropdownMenu>
        <SearchIcon />
        <Link to={paths.notifications}>
          <NotificationIcon count={notifications.length} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
