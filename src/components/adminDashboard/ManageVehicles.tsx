import React from 'react';

const ManageVehicles: React.FC = () => {
  return (
    <div className="ml-8 bg-gray-50 m-3 p-4">
       <div className="items-center flex ">
        <h4 className="text-indigo-700 text-xl font-semibold mr-4">Vehicles </h4>
        <h4 className="text-stone-400"> | Today</h4>
      </div>
      <div>
        <button className='bg-indigo-800 p-3 rounded-lg m-6'>Upload</button>
      </div>
    </div>
  );
};

export default ManageVehicles;
