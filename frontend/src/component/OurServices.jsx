import React from 'react';
import { useNavigate } from "react-router-dom";
import { Ship, Plane, Truck, Train, Warehouse, ClipboardList } from "lucide-react";

// Background
import worldMapGrid from "../assets/world2.jpg";

// Card Background Images
import AirFreightImg from "../assets/Air-fright.webp";
import CargoInsurance from "../assets/Cargo Insurance.webp";
import cargoShip from "../assets/cargo-ship.webp";
import CustomsClearance from "../assets/Customs Clearance.webp";
import RailFright from "../assets/Rail fright.webp";
import RoadFright from "../assets/Road fright.webp";
import WarehouseSolutions from "../assets/Warehouse Solutions.webp";

// Single Service Card
const ServiceCard = ({ title, description, icon, link, bg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer group rounded-2xl shadow-lg min-h-[240px] overflow-hidden transform hover:-translate-y-2 transition-all duration-300 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-white/60 transition-colors duration-300"></div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-gray-900">{title}</h3>
          <div className="text-blue-500 group-hover:rotate-12 transition-transform duration-300">{icon}</div>
        </div>
        <p className="text-white group-hover:text-gray-800 leading-relaxed">{description}</p>
        <span className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition-colors duration-300 font-semibold text-sm cursor-pointer">
          Learn More
        </span>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const servicesData = [
    { title: "Ocean Freight", description: "Reliable and cost-effective sea transport for large-scale international shipments.", icon: <Ship size={36} />, link: "/freight/ocean", bg: cargoShip },
    { title: "Air Freight", description: "Fast and secure air cargo services for time-sensitive deliveries across the globe.", icon: <Plane size={36} />, link: "/freight/air", bg: AirFreightImg },
    { title: "Road Freight", description: "Secure and timely land-based transportation for domestic and cross-border logistics.", icon: <Truck size={36} />, link: "/freight/road", bg: RoadFright },
    { title: "Rail Freight", description: "Eco-friendly rail transport for bulk cargo and large volumes.", icon: <Train size={36} />, link: "/freight/rail", bg: RailFright },
    { title: "Warehouse Solutions", description: "State-of-the-art storage and inventory management to protect your goods.", icon: <Warehouse size={36} />, link: "/freight/warehouse", bg: WarehouseSolutions },
    { title: "Customs Clearance", description: "Expert assistance with customs documentation to ensure smooth and hassle-free transit.", icon: <ClipboardList size={36} />, link: "/freight/customs", bg: CustomsClearance },
    { title: "Domestic Transport", description: "Reliable and efficient domestic transport solutions across India for all types of cargo.", icon: <Truck size={36} />, link: "/freight/domestic", bg: CargoInsurance },
  ];

  return (
    <div
      className="font-sans text-gray-800 antialiased min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${worldMapGrid})` }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col">

        {/* Hero Section */}
        <section className="text-center py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Our Comprehensive Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light text-white/90 drop-shadow-md">
            We offer a wide range of logistics and supply chain solutions tailored to meet your unique business needs.
          </p>
        </section>

        {/* Services Section */}
        <section className="container mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">What We Do</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-sm">
              From cargo management to express delivery, our services are designed to ensure seamless operations and timely results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 rounded-t-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Ready to Optimize Your Supply Chain?</h2>
          <p className="font-light mb-8 text-white/90 drop-shadow-sm">
            Experience the GlobalFlow difference. Let's work together to drive your business forward.
          </p>
         
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
