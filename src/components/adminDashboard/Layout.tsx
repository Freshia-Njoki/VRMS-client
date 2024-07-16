import { Outlet } from 'react-router-dom';
import Card from '../customerDashboard/Card.tsx';
import SideNav from './Sidenav.tsx';

function Layout() {
  return (
    <div className='flex min-h-screen bg-neutral-100 text-neutral-200'>
      <div className='min-w-[15%] hidden md:block'>
        <SideNav />
      </div>
      <div className='flex flex-col min-w-[80%]'>

        <div className="h-fit">
          <Card>
            <Outlet />
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Layout