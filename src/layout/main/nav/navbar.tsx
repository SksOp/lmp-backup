import { NotificationIcon, ProfileIcon, SearchIcon } from "@/components/svgs/icon";
import { paths } from "@/router";
import { Link } from "react-router-dom";
import {notifications} from '@/constants/notifications'

function Navbar() {
  return (
    <nav className="w-full bg-background flex justify-between items-center z-10 px-3 py-5 sticky top-0 border-b-2">
      <Link to={paths.profile}>
        <ProfileIcon />
      </Link>
      <Link to={paths.home}>
        <h3 className="text-lg font-bold text-primary">Tamweeli</h3>
      </Link>
      <div className="flex gap-3">
        <SearchIcon />
        <Link to={paths.notifications}>
          <NotificationIcon count={notifications.length} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
