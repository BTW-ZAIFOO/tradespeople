import React from "react";
import bathroom from "../assets/bathroomfitters.png";
import builder from "../assets/builders.png";
import carpenter from "../assets/carpenters.png";
import cleaner from "../assets/cleaners.png";
import decorator from "../assets/decorators.png";
import drainage from "../assets/drainagespecialists.png";
import driveway from "../assets/drivewayspecialists.png";
import electrician from "../assets/electricians.png";
import flooring from "../assets/flooring.png";
import gardener from "../assets/gardeners.png";
import handyman from "../assets/handymen.png";
import heating from "../assets/heatingengineers.png";
import kitchen from "../assets/kitchenfitters.png";
import plasterer from "../assets/plasterers.png";
import plumber from "../assets/plumbers.png";
import roofer from "../assets/roofers.png";
import tiler from "../assets/tilers.png";
import windowfitter from "../assets/windowfitters.png";

const PopularTrades = () => {
  const trades = [
    { name: "Bathroom Fitters", image: bathroom },
    { name: "Builders", image: builder },
    { name: "Carpenters", image: carpenter },
    { name: "Cleaners", image: cleaner },
    { name: "Decorators", image: decorator },
    { name: "Drainage Specialists", image: drainage },
    { name: "Driveway Specialists", image: driveway },
    { name: "Electricians", image: electrician },
    { name: "Flooring Specialists", image: flooring },
    { name: "Gardeners", image: gardener },
    { name: "Handymen", image: handyman },
    { name: "Heating Engineers", image: heating },
    { name: "Kitchen Fitters", image: kitchen },
    { name: "Plasterers", image: plasterer },
    { name: "Plumbers", image: plumber },
    { name: "Roofers", image: roofer },
    { name: "Tilers", image: tiler },
    { name: "Window Fitters", image: windowfitter },
  ];

  return (
    <section
      id="trades"
      className="py-16 md:py-24"
      style={{ backgroundColor: "rgb(244, 249, 255)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "rgb(80, 85, 102)" }}
          >
            Popular trades
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-x-4 gap-y-10 justify-center">
          {trades.map((trade, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={trade.image}
                alt={trade.name}
                className="w-20 h-20 object-contain mb-2"
              />
              <p
                className="font-medium text-sm md:text-base transition-colors duration-200 cursor-pointer"
                style={{ color: "rgb(80, 85, 102)" }}
                onMouseOver={(e) =>
                  (e.target.style.color = "rgb(40, 117, 215)")
                }
                onMouseOut={(e) => (e.target.style.color = "rgb(80, 85, 102)")}
              >
                {trade.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            style={{
              backgroundColor: "#40D4E8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#00A896)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00A896)")}
          >
            See more trades
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTrades;
