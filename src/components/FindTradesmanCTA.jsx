import React from "react";
import { useNavigate } from "react-router-dom"; 

const FindTradesmanCTA = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/post-job");
  };

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:flex-col gap-8 flex-col">
          <h2
            className="font-semibold text-[25px] sm:text-[22px] md:text-[26px] lg:text-[28px] whitespace-normal wrap-break-word text-center md:whitespace-nowrap"
            style={{ color: "rgb(80, 85, 102)" }}
          >
            Ready to find a tradesman near you?
          </h2>

          <div className="relative w-full max-w-md shrink-0">
            <input
              type="text"
              placeholder="Enter your postcode"
              className="w-full py-4 px-4 rounded-lg border-2 border-slate-300 text-[rgb(80,85,102)] pr-32"
            />

            <button
              onClick={handleGetStarted}
              className="hidden sm:inline-blockcabsolute top-1/2 right-1 transform -translate-y-1/2 px-5 py-3 mr-0.5 text-sm rounded-lg text-white font-semibold bg-[#40D4E8] hover:opacity-90 transition cursor-pointer"
            >
              Get Started
            </button>

            <div className="sm:hidden flex justify-center mt-3">
              <button
                onClick={handleGetStarted}
                className=" px-8 py-4 text-sm rounded-md text-white font-semibold bg-[#40D4E8] hover:opacity-90 transition cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTradesmanCTA;
