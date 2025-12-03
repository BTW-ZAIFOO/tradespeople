import React, { useState } from "react";
import carpentry from "../assets/carpentry.png";
import conversions from "../assets/conversions.png";
import kitchens from "../assets/kitchens.png";
import electrical from "../assets/Electrical.png";
import flooring from "../assets/Floring.png";
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
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaPoundSign } from "react-icons/fa";

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
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center relative">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "rgb(80,85,102)" }}
          >
            Our cost guides for popular household jobs
          </h2>

          <div className="mt-4 flex justify-center gap-3 lg:absolute lg:top-0 lg:right-0 lg:mt-0">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition cursor-pointer
        ${
          startIndex === 0
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-green-100"
        }`}
              style={{ borderColor: "#40D4E8", color: "#40D4E8" }}
            >
              <IoIosArrowBack size={24} />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex >= items.length - visibleItems}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition cursor-pointer 
        ${
          startIndex >= items.length - visibleItems
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-green-100"
        }`}
              style={{ borderColor: "#40D4E8", color: "#40D4E8" }}
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((item, idx) => (
            <div key={idx} className="text-left overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.desc}
                className="w-full h-80 md:h-96 object-cover rounded-lg mb-2 cursor-pointer hover:opacity-80"
              />
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-100 text-[#40D4E8]">
                  <FaPoundSign />
                </span>
                <p className="text-gray-700 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition cursor-pointer"
            style={{
              backgroundColor: "#40D4E8",
              border: "2px solid #40D4E8",
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
