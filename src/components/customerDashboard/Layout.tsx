
// import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'
import Card from './Card'
import CurrentBookings from './CurrentBookings';
import { useState } from 'react';
import Home from '../../pages/Home';
import SupportTicket from './SupportTicket';
import BookingHistory from './BookingHistory';
import MyTickets from './MyTickets';
import NewTickets from './NewTickets';

function Layout() {
  const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

  const handleNavItemClick = (item: string) => {
    setSelectedNavItem(item);
  };
  const renderContent = () => {
    switch (selectedNavItem) {
      case 'current-bookings':
        return <CurrentBookings />;
      case 'booking-history':
        return <BookingHistory />;
      case 'my-tickets':
        return <MyTickets />
      case 'new-tickets':
        return <NewTickets />
      case 'account-settings':
      // return <AccountSettings />;
      case 'home':
        return <Home />;
      default:
        return <SupportTicket />;
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