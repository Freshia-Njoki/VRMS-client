import { Link } from "react-router-dom";
import {toast} from 'sonner'

const CurrentBookings = () => {
  const handleBookings = () => {
    toast.info('Booking made successfully')
  }
  
  return (
    <div className="m-6 p-6 bg-white rounded-lg shadow-md max-w-7xl">
       <div className='inline-flex py-7'>
       <h4 className='text-indigo-700 font-semibold'>Vehicle Booking</h4>
     </div>
       <div className="mb-4">
        <label className="block text-gray-700">Your Contact</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your phone number" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Vehicle Number </label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="enter the vehicle ID" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Booking Date</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Return Date</label>
        <input type="date" className="w-full p-2 border border-gray-300 rounded mt-1"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="tenter the location name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location Address</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="123 Main Street" />
      </div>
      <Link to="/dashboard/current-bookings/reservation">
      <button className="w-20 py-2 bg-blue-500 text-white rounded mt-3" onClick={handleBookings}>Book </button>
      </Link>
    </div>
  );
};

export default CurrentBookings;
