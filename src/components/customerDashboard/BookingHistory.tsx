import { BadgeDollarSign, Clock } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { apiDomain } from '../../utils/utils';
import { toast } from 'sonner';
import { format, differenceInDays } from 'date-fns';

interface TBookingHistory{
  id:number
  vehicle_id: number;
  booking_status : string;
  total_amount: number;
  location_id: number;
  return_date: string;
  booking_date: string;
}
const BookingHistory = () => {
  const [bookings, setBookings] = useState<TBookingHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(`${apiDomain}/booking`, {
          headers: {
            'Authorization': 'Bearer token' 
          }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
      setIsLoading(false)

    };
    
    fetchBookings();
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const calculateDaysLeft = (returnDateString: string) => {
    const returnDate = new Date(returnDateString);
    const today = new Date();
    return differenceInDays(returnDate, today);
  };

  return (
    <div className="py-6 rounded-lg bg-gray-100 max-w-9xl">
      <div className="px-4">
        <div className="flex gap-2 items-center mb-4">
          <h4 className="text-indigo-700 text-xl font-semibold">My Bookings</h4>
          <h4 className="text-stone-400">| Today</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {
          isLoading ? (
            toast.success('Loading booking history')
          ) : bookings.length === 0 ?(
            toast.info('No Data')
          ) : (
            bookings.map((booking, index) => (
            <div key={index} className="border p-4 mr-3 rounded-lg bg-white shadow-md mt-3">
              <div className="flex mb-2">
                <h3 className="font-semibold text-black text-lg">VehicleID: {booking.id}</h3>
              </div>
              <div className="flex  mb-3">
                <div className="flex items-center bg-gray-100 rounded shadow-md p-2 m-3">
                  <FaCheckCircle className="text-blue-500 mr-1" />
                  <p className="text-blue-500 font-semibold">{booking.booking_status}</p>
                </div>
                <div className='flex items-center bg-gray-100 rounded shadow-md p-2 m-3 ml-16'>
                {/* <BadgeDollarSign className="text-green-500 mr-1" /> */}
                  <p className="text-green-500 font-semibold ">{formatDate(booking.booking_date)}</p>
                </div>
                
              </div>
              <div className="flex gap-1 items-center mx-2">
                <p className="font-bold text-gray-500 text-lg ">Amt: ${booking.total_amount}</p>
                <p className="text-blue-700 font-semibold bg-gray-100 rounded shadow-md p-2 ml-4">LocationID: {booking.location_id}</p>
                </div>

              <hr className="my-2" />
              <div className="flex justify-center">
                <p className="text-red-500 text-sm p-2 border bg-red-50 rounded-lg border-none flex gap-3"> <Clock />  {calculateDaysLeft(booking.return_date)} Days left</p>
              </div>
              
                
              
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
