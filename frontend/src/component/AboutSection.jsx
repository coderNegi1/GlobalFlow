import React from 'react';
import CompanyImg from '../assets/Cargo Insurance.webp'; 

const About = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex items-center justify-center ">
      {/* About Us Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Our Company</h2>
          <p className="text-lg text-gray-600 mt-2">
            GlobalFlow Logistics India Pvt. Ltd. is a leader in providing comprehensive logistics solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Founded on the principles of reliability and efficiency, we are committed to delivering excellence in every shipment. Our dedicated team and extensive network ensure that your cargo is handled with the utmost care, from origin to destination.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We specialize in a wide range of services, including full truckload (FTL) and less than truckload (LTL) transportation, warehousing, and express delivery. We leverage modern technology to provide real-time tracking and transparent communication, giving you peace of mind.
            </p>
            <a href="/about" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={CompanyImg}
              alt="Company"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
