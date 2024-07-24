import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Register from './components/auth/Register.tsx';
import NotFound from './pages/NotFound.tsx';
import Contact from './components/adminDashboard/Contact.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import About from './pages/About.tsx';
import Dashboard from './pages/Dashboard.tsx';
import DashboardAdmin from './components/adminDashboard/Dashboard.tsx';
import Login from './components/auth/Login.tsx';
import CurrentBookings from './components/customerDashboard/CurrentBookings.tsx';
import SupportTicket from './components/customerDashboard/SupportTicket.tsx';
import BookingHistory from './components/customerDashboard/BookingHistory.tsx';
import MyTickets from './components/customerDashboard/MyTickets.tsx';
import NewTickets from './features/Tickets/NewTickets.jsx';
import ManageVehicles from './components/adminDashboard/ManageVehicles.tsx';
import ManageUsers from './components/adminDashboard/manageUsers/ManageUsers.tsx';
import LocationBranches from './components/adminDashboard/LocationBranches.tsx';
import FleetManagement from './components/adminDashboard/FleetManagement.tsx';
import Reports from './components/adminDashboard/Reports.tsx';
import CustomerSupport from './components/adminDashboard/CustomerSupport.tsx';
import Reservation from './components/stripe/ReserveBook/Reservation.tsx';
import Logout from './components/customerDashboard/Logout.tsx';
import Completion from './components/stripe/Completion.tsx';
import { Toaster } from 'sonner';
import AdminLogin from './components/auth/AdminLogin.tsx';


const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: 'register',
      element: <Register />,
      errorElement: <NotFound />,
    },
    {
      path: 'adminLogin',
      element: <AdminLogin />,
      errorElement: <NotFound />,
    },
    {
      path: 'login',
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: 'contact',
      element: <Contact />,
      errorElement: <NotFound />,
    },
    {
      path: 'about',
      element: <About />,
      errorElement: <NotFound />,
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <SupportTicket />,
          errorElement: <NotFound />
        },
        {
          path: 'current-bookings',
          element: <CurrentBookings />,
          errorElement: <NotFound />,
        },
        {
          path: 'booking-history',
          element: <BookingHistory />,
          errorElement: <NotFound />
        },
        {
          path: 'my-tickets',
          element: <MyTickets />,
          errorElement: <NotFound />
        },
        {
          path: 'new-tickets',
          element: <NewTickets />,
          errorElement: <NotFound />
        },
        {
          path: 'logout',
          element: <Logout />,
          errorElement: <NotFound />
        }
      ]
    },

    {
      path: 'admin-dashboard',
      element: <AdminDashboard />,
      errorElement: <NotFound />,
      children: [

        {
          path: '',
          element: <DashboardAdmin />,
          errorElement: <NotFound />
        },
        {
          path: 'vehicles',
          element: <ManageVehicles />,
          errorElement: <NotFound />
        },
        {
          path: 'users',
          element: <ManageUsers />,
          errorElement: <NotFound />
        },
        {
          path: 'locations-branches',
          element: <LocationBranches />,
          errorElement: <NotFound />
        },
        {
          path: 'fleet-management',
          element: <FleetManagement />,
          errorElement: <NotFound />
        },
        {
          path: 'reports',
          element: <Reports />,
          errorElement: <NotFound />
        },
        {
          path: 'customer-support',
          element: <CustomerSupport />,
          errorElement: <NotFound />
        }

      ]
    },
    {
      path: 'reservation',
      element: <Reservation />,
      errorElement: <NotFound />
    },
    {
      path: 'completion',
      element: <Completion />,
      errorElement: <NotFound />
    }


  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position='top-right'
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          }
        }}
      />
    </>
  )
}

export default App;