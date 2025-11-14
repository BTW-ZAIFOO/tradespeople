import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// import your 5 images
import trade1 from "../assets/Emergency.png";
import trade2 from "../assets/GarageRoof.png";
import trade3 from "../assets/LeakyRoof.png";
import trade4 from "../assets/ShedRoof.png";
import trade5 from "../assets/Composite.png";

const FindTradesPerson = () => {
  const trades = [
    { img: trade1, desc1: "Emergency Roofer", desc2: "Near Me" },
    { img: trade2, desc1: "Garage Roof", desc2: "Repairs Near Me" },
    { img: trade3, desc1: "Leaky Roof Repair", desc2: "Near Me" },
    { img: trade4, desc1: "Shed Roof Repair", desc2: "Near Me" },
    { img: trade5, desc1: "Composite", desc2: "Decking Installers", desc3: "Near Me" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#505566]">
          How to find a tradesperson near you
        </h2>

        {/* Image Row */}
        <div className="flex justify-between items-start gap-4 flex-nowrap overflow-x-auto">
          {trades.map((trade, index) => (
            <div key={index} className="flex flex-col items-center w-[18%] min-w-[180px]">
              {/* Image */}
              <img
                src={trade.img}
                alt={trade.desc1}
                className="w-full h-44 object-cover rounded-lg shadow-sm hover:opacity-90 transition"
              />

              {/* Description + location */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {/* Location Icon with new color */}
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-white"
                  style={{ borderColor: "#00A896" }}
                >
                  <FaMapMarkerAlt className="text-[#00A896]" size={14} />
                </div>
                <div className="text-left text-[#505566] text-base font-medium leading-tight">
                  <p>{trade.desc1}</p>
                  {trade.desc2 && <p>{trade.desc2}</p>}
                  {trade.desc3 && <p>{trade.desc3}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button */}
        <div className="mt-12">
          <button
            className="text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            style={{ backgroundColor: "#40D4E8" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00A896")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#40D4E8")}
          >
            See all near me guides
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindTradesPerson;
