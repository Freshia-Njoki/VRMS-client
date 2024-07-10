import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import Dashboard from '../components/adminDashboard/AdminDashboard';
import ManageVehicles from '../components/adminDashboard/ManageVehicles';
import ManageUsers from '../components/adminDashboard/ManageUsers';
import Reports from '../components/adminDashboard/Reports';
import LocationBranches from '../components/adminDashboard/LocationBranches';
import SupportTickets from '../components/adminDashboard/SupportTickets';
import FleetManagement from '../components/adminDashboard/FleetManagement';
import { Link, Routes, Route, Router } from 'react-router-dom';

const Admin: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <div className="flex">
      <Sidebar
        sidebar={
          <div className="p-4">
            <ul>
              <li>
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/manage-vehicles">Manage Vehicles</Link>
              </li>
              <li>
                <Link to="/admin/manage-users">Manage Users</Link>
              </li>
              <li>
                <Link to="/admin/reports">Reports</Link>
              </li>
              <li>
                <Link to="/admin/location-branches">Location and Branches</Link>
              </li>
              <li>
                <Link to="/admin/support-tickets">Customer Support Tickets</Link>
              </li>
              <li>
                <Link to="/admin/fleet-management">Fleet Management</Link>
              </li>
            </ul>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
      </Sidebar>
      <div className="flex-grow p-4">
      
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-vehicles" element={<ManageVehicles />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="location-branches" element={<LocationBranches />} />
          <Route path="support-tickets" element={<SupportTickets />} />
          <Route path="fleet-management" element={<FleetManagement />} />
        </Routes>
     
        
      </div>
    </div>
  );
};

export default Admin;
