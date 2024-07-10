import heroimg from '../../assets/heroimg.jpeg'

function LandingPage() {
  return (
  
    <div>
      <div className="flex items-start justify-between py-4  bg-gray-100 px-8">
        <div className="flex-1 pr-8 mb-4" style={{ color: '#456' }}>
          <h1 className="text-5xl font-bold text-black mb-4">Welcome to Vehicle Rental Management</h1>
          <p className="text-lg mb-8">Providing reliable riding since 1992</p>
          <a href="#features" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
          <div className="py-3 text-2xl flex">
        <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
        <a href="/register" className="btn btn-info btn-outline bg-white  text-blue-500 text-1xl hover:bg-gray-100 font-bold px-3 mx-3 rounded">
          Sign Up Now
        </a>
      </div>
        </div>
        <div className="flex-1">
          <img src={heroimg} alt="Hero" className="w-full h-60" />
        </div>
      </div>

      
    </div>
  );
};

export default LandingPage