import React from "react";
import guardian from "../assets/theguardian.jpg";
import cosmopolitan from "../assets/cosmopolitan.jpg";
import dailyMail from "../assets/dailymail.jpg";
import independent from "../assets/independent.jpg";
import times from "../assets/thetimes.jpg";
import express from "../assets/express.jpg";

const Featured = () => {
  const publications = [
    { name: "The Guardian", image: guardian },
    { name: "Cosmopolitan", image: cosmopolitan },
    { name: "Daily Mail", image: dailyMail },
    { name: "The Independent", image: independent },
    { name: "The Times", image: times },
    { name: "Express", image: express },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <h3
          className="text-center text-2xl font-bold mb-10"
          style={{ color: "rgb(80, 85, 102)" }}
        >
          Featured in
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-1">
          {publications.map((pub, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={pub.image}
                alt={pub.name}
                className="h-20 object-contain"
                style={{
                  maxHeight: "70px", 
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
