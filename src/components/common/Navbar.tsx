import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-lg font-semibold">
          Vehicle Rental Management
        </span>
        <div className="flex lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm font-semibold text-white hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm font-semibold text-white hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <Link to="/admin-login" className="text-white">Admin</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </div>
      </div>
    </nav>
  
  );
};

export default Navbar;
