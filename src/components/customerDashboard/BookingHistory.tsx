const BookingHistory = () => {
  const bookings = [
    { id: 'VehicleID1', status: 'Booking Status', paymentStatus: 'Payment Status', address: 'Location Address', daysLeft: 3, amount: 89.97 },
    { id: 'VehicleID2', status: 'Booking Status', paymentStatus: 'Payment Status', address: 'Location Address', daysLeft: 2, amount: 89.97 },
    { id: 'VehicleID3', status: 'Booking Status', paymentStatus: 'Payment Status', address: 'Location Address', daysLeft: 1, amount: 89.97 },
    { id: 'VehicleID4', status: 'Booking Status', paymentStatus: 'Payment Status', address: 'Location Address', daysLeft: 5, amount: 89.97 },
  ];

  return (
    <div className="py-6 rounded-lg  h-full max-w-7xl">
      <h2 className="text-xl font-bold mb-4">My Bookings | Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {bookings.map((booking, index) => (
          <div key={index} className="border p-4 rounded-lg bg-white shadow-md">
            <h3 className="font-semibold">{booking.id}</h3>
            <p>{booking.status}</p>
            <p>{booking.paymentStatus}</p>
            <p>{booking.address}</p>
            <p className="text-red-500">{booking.daysLeft} days left</p>
            <p className="font-bold">Amt: ${booking.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;
