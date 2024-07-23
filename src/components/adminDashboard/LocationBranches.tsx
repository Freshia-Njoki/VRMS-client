import Axios from 'axios';
import { useEffect, useState } from 'react';
import { apiDomain } from '../../utils/utils';

interface TLocationBranch {
  id: number;
  name: string;
  address: string;
  contact_phone: string;
  updated_at: string
}
const LocationBranches: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [locationBranchData, setLocationBranchData] = useState<TLocationBranch[]>([])
  useEffect(() => {
    const fetchLocation = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await Axios.get(`${apiDomain}/locationBranch`)
        const { data } = response;
        console.log(data);
        setLocationBranchData(data);
      } catch (error) {
        console.error('Error fetching location and branch data', error);
        setIsError(true)
      }
      setIsLoading(false)
    };
    fetchLocation();
  }, [])
 
   const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  return (
    <div className="p-4">
     <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
        <h4 className="text-indigo-700 text-xl font-semibold mr-4">Location and Branches </h4>
        <h4 className="text-stone-400"> | Today</h4>
      </div>
      <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
      <h2 className="text-2xl font-bold mb-4">Available Locations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 border">
          <thead className="bg-gray-100 border-gray-200 border">
            <tr>
              <th className="py-2 px-4 border-gray-200 border">#</th>
              <th className="py-2 px-4 border-gray-200 border">Location Name</th>
              <th className="py-2 px-4 border-gray-200 border">Address</th>
              <th className="py-2 px-4 border-gray-200 border">Contact</th>
              <th className="py-2 px-4 border-gray-200 border">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ? (
                <tr> <td colSpan={5}>Loading...</td></tr>
              ) : locationBranchData.length === 0 ?(
                <tr><td colSpan={5}>No Data</td></tr>
              ) : (
                locationBranchData.map((LocationBranch) => (
              <tr key={LocationBranch.id}>
                <td className="py-2 px-4 font-bold border-gray-200 border">{LocationBranch.id}</td>
                <td className="py-2 px-4 border-gray-200 border">{LocationBranch.name}</td>
                <td className="py-2 px-4 border-gray-200 border">{LocationBranch.address}</td>
                <td className="py-2 px-4 border-gray-200 border">{LocationBranch.contact_phone}</td>
                <td className="py-2 px-4 border-gray-200 border">{formatDate(LocationBranch.updated_at)}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default LocationBranches;