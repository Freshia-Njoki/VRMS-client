import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { CircleDollarSign, Clock, Grip, Info } from 'lucide-react';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Reports: React.FC = () => {
  const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Tickets',
        data: [10, 20, 35, 45, 30, 20, 50, 60, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };
  return (
    <div className="ml-12 h-full max-w-7xl">
      <div className="items-center  ml-8 bg-gray-50 m-3 p-4">
        <h4 className="text-indigo-800 text-xl font-semibold mr-4">Overview | </h4>
        <h4 className="text-stone-400">Detailed information about your store</h4>
      </div>

      <div className="flex justify-between items-center mb-4 ml-8">
        <div className="bg-white p-6 flex gap-16 rounded-lg shadow-lg w-full mr-2">
          <span className='mt-10 mb-4 bg-red-100 rounded-lg' > <Clock className="text-red-600 m-4 " /> </span>
          <span className="">
            <h2 className='text-gray-500 font-semibold py-4'>Return</h2>
            <span className='flex gap-6 items-center'><h4 className='font-semibold text-black' style={{ fontSize: '2rem' }}>$956.00</h4> <h2 className='text-red-400 font-semibold'>-5%</h2></span>
          </span>

        </div>

        <div className="bg-white p-6 flex gap-16 rounded-lg shadow-lg w-full mr-2">
          <span className='mt-10 mb-4 bg-blue-100 rounded-lg' > <CircleDollarSign className="text-blue-600 m-4 " /> </span>
          <span className="">
            <h2 className='text-gray-500 font-semibold py-4'>Marketing</h2>
            <span className='flex gap-6 items-center'><h4 className='font-semibold text-black' style={{ fontSize: '2rem' }}>5,566.01</h4> <h2 className='text-green-400 font-semibold'>+ 15%</h2></span>
          </span>

        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md h-full ml-8">
        <div className='inline-flex w-full items-center mx-6'>
          <div>
            <h3 className="text-2xl font-bold text-gray-400">overall revenue</h3> <br />
            <span className='flex gap-6 items-center mb-2'><h4 className='font-semibold text-black' style={{ fontSize: '2rem' }}>5,566.01</h4> <h2 className='text-green-400 font-semibold'>+ 15%</h2></span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-52 ml-96">
            <div className="flex text-black items-center">
              <h3>This Year</h3>

            </div>
          </div>
        </div>


        <div className="relative h-72 ">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
