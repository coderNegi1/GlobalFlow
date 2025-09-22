import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Twitter, Facebook, Menu, X } from 'lucide-react';
import Logo from '../assets/LOGO_GLOBAL_FLOW.png';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm font-sans">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 py-2 text-sm hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@yourdomain.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+1 (234) 5678-9101</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <Twitter size={16} />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-700 transition-colors">
              <Facebook size={16} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto max-w-7xl flex justify-between items-center  px-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* Company Logo */}
          <img
            src={Logo}
            alt="GlobalFlow Logo"
            className=" h-[80px] object-contain mr-2"
          />

          
        </div>


        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 bg-white z-50 w-64 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 focus:outline-none">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600 transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
