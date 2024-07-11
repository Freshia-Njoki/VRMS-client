import React from 'react';

const LocationBranches: React.FC = () => {
  const tableData = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: '$10.00', RD:'2024-06-30'},
    { id: 2, name: 'Item 2', description: 'Description 2', price: '$20.00', RD:'2024-06-30' },
    { id: 3, name: 'Item 3', description: 'Description 3', price: '$30.00', RD:'2024-06-30' },
    { id: 4, name: 'Item 4', description: 'Description 4', price: '$40.00', RD:'2024-06-30' },
    { id: 5, name: 'Item 5', description: 'Description 5', price: '$50.00', RD:'2024-06-30' },
  ];
  return (
    <div className="p-4">
     <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
        <h4 className="text-indigo-700 text-xl font-semibold mr-4">Location and Branches </h4>
        <h4 className="text-stone-400"> | Today</h4>
      </div>
      <div className="ml-8 bg-gray-50 m-3 p-4">
      <h2 className="text-2xl font-bold mb-4">Table Example</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 border">
          <thead className="bg-gray-100 border-gray-200 border">
            <tr>
              <th className="py-2 px-4 border-gray-200 border">ID</th>
              <th className="py-2 px-4 border-gray-200 border">Name</th>
              <th className="py-2 px-4 border-gray-200 border">Description</th>
              <th className="py-2 px-4 border-gray-200 border">Price</th>
              <th className="py-2 px-4 border-gray-200 border">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-gray-200 border">{item.id}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.name}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.description}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.price}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.RD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default LocationBranches;
