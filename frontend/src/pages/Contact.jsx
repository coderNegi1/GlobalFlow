import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional Top Quote / Headline */}
      <div className="bg-blue-600 text-white py-6 text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          "We’re Here to Help – Get in Touch Today!"
        </h1>
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col md:flex-row flex-1 px-4 md:px-20 py-12 gap-8">
        {/* Left: Contact Form */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-start bg-gray-50 shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Info</h2>
          <p className="text-gray-700">
            <strong>Address:</strong> 100 Haridwar Road, Near Rispana Bridge, Dehradun, Uttarakhand 248001
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> <a href="tel:+911234567890" className="text-blue-600">+91 1234567890</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom: Full-width Google Map */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.123456789!2d78.0328!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39090123456789ab%3A0xabcdef1234567890!2sDehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1695291234567!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
