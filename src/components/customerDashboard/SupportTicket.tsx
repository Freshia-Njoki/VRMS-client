import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Grip, Info } from 'lucide-react';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SupportTicket = () => {
  const data = {
    labels: ['Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31'],
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
      <div className='inline-flex py-7'>
        <h4 className='text-indigo-700 font-semibold'>Support Ticket</h4>
        <h4 className='text-stone-400 px-3'>| KPIs and Statistics</h4>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-72">
        <div className="flex text-black items-center">
          <span className="mr-2">📅</span>
          <span className="font-bold">Dec 24</span>
          <h4 className='px-4'>to</h4>
          <span>📅</span>
          <span className="font-bold px-3"> Dec 31</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full mr-2">
          <div className="inline-flex py-5 items-center justify-between w-full">
            <h2 className="text-2xl text-gray-600 font-bold">Total Tickets Submitted</h2>
            <span className="ml-auto"><Grip /></span>
          </div>
          <div className="flex items-baseline ml-10 mb-5">
            <span className="text-4xl text-black font-bold ">40,55K</span>
            <span className="text-red-600 bg-red-100 rounded-2xl p-2 ml-32">↓ 59%</span>
          </div>
          <p className="text-gray-500 mt-4 font-semibold">Last week 84,70K</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full ml-2">
          <div className="inline-flex py-5 items-center justify-between w-full">
            <h2 className="text-2xl text-gray-600 font-bold">Open Tickets</h2>
            <span className="ml-auto"><Grip /></span>
          </div>
          <div className="inline-flex  items-center ml-10 mb-5">
            <span className="text-4xl text-black font-bold ">1.2M</span>
            <span className="text-green-600 bg-green-100 rounded-2xl p-2 ml-32">↑ 1.0%</span>
          </div>
          <p className="text-gray-500 mt-4 font-semibold">Last week 1.18M</p>
        </div>

      </div>
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <div className='inline-flex w-full items-center mx-6'>
          <h3 className="text-2xl font-bold mb-2 text-black">Performance</h3>
          <span className="ml-2 text-gray-400"><Info /></span>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-52 ml-96">
            <div className="flex text-black items-center">
              <h3>Recent Tickets</h3>
            </div>
          </div>
        </div>


        <div className="relative h-72">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
