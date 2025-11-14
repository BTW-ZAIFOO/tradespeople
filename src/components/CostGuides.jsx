import React, { useState } from "react";
import carpentry from "../assets/carpentry.png";
import conversions from "../assets/conversions.png";
import kitchens from "../assets/kitchens.png";
import electrical from "../assets/electrical.png";
import flooring from "../assets/floring.png";
import painting from "../assets/painting.png";
import plumbing from "../assets/plumbing.png";
import drainage from "../assets/Drainage.png";
import driveways from "../assets/Driveways.png";
import extension from "../assets/Extensions.png";
import gardening from "../assets/gardening.png";
import cuttering from "../assets/cuttering.png";
import solarpower from "../assets/solarpowers.png";
import externalPainting from "../assets/Externalpaintings.png";
import roofsChimneys from "../assets/Roofs&chimneys.png";

const CostGuides = () => {
  const items = [
    { img: carpentry, desc: "Carpentry" },
    { img: conversions, desc: "Conversions" },
    { img: kitchens, desc: "Kitchens" },
    { img: electrical, desc: "Electrical" },
    { img: flooring, desc: "Flooring" },
    { img: painting, desc: "Painting" },
    { img: plumbing, desc: "Plumbing" },
    { img: drainage, desc: "Drainage" },
    { img: driveways, desc: "Driveways" },
    { img: extension, desc: "Extension" },
    { img: gardening, desc: "Gardening" },
    { img: cuttering, desc: "Cuttering" },
    { img: solarpower, desc: "Solar Power" },
    { img: externalPainting, desc: "External Painting" },
    { img: roofsChimneys, desc: "Roofs & Chimneys" },
  ];

  const visibleItems = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < items.length - visibleItems) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visible = items.slice(startIndex, startIndex + visibleItems);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: "rgb(80,85,102)" }}
        >
          Our cost guides for popular household jobs
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition ${
              startIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            &#8592;
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex >= items.length - visibleItems}
            className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition ${
              startIndex >= items.length - visibleItems
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            &#8594;
          </button>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((item, idx) => (
            <div key={idx} className="text-center">
              <img
                src={item.img}
                alt={item.desc}
                className="w-full h-80 md:h-96 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-700 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* See All Cost Guides Button */}
        <div className="text-center mt-8">
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition"
            style={{
              backgroundColor: "#40D4E8", // 💠 Light cyan blue color
              border: "2px solid #40D4E8"
            }}
          >
            See All Cost Guides
          </button>
        </div>
      </div>
    </section>
  );
};

export default CostGuides;
