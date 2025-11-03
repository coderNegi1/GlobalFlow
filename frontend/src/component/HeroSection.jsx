import React, { useState, useEffect } from 'react';
import { Mail, Phone, Twitter, Facebook, Menu, X } from 'lucide-react';

import AirFreightImg from "../assets/Air-fright.webp";
import RoadFright from "../assets/Road fright.webp";
import WarehouseSolutions from "../assets/Warehouse Solutions.webp";


const slides = [
  {
    image: RoadFright, // Truck Transportation
    title: 'TRUCK TRANSPORTATION',
    description: 'We provide safe, reliable, and cost-effective truck transportation services across cities and states. Our fleet is equipped for full truckload (FTL) and less than truckload (LTL) shipments, ensuring timely delivery and complete cargo safety.',
  },
  {
    image: WarehouseSolutions, // Warehousing Solutions
    title: 'WAREHOUSING SOLUTIONS',
    description: 'We offer secure and scalable warehousing services for all your storage needs. Our state-of-the-art facilities ensure your goods are handled with care and are ready for distribution at a moment\'s notice.',
  },
  {
    image: AirFreightImg, // Express Delivery
    title: 'EXPRESS DELIVERY',
    description: 'Our express delivery service ensures your packages reach their destination with speed and precision. We offer real-time tracking and a dedicated team to guarantee your shipments arrive on time, every time.',
  },
];

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleCarouselClick = (e) => {
    const clickX = e.clientX;
    const carouselWidth = e.currentTarget.offsetWidth;
    const carouselLeft = e.currentTarget.getBoundingClientRect().left;

    if (clickX < carouselLeft + carouselWidth / 2) {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
          onClick={handleCarouselClick}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
          <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              {slide.title}
            </h1>
            <p className="max-w-3xl text-lg md:text-xl font-light font-sans">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Carousel Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full transition-colors duration-300
                ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
