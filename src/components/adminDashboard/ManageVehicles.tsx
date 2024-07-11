import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Modal</h2>
        <p className="text-gray-700 mb-4">Add your modal content here.</p>
        <button
          className="bg-indigo-800 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ManageVehicles: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };  const tableData = [
    { id: 1, name: 'Item 1', description: 'auto', price: '10.50' },
    { id: 2, name: 'Item 2', description: 'auto', price: '20.30' },
    { id: 3, name: 'Item 3', description: 'manual', price: '30.99' },
    { id: 4, name: 'Item 4', description: 'manual', price: '40.87' },
    { id: 5, name: 'Item 5', description: 'auto', price: '50.50' },
  ];

  return (
    <>
      <div className="ml-8 bg-gray-50 m-3 p-4">
        <div className="items-center flex">
          <h4 className="text-indigo-700 text-xl font-semibold mr-4">Vehicles</h4>
          <h4 className="text-stone-400"> | Today</h4>
        </div>
        <div>
          <button className='bg-indigo-800 p-3 rounded-lg m-6' onClick={openModal}>Upload Car</button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
        <div className='flex '>
          <div className='flex mr-8 mt-1'><span><ChevronDown /> </span>  <h2  className='text-gray-500 font-semibold'>15</h2></div>
          <div><h2 className="text-2xl font-bold mb-4">Entries per page</h2></div>
        </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 border">
          <thead className="bg-gray-100 border-gray-200 border">
            <tr>
              <th className="py-2 px-4 border-gray-200 border">#</th>
              <th className="py-2 px-4 border-gray-200 border">Manufacturer</th>
              <th className="py-2 px-4 border-gray-200 border">Transmission</th>
              <th className="py-2 px-4 border-gray-200 border">Rental_rate</th>
              <th className="py-2 px-4 border-gray-200 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-gray-200 border">{item.id}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.name}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.description}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.price}</td>
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
    </>
  );
};

export default ManageVehicles;
