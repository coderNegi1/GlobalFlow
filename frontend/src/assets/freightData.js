// freightData.js

import AirFreightImg from "../assets/Air-fright.webp";
import CargoInsurance from "../assets/Cargo Insurance.webp";

import cargoShip from "../assets/cargo-ship.webp";

import CustomsClearance from "../assets/Customs Clearance.webp";


import RailFright from "../assets/Rail fright.webp";
import RoadFright from "../assets/Road fright.webp";
import WarehouseSolutions from "../assets/Warehouse Solutions.webp";



export const freightData = {
  ocean: {
    title: "Sea Freight",
    breadcrumb: "Home / Sea Freight",
    heroImageUrl: cargoShip,
    mainImageUrl: cargoShip,
    mainTitle: "Reliable and express logistics transport solutions that save your time!",
    description: "We provide very competitive rates on full container load (FCL) and less-than-container load (LCL) shipments. Our expert team ensures timely transit, proper documentation, and flexible options for import and export needs.",
    quote: "Flexible, reliable sea freight solutions for all cargo types and industries.",
    servicesOffered: [
      "FCL Export & Import",
      "LCL Export & Import",
      "Door to Door Service",
      "Oversize Shipments",
      "Packing and Crating",
      "Restricted Materials"
    ],
    industries: [
      "Wine Industry",
      "Oil & Gas Industry",
      "Perishable Goods",
      "Furniture",
      "Building Materials",
      "Heavy Machinery",
      "Garment Industry",
      "Consumer Goods"
    ]
  },

  air: {
    title: "Air Freight",
    breadcrumb: "Home / Air Freight",
    heroImageUrl: AirFreightImg,
    mainImageUrl: AirFreightImg,
    mainTitle: "Swift and secure air freight services for your urgent shipments.",
    description: "Our air freight services offer fast, safe, and reliable delivery for time-sensitive cargo. We provide customized solutions for express shipments, consolidation, and dangerous goods handling worldwide.",
    quote: "Expedited air freight solutions for time-critical deliveries worldwide.",
    servicesOffered: [
      "Express Shipments",
      "Consolidation Services",
      "Dangerous Goods Handling",
      "Charter Flights",
      "Customs Brokerage"
    ],
    industries: [
      "Electronics",
      "Pharmaceuticals",
      "Automotive",
      "Retail",
      "High-Tech",
      "E-commerce"
    ]
  },

  road: {
    title: "Road Freight",
    breadcrumb: "Home / Road Freight",
    heroImageUrl: RoadFright,
    mainImageUrl: RoadFright,
    mainTitle: "Efficient and flexible road freight for domestic and cross-border transport.",
    description: "We offer comprehensive road freight services tailored to your specific needs, whether full truckload (FTL) or less-than-truckload (LTL). Our fleet and logistics experts ensure timely and secure delivery.",
    quote: "Dependable road transport for reliable delivery, every time.",
    servicesOffered: [
      "Full Truckload (FTL)",
      "Less-than-Truckload (LTL)",
      "Dedicated Haulage",
      "Cross-Border Transport",
      "Last-Mile Delivery"
    ],
    industries: [
      "Construction",
      "Agriculture",
      "FMCG (Fast-Moving Consumer Goods)",
      "Retail",
      "Manufacturing"
    ]
  },

  rail: {
    title: "Rail Freight",
    breadcrumb: "Home / Rail Freight",
    heroImageUrl: RailFright,
    mainImageUrl: RailFright,
    mainTitle: "Cost-effective and eco-friendly rail transport for large volumes.",
    description: "Our rail freight solutions provide sustainable and economical options for transporting large quantities of goods over long distances. We offer intermodal, block train, and door-to-door services.",
    quote: "Eco-friendly rail transport, the smart choice for bulk cargo.",
    servicesOffered: [
      "Intermodal Transport",
      "Block Train Service",
      "Door-to-Door Rail",
      "Project Cargo"
    ],
    industries: [
      "Mining & Metals",
      "Building Materials",
      "Raw Materials",
      "Automotive",
      "Heavy Machinery"
    ]
  },

  warehouse: {
    title: "Warehouse Solutions",
    breadcrumb: "Home / Warehouse Solutions",
    heroImageUrl: WarehouseSolutions,
    mainImageUrl: WarehouseSolutions,
    mainTitle: "Secure and modern warehouse solutions for your goods.",
    description: "We provide advanced storage, inventory management, and logistics support with state-of-the-art facilities. Cold storage and customized solutions ensure your products are safe and managed efficiently.",
    quote: "Reliable and secure warehouse solutions tailored to your needs.",
    servicesOffered: [
      "Cold Storage",
      "Inventory Management",
      "Packaging Services",
      "Order Fulfillment",
      "Cross Docking"
    ],
    industries: [
      "Retail",
      "Pharmaceuticals",
      "Electronics",
      "FMCG",
      "E-commerce"
    ]
  },

  customs: {
    title: "Customs Clearance",
    breadcrumb: "Home / Customs Clearance",
    heroImageUrl: CustomsClearance,
    mainImageUrl: CustomsClearance,
    mainTitle: "Hassle-free customs clearance for smooth logistics.",
    description: "Expert guidance on customs documentation, duties, and regulations to ensure fast and compliant movement of goods across borders. We handle all import and export procedures efficiently.",
    quote: "Fast and compliant customs processing for your shipments.",
    servicesOffered: [
      "Import Documentation",
      "Export Documentation",
      "Duty Management",
      "Regulatory Compliance",
      "Customs Consultation"
    ],
    industries: [
      "Automotive",
      "FMCG",
      "Electronics",
      "Pharmaceuticals",
      "Machinery"
    ]
  },


  domestic: {
    title: "Domestic Transport",
    breadcrumb: "Home / Domestic Transport",
    heroImageUrl: CargoInsurance,  
    mainImageUrl: CargoInsurance,
    mainTitle: "Fast and reliable domestic cargo movement across India.",
    description: "Our domestic transport solutions ensure your goods are delivered safely and on time across every corner of India. With a wide network, advanced tracking, and professional handling, we make nationwide logistics simple and efficient.",
    quote: "Seamless transport, anywhere in India.",
    servicesOffered: [
      "Full Truckload (FTL)",
      "Less-than-Truckload (LTL)",
      "Door-to-Door Delivery",
      "Express Domestic Cargo",
      "Real-Time Tracking"
    ],
    industries: [
      "Retail",
      "Manufacturing",
      "E-commerce",
      "Agriculture",
      "Pharmaceuticals"
    ]
  }

};
