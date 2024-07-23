import React from 'react';
import car1 from '../../assets/car1.png'; 
import car2 from '../../assets/car2.png'; 
import car3 from '../../assets/car3.png';

const FeaturedVehicles: React.FC = () => {
  return (
    <div>
     
      <div className="bg-gray-100  py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#456' }}>Our Features</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">User-Friendly Interface</h3>
                <p className="text-gray-700">Our vehicle rental management system boasts a user-friendly interface designed to provide an intuitive and seamless experience. Whether you're booking a vehicle or managing your rentals, our platform ensures that every action is straightforward and easy to perform.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Wide Selection of Vehicles</h3>
                <p className="text-gray-700">We offer a wide range of vehicles to meet your specific needs. From compact cars to luxury SUVs, our diverse fleet is regularly maintained to ensure the highest standards of safety and comfort</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Flexible Rental Plans</h3>
                <p className="text-gray-700">Our flexible rental plans cater to both short-term and long-term needs. Whether you need a vehicle for a day, a week, or a month, we have options that fit your schedule and budget, making it convenient for personal or business use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-vehicles" className="py-16 bg-white" style={{ color: '#456' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Vehicles</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                <img src={car1} alt="Car 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Tesla Model S</h3>
                  <p className="text-gray-700">The Tesla Model S is a sleek and powerful electric vehicle with a range of up to 396 miles. It offers unmatched performance and cutting-edge technology, making it a top choice for those seeking luxury and efficiency.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                <img src={car2} alt="Car 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">BMW X5</h3>
                  <p className="text-gray-700">The BMW X5 combines luxury, comfort, and performance in a versatile SUV package. With advanced safety features, a spacious interior, and powerful engine options, the X5 is perfect for both city driving and long road trips.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                <img src={car3} alt="Car 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Audi Q7</h3>
                  <p className="text-gray-700">The Audi Q7 is a premium SUV that offers a blend of performance, technology, and luxury. With its spacious interior, advanced infotainment system, and powerful engine, the Q7 is designed to provide a superior driving experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-100" style={{ color: '#456' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-4">"Great service and reliable vehicles! The booking process was smooth, and the car I rented was in excellent condition. Highly recommend for anyone looking for a hassle-free rental experience."</p>
                <h3 className="text-xl font-bold">Grace Chille</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-4">"I love the user-friendly interface of the platform. It made finding and renting a vehicle so easy. The customer support was also very responsive and helpful. I will definitely use this service again."</p>
                <h3 className="text-xl font-bold">Ruitha Elias</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-4">"The best rental experience I've ever had! The selection of vehicles is impressive, and the rental plans are very flexible. I appreciated the cleanliness and maintenance of the vehicle I rented. Five stars!"</p>
                <h3 className="text-xl font-bold">Margret Star</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeaturedVehicles;
