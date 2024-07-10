import { Ticket, Car, History, BadgePlus, BookCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";

function SideNav({onSelect}:any) {
  const handleItemClick = (item:string) => {
    onSelect(item);
  };


  return (
    <ul className="menu bg-gray-800 min-w-full gap-2 text-base-content min-h-full text-white p-4">
      <h3>Dashboard</h3>
      <li>
        <div className="flex items-center gap-2">
          <Ticket />
          <span className="font-bold text-lg cursor-pointer py-5" onClick={() => handleItemClick('support-ticket')}>Support Ticket</span>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-2">
        <Car />
          <span className="flex items-center gap-2 font-bold text-lg cursor-pointer  py-5" onClick={() => handleItemClick('current-bookings')}>Current Bookings </span>
        </div>
      </li>
      
      <li>
        <div className="flex gap-2 items-center cursor-pointer py-5">
          <History />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('booking-history')}>Booking History</span>
        </div>
      </li>
      <h6>Support</h6>
      <li>
        <div className="flex items-center gap-2 cursor-pointer font-bold py-5 text-lg"  onClick={() => handleItemClick('my-tickets')}>
        <BookCheckIcon />
          My Tickets
        </div>
      </li>
      <li>
        <div className="flex items-center py-5 gap-2">
          <BadgePlus />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('new-tickets')}>New Tickets</span>
        </div>
      </li>
    </ul>
  );
}

export default SideNav;
