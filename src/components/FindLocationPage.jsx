import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocationBySlug } from "../data/locationsData";
import Header from "./Header";
import Footer from "./Footer";
import Tradespeople from "./Tradespeople";
import Featured from "./Featured";

const FindLocationPage = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const locationData = getLocationBySlug(location);
  const [selectedPostcode, setSelectedPostcode] = useState("");

  if (!locationData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Location Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The location you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1
                className="font-extrabold mb-4 leading-tight text-4xl"
                style={{ color: "rgb(80, 85, 102)" }}
              >
                {locationData.heroTitle}
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                {locationData.heroDescription}
              </p>

              {/* Search Box */}
              <div className="relative mb-8">
                {/* Input */}
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={selectedPostcode}
                  onChange={(e) => setSelectedPostcode(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#40D4E8]pr-32 md:pr-32 "
                />

                {/* Desktop Button (inside input) */}
                <button className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#40D4E8] /text-white font-semibold rounded-md hover:bg-[#00A896] transition cursor-pointer">
                  Get Started
                </button>

                {/* Mobile Button (below input) */}
                <button className="md:hidden mt-3 py-3 px-8 bg-[#40D4E8] text-white font-semibold rounded-md hover:bg-[#00A896] transition cursor-pointer">
                  Get Started
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-start gap-3 md:flex-row md:items-center flex-col">

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="w-6 h-6 flex items-center justify-center rounded-sm"
                      style={{ backgroundColor: "#009B7D" }}
                    >
                      <span className="text-white text-sm">★</span>
                    </div>
                  ))}
                </div>

                {/* Reviews text */}
                <div className="ml-2 md:ml-2 mt-2 md:mt-0">
                  <p className="font-bold text-[#505566] flex items-center gap-1">
                    {locationData.stats.reviews} reviews from
                    <span className="text-[#009B7D] text-xl">★</span>
                    <span className="text-black font-bold">Trustpilot</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src={locationData.banner}
                alt={locationData.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Featured />

      {/* TRADESPEOPLE SECTION */}
      <Tradespeople
        locationName={locationData.name}
        tradespeople={locationData.tradespeople || []}
      />

      <Footer />
    </div>
  );
};

export default FindLocationPage;
