// src/pages/FreightPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { freightData } from "../assets/freightData";

const FreightPage = () => {
    const { type } = useParams(); // "ocean", "air", "road", etc.
    const data = freightData[type];

    if (!data) {
        return (
            <div className="text-center p-16 text-red-600">
                Freight type "{type}" not found.
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative h-96 w-full overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${data.heroImageUrl})` }}
            >
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center p-8 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold font-display">{data.title}</h1>
                        <p className="mt-2 text-sm md:text-base font-sans">{data.breadcrumb}</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-16 px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2">
                        <img
                            src={data.mainImageUrl}
                            alt={data.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Freight Info */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-800 font-display">{data.mainTitle}</h2>
                            <p
                                className="mt-4 text-gray-700 leading-relaxed text-justify font-sans"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            ></p>
                        </div>

                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md border-l-4 border-blue-800">
                            <p className="font-semibold text-lg italic font-serif">"{data.quote}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl shadow p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-display">Services Offered</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 font-sans">
                                    {data.servicesOffered.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl shadow p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-display">Industry Specific</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 font-sans">
                                    {data.industries.map((industry, index) => (
                                        <li key={index}>{industry}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FreightPage;
