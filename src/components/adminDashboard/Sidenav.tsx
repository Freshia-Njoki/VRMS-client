import { Ticket, Car, LayoutDashboard, UsersRound, Locate, PencilRuler, ClipboardMinus } from "lucide-react";


function SideNav({onSelect}:any) {
  const handleItemClick = (item:string) => {
    onSelect(item);
  };


  return (
    <ul className="menu bg-gray-800 min-w-full gap-2 text-base-content min-h-full text-white p-4">
      <h3>MANAGEMENT</h3>
      <li>
        <div className="flex items-center gap-2">
          <LayoutDashboard />
          <span className="font-bold text-lg cursor-pointer py-5" onClick={() => handleItemClick('dashboard')}>Dashboard</span>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-2">
        <Car />
          <span className="flex items-center gap-2 font-bold text-lg cursor-pointer  py-5" onClick={() => handleItemClick('vehicles')}>Vehicles</span>
        </div>
      </li>
      
      <li>
        <div className="flex gap-2 items-center cursor-pointer py-5">
          <UsersRound />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('users')}>Users</span>
        </div>
      </li>
     
      <li>
        <div className="flex items-center gap-2 cursor-pointer font-bold py-5 text-lg"  onClick={() => handleItemClick('locationBranches')}>
        <Locate />
        Locations & Branches
        </div>
      </li>
      <li>
        <div className="flex items-center py-5 gap-2">
          <PencilRuler />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('fleet-management')}>Fleet Management</span>
        </div>
      </li>
      <h3 className="p-3">ANALYTICS</h3>
      <li>
        <div className="flex items-center py-5 gap-2">
          <ClipboardMinus />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('reports')}>Reports</span>
        </div>
      </li>
      <h3 className="p-3">SUPPORT</h3>
      <li>
        <div className="flex items-center py-5 gap-2">
          <Ticket />
          <span className="font-bold text-lg"  onClick={() => handleItemClick('customer-support')}>Customer Support</span>
        </div>
      </li>
    </ul>
  );
}

export default SideNav;
