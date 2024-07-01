import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Register from './components/auth/Register.tsx';
import NotFound from './pages/NotFound.tsx';
import Contact from './components/adminDashboard/Contact.tsx';
import About from './pages/About.tsx';
import Login from './components/auth/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import AccountSettings from './components/customerDashboard/AccountSettings.tsx';
import CurrentBookings from './components/customerDashboard/CurrentBookings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<NotFound/>,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement:<NotFound/>,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement:<NotFound/>,
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement:<NotFound/>,
  },
  {
    path: 'about',
    element: <About />,
    errorElement:<NotFound/>,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    errorElement:<NotFound />
  },
  {
    path: 'account-settings',
    element: <AccountSettings/>,
    errorElement:<NotFound />
  },
  {
    path: 'current-bookings',
    element: <CurrentBookings/>,
    errorElement:<NotFound />
  }
  // {
  //   path: 'dashboard',
  //   element: <Dashboard />,
  //   errorElement:<Error/>,
  //   children: [
  //     {
  //       path: "users",
  //       element: <Users />,
  //     },
  //     {
  //       path: "user-profiles",
  //       element: <UserProfiles />,
  //     }
  //   ]
  // },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
