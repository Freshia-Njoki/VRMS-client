import { CircleDollarSign, ShoppingCart, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { apiDomain } from '../../utils/utils'




const Dashboard = () => {
  const data = {
    labels: ['Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31'],
    datasets: [
      {
        label: 'Tickets',
        data: [10, 20, 35, 45, 30, 20, 50, 60],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    height: 200, 
    width: 200, 
  };
  useEffect(() => {
    let chartInstance: any = null;

    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      chartInstance = new Chart("myChart", {
        type: "pie",
        data: data,
      });
    };

    createChart();

    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  }, []);

  const [revenue, setRevenue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await fetch(`${apiDomain}/revenue/payments`);
        const data = await response.json();
        setRevenue(data.revenue);
      } catch (error) {
        setError('Failed to fetch revenue');
        console.error('Error fetching revenue:', error);
      }
    };

    fetchRevenue();
  }, []);
  

  return (
    <>
      <div className="py-6 rounded-lg bg-gray-100 max-w-9xl ml-8">
        <div className="items-center">
          <h4 className="text-indigo-700 text-xl font-semibold">Dashboard</h4>
          <h4 className="text-stone-400">Home | Dashboard</h4>
        </div>

        <div className="flex bg-gray-200 gap-20 mt-4 w-80 h-60">
          <span className="p-8">
            <div className="flex font-semibold">
              <h4 className="text-indigo-800">Sales |</h4>
              <h3 className="text-gray-500 ml-2 mr-24">Today</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="flex">
              <ShoppingCart className="text-indigo-700 m-8 h-20 w-20" />
              <div>
                <h6 className="text-blue-900 mt-10 font-bold" style={{ fontSize: '3rem' }}>145</h6>
                <div className="flex gap-4" style={{ fontSize: '1.2rem' }}>
                  <h2 className="text-green-700 font-bold">12%</h2>
                  <h3 className="text-gray-400">increase</h3>
                </div>
              </div>
            </span>
          </span>
          <span className="bg-gray-200 p-8">
            <div className="flex font-semibold">
              <h4 className="text-indigo-800">Revenue |</h4>
              <h3 className="text-gray-500 ml-2 mr-24">This Month</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="flex">
              <CircleDollarSign className="text-green-700 m-8 h-20 w-20" />
              <div>
                <h6 className="text-blue-900 mt-10 font-bold" style={{ fontSize: '2.8rem' }}>${revenue !== null ? revenue.toLocaleString() : 'Loading...'}</h6>
                <div className="flex gap-4" style={{ fontSize: '1.2rem' }}>
                  <h2 className="text-green-700 font-bold">8%</h2>
                  <h3 className="text-gray-400">increase</h3>
                </div>
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="bg-gray-50 ml-8">
        <div className="items-center flex gap-3">
          <h4 className="text-indigo-800 text-xl font-semibold">Customers</h4>
          <h4 className="text-stone-400">| This Year</h4>
        </div>
        <span className="flex">
          <UsersRound className="text-orange-300 m-8 h-20 w-20" />
          <div>
            <h6 className="text-blue-900 mt-10 font-bold" style={{ fontSize: '2.8rem' }}>1244</h6>
            <div className="flex gap-4" style={{ fontSize: '1.2rem' }}>
              <h2 className="text-red-500 font-bold">12%</h2>
              <h3 className="text-gray-400">decrease</h3>
            </div>
          </div>
        </span>
      </div>
      <div>
        <div className="items-center  ml-8 bg-gray-50 m-3 p-4">
          <div className="flex mb-6">
            <h4 className="text-indigo-700 text-xl font-semibold mr-4">Website Traffic </h4>
            <h4 className="text-stone-400"> | This Year</h4>
            </div>
          <div className="m-12" style={{ height: "400px", width: "400px" }}>
            <Pie data={data} options={options} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

