import Axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import {toast} from 'sonner'
import { apiDomain } from "../../utils/utils";

const CurrentBookings = () => {

  const [contact, setContact] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [amount, setAmount] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [bookingStatus, setBookingStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await Axios.get(`${apiDomain}/vehicle`);
        setVehicles(response.data);
      } catch (error) {
        console.error('Failed to fetch vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);
  // const [locationName, setLocationName] = useState('');
  // const [locationAddress, setLocationAddress] = useState('');
 
  const handleBookings = async () => {
    const bookingData = {
      contact: contact,
      vehicle_id: parseInt(vehicleId),
      total_amount: parseFloat(amount),
      booking_status: bookingStatus
    };

    try {
      const response = await Axios.post(`${apiDomain}/booking`, bookingData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlt7ImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiYWRkcmVzcyI6IjEyMyBFbG0gU3RyZWV0Iiwicm9sZSI6InVzZXIifV0sInJvbGUiOlt7ImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiYWRkcmVzcyI6IjEyMyBFbG0gU3RyZWV0Iiwicm9sZSI6InVzZXIifV0sImV4cCI6MTcyMDcwNjM5OH0.RvPMWGLzR-7xhdAxguIN_6NyUau4A-3xyXTesxFycWw'
        }
      });
      toast.success('Booking made successfully');
      console.log(response.data);
      setContact('');
      setVehicleId('');
      setAmount('');
      setBookingStatus('');

      navigate("/reservation");
    } catch (error) {
      toast.error('Failed to make booking');
      console.error('Error:', error);
    }
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookingStatus(e.target.value);
  };
  return (
    <div className="m-6 p-6 text-black bg-white rounded-lg shadow-md max-w-7xl">
       <div className='inline-flex py-7'>
       <h4 className='text-indigo-700 font-semibold'>Vehicle Booking</h4>
     </div>
       <div className="mb-4">
        <label className="block text-gray-700">Your Contact</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter your phone number" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Vehicle Number </label>
        <select
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          className="w-full p-2 border bg-gray-300 rounded mt-1"
        >
          <option value="">Select Vehicle</option>
          {vehicles.map((vehicle: any) => ( // Adjust type 'any' to the correct type of vehicle objects
            <option className="bg-gray-300" key={vehicle.id} value={vehicle.id}>
              {vehicle.id}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total Amount</label>
        <input type="number" className=" w-full p-2 border border-gray-300 rounded mt-1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter the total amount"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Booking Status</label>
        <select
        id="bookingStatus"
        className="w-full p-2 border bg-gray-300 rounded mt-1"
        value={bookingStatus}
        onChange={handleStatusChange}
      >
        <option value="">Select Booking Status</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Completed">Completed</option>
        <option value="Rejected">Rejected</option>
        <option value="On Hold">On Hold</option>
        <option value="Arrived">Arrived</option>
        <option value="No Show">No Show</option>
      </select>
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-700">Location Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" value={locationName} onChange={(e) => setLocationName(e.target.value)} placeholder="enter the location name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location Address</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" value={locationAddress}
          onChange={(e) => setLocationAddress(e.target.value)} placeholder="123 Main Street" />
      </div> */}
      {/* <Link to="/dashboard/current-bookings/reservation"> */}
      <button className="w-20 py-2 bg-blue-500 text-white rounded mt-3" onClick={handleBookings}>Book </button>
      {/* </Link> */}
    </div>
  );
};

export default CurrentBookings;
