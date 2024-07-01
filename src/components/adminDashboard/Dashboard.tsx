import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4">Total Bookings: 120</div>
        <div className="bg-white shadow rounded p-4">Revenue: $5400</div>
        <div className="bg-white shadow rounded p-4">New Users: 15</div>
        <div className="bg-white shadow rounded p-4">Vehicles Available: 30</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
