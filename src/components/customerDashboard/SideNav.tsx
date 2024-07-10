import { SquareUserRound, BookHeart, Menu, LogOut, House } from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {

  return (
    <ul className="menu bg-gray-800 min-w-full gap-2 text-base-content min-h-full text-white p-4">
      <li>
        <div className="flex items-center gap-2">
          <Menu />
          <span className="font-bold text-lg cursor-pointer py-5"> <Link to="/dashboard">Dashboard</Link></span>
        </div>
      </li>
      <li>
        <details className="flex flex-col">
          <summary className="flex items-center gap-2 font-bold text-lg cursor-pointer  py-5"> <BookHeart /> Bookings </summary>
          <ul className="pl-6 pt-2">
                        <li><Link to="/current-bookings"  className="flex items-center gap-2 py-5 cursor-pointer">CurrentBookings</Link></li>
                        <li><Link to="/booking-history"  className="flex items-center gap-2 py-5 cursor-pointer">BookingHistory</Link></li>
                    </ul>

        </details>
      </li>
      
      <li>
        <Link to="account-settings"  className="flex gap-2 items-center cursor-pointer py-5">
          <SquareUserRound />
          <span className="font-bold text-lg  ">Settings</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="flex items-center gap-2 cursor-pointer font-bold py-5 text-lg">
        <House />
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center py-5 gap-2">
          <LogOut />
          <span className="font-bold text-lg">Logout</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideNav;
