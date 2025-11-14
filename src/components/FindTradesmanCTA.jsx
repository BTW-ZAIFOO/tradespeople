import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Import useNavigate

const FindTradesmanCTA = () => {
  const navigate = useNavigate(); // 🔹 Initialize navigate

  const handleGetStarted = () => {
    navigate('/post-job'); // 🔹 Change path to your PostJobPage route
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for heading + input box */}
        <div className="flex items-center justify-center gap-8 flex-wrap sm:flex-nowrap">
          {/* Heading text */}
          <h2
            className="font-semibold text-[25px] sm:text-[22px] md:text-[26px] lg:text-[28px] flex-shrink-0"
            style={{ color: "rgb(80, 85, 102)" }}
          >
            Ready to find a tradesman near you?
          </h2>

          {/* Input with button inside same box */}
          <div className="relative w-full max-w-md flex-shrink-0">
            <input
              type="text"
              placeholder="Enter your postcode"
              className="w-full py-3 px-4 rounded-lg border border-[rgb(80,85,102)] text-[rgb(80,85,102)] pr-32"
            />
            <button
              onClick={handleGetStarted} // 🔹 Add onClick
              className="absolute top-1/2 right-1 transform -translate-y-1/2 px-6 py-2 rounded-lg text-white font-semibold bg-[#40D4E8] hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTradesmanCTA;
