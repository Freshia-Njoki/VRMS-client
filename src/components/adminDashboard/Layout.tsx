import { useState } from 'react';
import Home from '../../pages/Home';
import DashboardAdmin from './Dashboard.tsx';
import ManageVehicles from './ManageVehicles.tsx';
import ManageUsers from './ManageUsers.tsx';
import LocationBranches from './LocationBranches.tsx';
import FleetManagement from './FleetManagement.tsx';
import Reports from './Reports.tsx';
import CustomerSupport from './CustomerSupport.tsx';
import Card from '../customerDashboard/Card.tsx';
import SideNav from './Sidenav.tsx';

function Layout() {
  const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

  const handleNavItemClick = (item: string) => {
    setSelectedNavItem(item);
  };
  const renderContent = () => {
    switch (selectedNavItem) {
      case 'vehicles':
        return <ManageVehicles />;
      case 'users':
        return <ManageUsers />
      case 'locationBranches':
        return <LocationBranches />
      case 'fleet-management':
      return <FleetManagement />;
      case 'reports':
        return < Reports />;
      case 'customer-support':
        return <CustomerSupport />;
      default:
        return <DashboardAdmin />;
    }
  };
  return (
    <div className='flex min-h-screen bg-neutral-100 text-neutral-200'>
      <div className='min-w-[15%] hidden md:block'>
        <SideNav onSelect={handleNavItemClick} />
      </div>
      <div className='flex flex-col min-w-[80%]'>

        <div className="h-fit">
          <Card>
            {renderContent()}
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Layout