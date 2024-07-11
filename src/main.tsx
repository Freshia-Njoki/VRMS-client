import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
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
import NewTickets from './components/customerDashboard/NewTickets.tsx';
import ManageVehicles from './components/adminDashboard/ManageVehicles.tsx';
import ManageUsers from './components/adminDashboard/ManageUsers.tsx';
import LocationBranches from './components/adminDashboard/LocationBranches.tsx';
import FleetManagement from './components/adminDashboard/FleetManagement.tsx';
import Reports from './components/adminDashboard/Reports.tsx';
import CustomerSupport from './components/adminDashboard/CustomerSupport.tsx';

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
  },
  {
    path: 'support-ticket',
    element: <SupportTicket />,
    errorElement: <NotFound />
  },
  {
    path: 'current-bookings',
    element: <CurrentBookings />,
    errorElement: <NotFound />
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
  }
  ,
  {
    path: 'admin-dashboard',
    element: <AdminDashboard />,
    errorElement: <NotFound />
  },
  {
    path: 'dashboard',
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
    path: 'locationsBranches',
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

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
