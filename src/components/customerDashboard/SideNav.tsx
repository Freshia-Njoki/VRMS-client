import { Users, SquareUserRound, BookHeart, History, Menu, LogOut, House } from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <ul className="menu bg-base-200 min-w-full gap-2 text-base-content min-h-full text-black p-4">
      <li>
        <div className="flex items-center gap-2">
          <Menu />
          <span className="font-bold text-">Dashboard</span>
        </div>
      </li>
      <li>
        <details className="flex flex-col">
          <summary className="flex items-center gap-2 font-bold text-lg"> <BookHeart /> Bookings </summary>
          <ul>
                        <li><Link to="/current-bookings">CurrentBookings</Link></li>
                        <li><Link to="/booking-history">BookingHistory</Link></li>
                    </ul>

        </details>
      </li>
      
      <li>
        <Link to="/account-settings" className="flex items-center gap-2">
          <SquareUserRound />
          <span className="font-bold text-lg">Settings</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
        <House />
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center gap-2">
          <LogOut />
          <span className="font-bold text-lg">Logout</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideNav;
