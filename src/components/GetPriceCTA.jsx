import React from 'react';

const GetPriceCTA = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "rgb(244, 249, 255)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <h2 
          className="text-2xl md:text-3xl font-extrabold" 
          style={{ color: "rgb(80, 85, 102)" }}
        >
          Ready to get a price for your home improvement project?
        </h2>
        <button
          className="px-6 py-3 rounded-lg text-white font-semibold text-lg transition-colors duration-300 cursor-pointer"
          style={{ backgroundColor: "#00A896" }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#40D4E8"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#00A896"}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetPriceCTA;
