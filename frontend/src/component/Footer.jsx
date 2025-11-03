import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook } from 'lucide-react';
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO_GLOBAL_FLOW.png';


const Footer = () => {
  return (
    <div className="font-sans bg-white  flex flex-col justify-between  ">
      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 pt-12">
        <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/">
                <img
                  src={Logo}
                  alt="GlobalFlow Logo"
                  className="h-[70px] mr-2 cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm font-sans">
              The fastest and most efficient logistics solutions worldwide for all your cargo needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start">
                <MapPin size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>
                  123, Logistics Park, New Delhi - 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-blue-500 mr-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-blue-500 mr-2" />
                <span>info@globalflow.in</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4 font-display">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 py-4 text-center text-sm bg-gray-900 text-white ">
          <p className="font-sans">   &copy; 2025 GlobalFlow. All Rights Reserved.</p>
          <p className='pt-1 font-sans'>Designed by
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="underline ml-1 font-display">
              Prashant Negi
            </a></p>

        </div>

      </footer>
    </div>
  );
};

export default Footer;
