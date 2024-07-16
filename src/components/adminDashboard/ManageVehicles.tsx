import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { apiDomain } from '../../utils/utils';
import { Toaster, toast } from 'sonner';

interface TVehicleSpecs {
  id: number;
  manufacturer: string;
  model: string;
  year: number
  fuel_type: string;
  transmission: string;
  features: string;
}

const Modal = ({ isOpen, onClose, vehicle, onSave }: any) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(vehicle || {});

  useEffect(() => {
    setFormData(vehicle || {});
  }, [vehicle]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSave= ():TVehicleSpecs [] => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{vehicle ? 'Edit Vehicle' : 'Upload Vehicle'}</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">vehicle ID</label>
          <input
            type="number"
            name="id"
            value={formData.id || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fuel Type</label>
          <input
            type="text"
            name="fuel_type"
            value={formData.fuel_type || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Engine Capacity</label>
          <input
            type="text"
            name="engine_capacity"
            value={formData.engine_capacity || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Transmission</label>
          <input
            type="text"
            name="transmission"
            value={formData.transmission || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700">Seating capacity</label>
          <input
            type="text"
            name="seating_capacity"
            value={formData.seating_capacity || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div> */}
        <div className="mb-3">
          <label className="block text-gray-700">Features</label>
          <input
            type="text"
            name="features"
            value={formData.features || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          className="bg-indigo-800 text-white px-4 py-2 rounded-lg mr-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-lg"
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
  const [vehiclesData, setVehiclesData] = useState<TVehicleSpecs[]>([]);
  const [editedVehicle, setEditedVehicle] = useState<TVehicleSpecs | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      try {
        const response = await Axios.get<TVehicleSpecs[]>(`${apiDomain}/vehicleSpecs`);
        const { data } = response;
        setVehiclesData(data);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      } 
      setLoading(false);
      
    };

    fetchVehicles();
  }, []);

  const openModal = (vehicle: TVehicleSpecs | null = null) => {
    setEditedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditedVehicle(null);
    setIsModalOpen(false);
  };

  const handleSave = async (vehicle: TVehicleSpecs) => {
    try {
      if (vehicle.id) {
        const response = await Axios.put(`${apiDomain}/vehicleSpecs/${vehicle.id}`, vehicle);
        if (response.status === 200) {
          setVehiclesData(vehiclesData.map(v => (v.id === vehicle.id ? vehicle : v)));
          toast.success(`Vehicle with ID ${vehicle.id} updated successfully.`);
        }
      } else {
        const response = await Axios.post(`${apiDomain}/vehicleSpecs`, vehicle);
        setVehiclesData([...vehiclesData, response.data]);
        toast.success(`Vehicle added successfully.`);
      }
    } catch (error) {
      toast.error(`Error saving vehicle: ${(error as Error).message}`);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await Axios.delete(`${apiDomain}/vehicleSpecs/${id}`);
      if (response.status === 200) {
        setVehiclesData(vehiclesData.filter(vehicle => vehicle.id !== id));
        toast.success(`Vehicle with ID ${id} deleted successfully.`);
      } else {
        toast.error(`Failed to delete vehicle with ID ${id}.`)
      }
    } catch (error) {
      toast.error(`Error deleting vehicle with ID ${id}: ${(error as Error).message}`);
    }
  };
  const handleEdit = (vehicle: TVehicleSpecs) => {
    setEditedVehicle(vehicle);
    openModal(vehicle);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedVehicle(prevVehicle => ({
      ...prevVehicle!,
      [name]: value,
    }));
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
      <div className="ml-8 bg-gray-50 m-3 p-4">
        <div className="items-center flex">
          <h4 className="text-indigo-700 text-xl font-semibold mr-4">Vehicles</h4>
          <h4 className="text-stone-400"> | Today</h4>
        </div>
        <div>
          <button className='bg-indigo-800 p-3 rounded-lg m-6' onClick={() => openModal ()}>Upload Car</button>
        </div>
      </div>

      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} vehicle={editedVehicle} onSave={handleSave} />}

      <div className="ml-8 bg-gray-50 m-3 p-4 text-gray-600">
        <div className='flex '>
          <div className='flex mr-8 mt-1'>
            <span><ChevronDown /></span>
            <h2 className='text-gray-500 font-semibold'>
              {vehiclesData.length > 0 ? `${vehiclesData.length} records` : '0 records'}
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Entries per page</h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-200 border">
            <thead className="bg-gray-100 border-gray-200 border">
              <tr>
                <th className="py-2 px-4 border-gray-200 border">#</th>
                <th className="py-2 px-4 border-gray-200 border">Manufacturer</th>
                <th className="py-2 px-4 border-gray-200 border">Transmission</th>
                <th className="py-2 px-4 border-gray-200 border">Features</th>
                <th className="py-2 px-4 border-gray-200 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
              loading ? (
                <tr><td colSpan={5}>Loading...</td></tr>
              ) : vehiclesData.length === 0 ? (
                <tr><td colSpan={5}>No Data</td></tr>
              ) : (
                vehiclesData.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td className="py-2 px-4 border-gray-200 border">{vehicle.id}</td>
                    <td className="py-2 px-4 border-gray-200 border">{vehicle.manufacturer}</td>
                    <td className="py-2 px-4 border-gray-200 border">{vehicle.transmission}</td>
                    <td className="py-2 px-4 border-gray-200 border">{vehicle.features}</td>
                    <td className="py-2 px-4 border-gray-200 border">
                      <button className="bg-green-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleEdit(vehicle)}>Edit</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};


// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   vehicle: TVehicleSpecs | null;
//   onSave: (vehicle: TVehicleSpecs) => void;
// }


export default ManageVehicles;
