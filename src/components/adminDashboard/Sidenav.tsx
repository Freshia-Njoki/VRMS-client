import { Ticket, Car, LayoutDashboard, UsersRound, Locate, PencilRuler, ClipboardMinus } from "lucide-react";
import { Link } from "react-router-dom";


function SideNav() {
  return (
    <ul className="menu bg-gray-800 min-w-full gap-2 text-base-content min-h-full text-white p-4">
      <h3>MANAGEMENT</h3>
      <li>
        <div className="flex items-center gap-2">
          <LayoutDashboard />
          <Link to ="" className="font-bold text-lg cursor-pointer py-5">Dashboard</Link>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-2">
        <Car />
          <Link to="vehicles" className="flex items-center gap-2 font-bold text-lg cursor-pointer  py-5">Vehicles</Link>
        </div>
      </li>
      
      <li>
        <div className="flex gap-2 items-center cursor-pointer py-5">
          <UsersRound />
          <Link to="users" className="font-bold text-lg">Users</Link>
        </div>
      </li>
     
      <li>
        <div className="flex items-center gap-2 cursor-pointer font-bold py-5 text-lg">
        <Locate />
        <Link to="locations-branches">Locations & Branches</Link>
        </div>
      </li>
      <li>
        <div className="flex items-center py-5 gap-2">
          <PencilRuler />
          <Link to="fleet-management" className="font-bold text-lg">Fleet Management</Link>
        </div>
      </li>
      <h3 className="p-3">ANALYTICS</h3>
      <li>
        <div className="flex items-center py-5 gap-2">
          <ClipboardMinus />
          <Link to="reports" className="font-bold text-lg" >Reports</Link>
        </div>
      </li>
      <h3 className="p-3">SUPPORT</h3>
      <li>
        <div className="flex items-center py-5 gap-2">
          <Ticket />
          <Link to="customer-support" className="font-bold text-lg">Customer Support</Link>
        </div>
      </li>
    </ul>
  );
}

export default SideNav;
