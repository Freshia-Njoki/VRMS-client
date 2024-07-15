import { ChevronDown } from 'lucide-react';
import { TUser } from './ManageUsersAPI';
import Axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useState, useEffect } from 'react';
import { apiDomain } from "../../../utils/utils";

const ManageUsers = () => {
  const [usersData, setUsersData] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await Axios.get(`${apiDomain}/users`);
        const { data } = response;
        setUsersData(data);
      } catch (error) {
        console.error('Error fetching users data:', error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
   
      const response = await Axios.delete(`${apiDomain}/users/${id}`);
      if (response.data && response.data.success) {
        toast.success(`User with ID ${id} deleted successfully.`);
        setUsersData(usersData.filter(user => user.id !== id));
      } else {
        toast.error(`Failed to delete user with ID ${id}.`);
      }
    
  };

  return ( 
    <>
      <Toaster
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          },
        }}
      />
      <div className="p-4">
        <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
          <h4 className="text-indigo-700 text-xl font-semibold mr-4">Users</h4>
          <h4 className="text-stone-400"> | Today</h4>
        </div>
        <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
          <div className='flex '>
            <div className='flex mr-8 mt-1'>
              <span><ChevronDown /></span>
              <h2 className='text-gray-500 font-semibold'>15</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Entries per page</h2>
            </div>
            <div className='ml-60 m-4 bg-gray-100 p-2 rounded-lg'>
              <input type="text" className='border border-none cursor-pointer' placeholder='search ...' />
            </div>
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
                {isLoading ? (
                  <tr><td colSpan={6}>Loading...</td></tr>
                ) : isError ? (
                  <tr>
                    <td colSpan={5}>
                      Error fetching data
                    </td>
                  </tr>
                ) : (
                  usersData && usersData.map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-gray-200 border">{user.id}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.full_name}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.email}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.contact_phone}</td>
                      <td className="py-2 px-4 border-gray-200 border">
                        <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  {/* <td colSpan={6}>
                      {usersData
                        ? `${usersData.length} records`
                        : '0 records'}
                    </td> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
