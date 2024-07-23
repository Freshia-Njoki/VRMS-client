import { Ticket, Car, History, BadgePlus, BookCheckIcon, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <ul className="menu bg-gray-800 min-w-full gap-2 text-base-content min-h-full text-white p-4">
      <h3>Dashboard</h3>
      <li>
        <div className="flex items-center gap-2">
          <Ticket />
          <Link to="" className="font-bold text-lg cursor-pointer py-5">Support Ticket</Link>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-2">
          <Car />
          <Link to="current-bookings" className="flex items-center gap-2 font-bold text-lg cursor-pointer  py-5">Make Bookings </Link>
        </div>
      </li>

      <li>
        <div className="flex gap-2 items-center cursor-pointer py-5">
          <History />
          <Link to="booking-history" className="font-bold text-lg">Booking History</Link>
        </div>
      </li>
      <h6>Support</h6>
      <li>
        <div className="flex items-center gap-2 cursor-pointer font-bold py-5 text-lg">
          <BookCheckIcon />
          <Link to="my-tickets">My Tickets</Link>
        </div>
      </li>
      <li>
        <div className="flex items-center py-5 gap-2">
          <BadgePlus />
          <Link to="new-tickets" className="font-bold text-lg">New Tickets</Link>
        </div>
      </li>
      <li>
        <div className="flex items-center py-5 gap-2">
          <LogOut />
          <Link to="logout">Logout</Link>
        </div>
      </li>
    </ul>
  );
}

export default SideNav;
