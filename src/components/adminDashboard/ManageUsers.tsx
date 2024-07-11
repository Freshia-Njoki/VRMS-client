import { ChevronDown } from 'lucide-react';
import React from 'react';

const ManageUsers: React.FC = () => {
  const tableData = [
    { id: 1, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 2, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 3, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 4, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 5, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 6, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 7, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
    { id: 8, name: 'Freshia', email: 'Freshia@gmail.com', phone: '+345 4574 5356' },
  ];
  return (
    <div className="p-4">
       <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
        <h4 className="text-indigo-700 text-xl font-semibold mr-4">Users </h4>
        <h4 className="text-stone-400"> | Today</h4>
      </div>
      <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
      <div className='flex '>
          <div className='flex mr-8 mt-1'><span><ChevronDown /> </span>  <h2  className='text-gray-500 font-semibold'>15</h2></div>
          <div><h2 className="text-2xl font-bold mb-4">Entries per page</h2></div>
          <div className='ml-60 m-4 bg-gray-100 p-2 rounded-lg'><input type="text" className='border border-none cursor-pointer' placeholder='search ...'/></div>
        </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 border">
          <thead className="bg-gray-100 border-gray-200 border">
            <tr>
              <th className="py-2 px-4 border-gray-200 border">ID</th>
              <th className="py-2 px-4 border-gray-200 border">Name</th>
              <th className="py-2 px-4 border-gray-200 border">Email</th>
              <th className="py-2 px-4 border-gray-200 border">Phone No</th>
              <th className="py-2 px-4 border-gray-200 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-gray-200 border">{item.id}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.name}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.email}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.phone}</td>
                <td className="py-2 px-4 border-gray-200 border">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ManageUsers;
