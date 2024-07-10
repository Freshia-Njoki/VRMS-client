import { BadgeDollarSign, Clock } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';

const BookingHistory = () => {
  const bookings = [
    { id: 'VehicleID: 1', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 3, amount: 89.97 },
    { id: 'VehicleID: 2', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 2, amount: 89.97 },
    { id: 'VehicleID: 3', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 1, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
    { id: 'VehicleID: 4', status: 'active', paymentStatus: 'completed', address: '123 Main St', daysLeft: 5, amount: 89.97 },
  ];

  return (
    <div className="py-6 rounded-lg bg-gray-100 max-w-9xl">
      <div className="px-4">
        <div className="flex gap-2 items-center mb-4">
          <h4 className="text-indigo-700 text-xl font-semibold">My Bookings</h4>
          <h4 className="text-stone-400">| Today</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {bookings.map((booking, index) => (
            <div key={index} className="border p-4 mr-3 rounded-lg bg-white shadow-md mt-3">
              <div className="flex mb-2">
                <h3 className="font-semibold text-black text-lg">{booking.id}</h3>
              </div>
              <div className="flex  mb-3">
                <div className="flex items-center bg-gray-100 rounded shadow-md p-2 m-3">
                  <FaCheckCircle className="text-blue-500 mr-1" />
                  <p className="text-blue-500 font-semibold">{booking.status}</p>
                </div>
                <div className='flex items-center bg-gray-100 rounded shadow-md p-2 m-3 ml-16'>
                <BadgeDollarSign className="text-green-500 mr-1" />
                  <p className="text-green-500 font-semibold ">{booking.paymentStatus}</p>
                </div>
                
              </div>
              <div className="flex gap-1 items-center mx-2">
                <p className="font-bold text-gray-500 text-lg ">Amt: ${booking.amount}</p>
                <p className="text-blue-700 font-semibold bg-gray-100 rounded shadow-md p-2 ml-4">Location: {booking.address}</p>
                </div>

              <hr className="my-2" />
              <div className="flex justify-center">
                <p className="text-red-500 text-sm p-2 border bg-red-50 rounded-lg p-2 border-none flex gap-3"> <Clock />{booking.daysLeft} Days left</p>
              </div>
              
                
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
