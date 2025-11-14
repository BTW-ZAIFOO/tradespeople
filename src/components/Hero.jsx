import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/post-job"); // navigate to PostJobPage
  };

  return (
    <section className="relative bg-gradient-to-b from-[#EAF4FF] to-[#F9FCFF] py-30">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h1
          className="text-4xl md:text-4xl font-extrabold leading-tight tracking-tight mb-3"
          style={{
            color: "rgb(80, 85, 102)",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          Find Tradespeople,<br />
          compare up to 3 quotes!
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-10"
          style={{
            color: "rgb(80, 85, 102)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          It's FREE and there are no obligations
        </p>

        {/* Search Box */}
        <div className="bg-white shadow-xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto rounded-none">
          {/* Input Field */}
          <div className="flex-1 flex items-center px-4 py-5 bg-white">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="flex-1 outline-none border-none text-[rgb(80,85,102)] text-[15px] font-extrabold placeholder-[rgb(80,85,102)] placeholder:font-semibold bg-transparent"
              placeholder="Enter your postcode"
            />
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="bg-[#009B7D] hover:bg-[#009B7D] text-white font-semibold px-5 py-1 border border-[#009B7D] text-lg whitespace-nowrap transition rounded-md"
          >
            Get Started
          </button>
        </div>

        {/* Trustpilot Section */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <span className="font-semibold text-gray-800">Excellent</span>

          {/* Each star in its own green square */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
             <div
  key={i}
  className="text-white text-sm w-5 h-5 flex items-center justify-center"
  style={{ backgroundColor: "#009B7D" }}
>
  ★
</div>

            ))}
          </div>

          <a
            href="#"
            className="text-gray-600 underline text-sm hover:no-underline transition duration-200"
          >
            34,192 reviews on
          </a>

          {/* Trustpilot text with green star */}
          <span className="font-semibold text-gray-800 flex items-center gap-1">
            <span className="text-base" style={{ color: "#009B7D" }}>★</span> Trustpilot

          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
