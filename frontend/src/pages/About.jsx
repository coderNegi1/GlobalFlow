import React from "react";
import CompanyImg from '../assets/Cargo Insurance.webp';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="font-sans bg-white">

            {/* Hero Section */}
            <section
                className="relative bg-blue-600 text-white py-24 md:py-32 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${CompanyImg})`,
                }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">About GlobalFlow Logistics</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-sans">
                        Delivering reliable, efficient, and innovative logistics solutions across India.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="container mx-auto max-w-6xl px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">Our Company</h2>
                    <p className="text-gray-600 text-lg font-sans">
                        GlobalFlow Logistics India Pvt. Ltd. is a leader in providing comprehensive logistics solutions, committed to excellence in every shipment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-gray-700 font-sans">
                        <p>
                            Founded on the principles of reliability and efficiency, we ensure your cargo is handled with the utmost care from origin to destination.
                        </p>
                        <p>
                            We offer full truckload (FTL), less-than-truckload (LTL), warehousing, and express delivery services with real-time tracking and transparent communication.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 font-display font-semibold"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Company Image */}
                    <div className="flex justify-center">
                        <img
                            src={CompanyImg}
                            alt="Company Cargo Services"
                            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12">
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 font-display">Our Mission</h3>
                        <p className="text-gray-700 font-sans">
                            To provide seamless logistics solutions that empower businesses and enhance customer satisfaction.
                        </p>
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 font-display">Our Vision</h3>
                        <p className="text-gray-700 font-sans">
                            To be the most trusted logistics partner in India, delivering excellence through innovation and efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container mx-auto max-w-6xl px-4 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 font-display">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-2 font-display">Reliability</h4>
                        <p className="text-gray-700 font-sans">We ensure every shipment is delivered safely and on time.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-2 font-display">Integrity</h4>
                        <p className="text-gray-700 font-sans">Honesty and transparency in every transaction we handle.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl mb-2 font-display">Innovation</h4>
                        <p className="text-gray-700 font-sans">We adopt modern technology to make logistics smarter and efficient.</p>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="container mx-auto max-w-6xl px-4 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-display">Partner With Us</h2>
                <p className="text-gray-700 mb-8 font-sans">
                    Join our network and experience logistics solutions that drive growth and reliability.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 font-display font-semibold">
                    Contact Us
                </Link>
            </section>

        </div>
    );
};

export default About;
