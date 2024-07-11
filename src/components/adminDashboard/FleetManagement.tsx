import React from 'react'

function FleetManagement() {
  const tableData = [
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'completed' },
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'Pending' },
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'completed' },
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'cancelled' },
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'Processing' },
    { id: 5, acqDate: '2024-06-30', depRate: '0.12', currentVal: '15000.00', maintenanceCost: '200.00', status:'completed' }
  ];
  return (
    <div>
       <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
        <h4 className="text-indigo-700 text-xl font-semibold mr-4">Fleet Management </h4>
        <h4 className="text-stone-400"> | Today</h4>
      </div>
      <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
      <h2 className="text-2xl font-bold mb-4">Available Locations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 border">
          <thead className="bg-gray-100 border-gray-200 border">
            <tr>
              <th className="py-2 px-4 border-gray-200 border">#</th>
              <th className="py-2 px-4 border-gray-200 border">acqDate</th>
              <th className="py-2 px-4 border-gray-200 border">depRate</th>
              <th className="py-2 px-4 border-gray-200 border">currentVal</th>
              <th className="py-2 px-4 border-gray-200 border">maintenanceCost</th>
              <th className="py-2 px-4 border-gray-200 border">status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-gray-50 text-gray-50 border"><input type="checkbox" name="" id="" /></td>
                <td className="py-2 px-4 border-gray-200 border">{item.acqDate}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.depRate}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.currentVal}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.maintenanceCost}</td>
                <td className="py-2 px-4 border-gray-200 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">{item.status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default FleetManagement
