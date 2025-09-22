import React from "react";


const OurClients = () => {
  const clientLogos = [
    "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",        // Netflix
    "https://cdn.worldvectorlogo.com/logos/apple-1.svg",          // Apple
    "https://cdn.worldvectorlogo.com/logos/intel.svg",            // Intel
    "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",        // Twitter
    "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",  // LinkedIn

  ];




  return (
    <>
      <div className="font-sans bg-white min-h-screen flex flex-col items-center justify-center">
        {/* Clients Section with World Map Background */}
        <section
          className="w-full min-h-screen flex flex-col items-center justify-center text-black relative"

        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Heading */}
          <div className="relative z-10 text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Clients
            </h2>
            <p className="text-lg text-black/80 mt-2">
              We are proud to serve a wide range of industry-leading clients.
            </p>
          </div>

          {/* Marquee Logos */}
          <div className="relative z-10 w-full overflow-hidden">
            <div
              className="flex animate-marquee"
              style={{
                width: `${(250 + 24) * clientLogos.length * 2}px`,
              }}
            >
              {clientLogos.concat(clientLogos).map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Client Logo ${i + 1}`}
                  className="md:h-[150px] md:w-[250px] h-[120px] w-[180px] flex-shrink-0 object-contain rounded-lg mx-3"
                />
              ))}
            </div>
          </div>


          {/* CTA Section */}
          <div className="container mx-auto max-w-7xl px-6 text-center mt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
            <p className="font-light mb-8">
              Experience the GlobalFlow difference. Let's work together to drive your business forward.
            </p>

          </div>
        </section>





        {/* Animation CSS */}
        <style>
          {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
        </style>



      </div>

    </>
  );
};

export default OurClients;
