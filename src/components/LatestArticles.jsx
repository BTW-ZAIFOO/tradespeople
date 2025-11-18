import React from "react";
import kitchenImg from "../assets/kitchen.png";
import sprayFoamImg from "../assets/sprayfoam.png";
import blogImg from "../assets/Blog.png";
import homeGuideImg from "../assets/Homeguide.png";
import tradeAdviceImg from "../assets/TradeAdvice.png";

const LatestArticles = () => {
  const articles = [
    { heading: "IDEAS", subheading: "Kitchen Ideas", img: kitchenImg },
    {
      heading: "COST GUIDES",
      subheading: "Spray Foam Removal Cost",
      img: sprayFoamImg,
    },
    { heading: "BLOG", subheading: "Colour of the Year 2025", img: blogImg },
    {
      heading: "HOME IMPROVEMENT GUIDES",
      subheading: "Porch Extension Guide",
      img: homeGuideImg,
    },
    {
      heading: "TRADE ADVICE",
      subheading: "Asbestos Training Awareness Guide",
      img: tradeAdviceImg,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#505566]">
          Our latest articles
        </h2>

        {/* Articles grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`
                relative group rounded-lg overflow-hidden w-full       
                 sm:w-[47%]  
                lg:w-[30%]  
              `}
            >
              <img
                src={article.img}
                alt={article.heading}
                className={`w-full 
                  h-64 sm:h-64 lg:h-${index < 2 ? "64" : "48"} object-cover
                  transition duration-300 group-hover:opacity-70
                `}
              />
              <div className="absolute top-4 left-4 text-white text-left">
                <h3
                  className={`font-bold ${
                    index < 2 ? "text-lg" : "text-sm"
                  } leading-tight`}
                >
                  {article.heading}
                </h3>
                <p
                  className={`leading-tight ${
                    index < 2 ? "text-base" : "text-sm"
                  }`}
                >
                  {article.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="text-[#505566]">
          See more articles from our{" "}
          <a href="#" className="text-[#009B7D] hover:underline">
            costs
          </a>
          ,{" "}
          <a href="#" className="text-[#009B7D] hover:underline">
            how-to's
          </a>
          ,{" "}
          <a href="#" className="text-[#009B7D] hover:underline">
            guides
          </a>
          , and{" "}
          <a href="#" className="text-[#009B7D] hover:underline">
            blog
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default LatestArticles;
