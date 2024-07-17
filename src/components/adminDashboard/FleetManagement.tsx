import {useEffect, useState } from 'react'
import Axios from 'axios';
import { apiDomain } from '../../utils/utils';

interface TFleetManagement{
  id: number;
  acquisition_date : string;
  depreciation_rate: number;
  maintenance_cost: number;
  status: string;
  current_value:number;
}

function FleetManagement() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [fleetManagementData, setTFleetManagementData] = useState<TFleetManagement[]>([])
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  useEffect(() => {
    const fetchFleet = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await Axios.get(`${apiDomain}/fleet`)
        const { data } = response;
        setTFleetManagementData(data);
      } catch (error) {
        console.error('Error fetching fleet data', error);
        setIsError(true)
      }
      setIsLoading(false)
    };
    fetchFleet();
  }, [])

    useEffect(() => {
      const storedCheckedRows = JSON.parse(localStorage.getItem('checkedRows') || '[]');
      setCheckedRows(storedCheckedRows);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('checkedRows', JSON.stringify(checkedRows));
    }, [checkedRows]);
  
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  const handleCheckboxChange = (id: number) => {
    const newCheckedRows = [...checkedRows];
    const index = newCheckedRows.indexOf(id);
    if (index === -1) {
      newCheckedRows.push(id);
    } else {
      newCheckedRows.splice(index, 1);
    }
    setCheckedRows(newCheckedRows);
  };

  const isChecked = (id: number) => {
    return checkedRows.includes(id);
  };

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
            {
             isLoading ? (
              <tr> <td colSpan={5}>Loading...</td></tr>
            ) : fleetManagementData.length === 0 ?(
              <tr><td colSpan={5}>No Data</td></tr>
            ) : (
            fleetManagementData.map((item) => (
              <tr key={item.id} className={isChecked(item.id) ? 'line-through' : ''}>
              <td className="py-2 px-4 border-gray-50 text-gray-50 border">
                <input
                  type="checkbox"
                  checked={isChecked(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                /></td>
                <td className="py-2 px-4 border-gray-200 border">{formatDate(item.acquisition_date)}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.depreciation_rate}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.current_value}</td>
                <td className="py-2 px-4 border-gray-200 border">{item.maintenance_cost}</td>
                <td className="py-2 px-4 border-gray-200 border">
                  <button className={`bg-blue-500 text-white px-3 py-1 rounded mr-2 ${isChecked(item.id) ? 'line-through' : ''}`}>{item.status}</button>
                </td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default FleetManagement
