import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/tradesnearyou.png'; // Replace with your saved image path

const TradesmenNearYou = () => {
  const cities = [
    { name: "London", slug: "london" },
    { name: "Birmingham", slug: "birmingham" },
    { name: "Edinburgh", slug: "edinburgh" },
    { name: "Manchester", slug: "manchester" },
    { name: "Sheffield", slug: "sheffield" },
    { name: "Bristol", slug: "bristol" },
    { name: "Brighton", slug: "brighton" },
    { name: "Portsmouth", slug: "portsmouth" },
    { name: "Liverpool", slug: "liverpool" },
    { name: "Oxford", slug: "oxford" },
    { name: "Cardiff", slug: "cardiff" },
    { name: "Glasgow", slug: "glasgow" },
    { name: "Lancaster", slug: "lancaster" },
    { name: "Stoke on Trent", slug: "stoke-on-trent" },
    { name: "York", slug: "york" },
    { name: "Coventry", slug: "coventry" },
    { name: "Derby", slug: "derby" },
    { name: "Gloucester", slug: "gloucester" },
    { name: "Leeds", slug: "leeds" },
    { name: "Nottingham", slug: "nottingham" },
    { name: "Newcastle upon Tyne", slug: "newcastle-upon-tyne" },
    { name: "Southampton", slug: "southampton" },
    { name: "Plymouth", slug: "plymouth" },
    { name: "Reading", slug: "reading" },
    { name: "Wolverhampton", slug: "wolverhampton" },
    { name: "Exeter", slug: "exeter" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "rgb(80, 85, 102)" }}>
            Tradesmen near you
          </h2>
          <p className="text-lg" style={{ color: "rgb(80, 85, 102)" }}>
            Find tradesmen across the UK including builders, gardeners,<br />
            plumbers, electricians, painters, plasterers and more!
          </p>
        </div>

        {/* Image + City Buttons */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img src={myImage} alt="Tradesmen" className="rounded-lg w-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            {/* City Buttons */}
            <div className="flex flex-wrap gap-4 justify-start">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  to={`/find/${city.slug}`}
                  className="py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: "#f4f9ff",
                    color: "#00A896", // changed text color
                    minWidth: "120px",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#40D4E8";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f4f9ff";
                    e.currentTarget.style.color = "#00A896"; // changed text color back
                  }}
                >
                  {city.name}
                </Link>
              ))}
            </div>

            {/* See all locations button centered at bottom */}
            <div className="mt-8 text-center">
              <button
                className="py-2 px-6 rounded-lg font-medium transition-colors duration-300 underline"
                style={{
                  backgroundColor: "#f4f9ff",
                  color: "#00A896", // changed text color
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#40D4E8";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f4f9ff";
                  e.currentTarget.style.color = "#00A896"; // changed text color back
                }}
              >
                See all locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradesmenNearYou;
