import React from 'react';
import { FaTwitter, FaYoutube, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center text-white py-5 mt-auto">
      <div className="flex flex-col items-center">
        <div className="text-4xl"><img src={logo} alt="" height={60} width={60}/></div>
        <p><b>RentHub Industries Ltd.</b></p>
        <p>Providing reliable riding since 1992</p>
        <p>Copyright © 2024 - All rights reserved</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/freshia-njoki/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-neutral-content text-2xl" /></a>
          {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-black text-2xl" /></a> */}
          <a href="https://x.com/FreshiaNjoki2" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-neutral-content text-2xl" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
