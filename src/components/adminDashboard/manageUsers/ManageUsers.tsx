import { ChevronDown } from 'lucide-react';
import { TUser } from './ManageUsersAPI';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { apiDomain } from "../../../utils/utils";
import { toast } from 'sonner';

const ManageUsers = () => {
  const [usersData, setUsersData] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState<TUser | null>(null);
  const [editedUser, setEditedUser] = useState<TUser | null>(null);

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
    try {
      const response = await Axios.delete(`${apiDomain}/users/${id}`);
      if (response.status === 200) {
        toast.success(`User with ID ${id} deleted successfully.`);
        setUsersData(usersData.filter(user => user.id !== id));
      } else {
        toast.error(`Failed to delete user with ID ${id}.`);
      }
    } catch (error) {
      toast.error(`Error deleting user with ID ${id}: ${(error as Error).message}`);
    }
  };

  const openEditModal = (user: TUser) => {
    setEditUserData(user);
    setIsEditing(true);
    setEditedUser(user)
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setEditUserData(null);
    setEditedUser(null);
  };

  const handleSaveEdit = async () => {
  if (editedUser) {
    try {
      const filteredEditedUser = Object.fromEntries(
        Object.entries(editedUser).filter(([key, value]) => value !== null)
      );

      const response = await Axios.put(`${apiDomain}/users/${editedUser.id}`, filteredEditedUser);
      if (response.status === 200) {
        toast.success(`User with ID ${editedUser.id} updated successfully.`);
        setUsersData(usersData.map(user => (user.id === editedUser.id ? editedUser : user)));
        setIsEditing(false);
        setEditedUser(null);
      } else {
        toast.error(`Failed to update user with ID ${editedUser.id}.`);
      }
    } catch (error: any) {
      if (error.response) {
        console.error('Error response:', error.response.data); 
        toast.error(`Error updating user with ID ${editedUser.id}: ${error.response.data.message}`);
      } else {
        console.error('Error:', error.message); 
        toast.error(`Error updating user with ID ${editedUser.id}: ${error.message}`);
      }
    }
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editUserData) {
      setEditedUser(prevUser => ({
        ...prevUser!,
        [name]: name === 'dateField' && !value ? null : value, // Handle null or empty date value
      }));
    }
  };
  
  
  

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditUserData(null);
    setEditedUser(null);
  };

  return (
    <>
      <div className="p-4">
        <div className="items-center flex ml-8 bg-gray-50 m-3 p-4">
          <h4 className="text-indigo-700 text-xl font-semibold mr-4">Users</h4>
          <h4 className="text-stone-400"> | Today</h4>
        </div>
        <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
          <div className='flex '>
            <div className='flex mr-8 mt-1'>
              <span><ChevronDown /></span>
              <h2 className='text-gray-500 font-semibold'>{usersData.length > 0
                        ? `${usersData.length} records`
                        : '0 records'}</h2>
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
                {
                isLoading ? (
                  <tr><td colSpan={5}>Loading...</td></tr>
                ) : usersData.length === 0 ? (
                  <tr><td colSpan={5}>No Data</td></tr>
                ) : (
                  usersData.map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-gray-200 border">{user.id}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.full_name}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.email}</td>
                      <td className="py-2 px-4 border-gray-200 border">{user.contact_phone}</td>
                      <td className="py-2 px-4 border-gray-200 border">
                        <button className="bg-green-500 text-white px-3 py-1 rounded mr-2" onClick={() => openEditModal(user)}>Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  {/* <td colSpan={5}>
                      {usersData.length > 0
                        ? `${usersData.length} records`
                        : '0 records'}
                    </td> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && editUserData && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Edit User</h3>
                    <div className="mt-2">
                      <div className="mb-4">
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-4">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                          value={editedUser?.full_name || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                          value={editedUser?.email || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">Phone No</label>
                        <input
                          type="text"
                          name="contact_phone"
                          id="contact_phone"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                          value={editedUser?.contact_phone || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUsers;
