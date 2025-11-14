import React from 'react';
import kitchenImg from '../assets/kitchen.png';
import sprayFoamImg from '../assets/sprayfoam.png';
import blogImg from '../assets/Blog.png';
import homeGuideImg from '../assets/Homeguide.png';
import tradeAdviceImg from '../assets/TradeAdvice.png';

const LatestArticles = () => {
  const articles = [
    { heading: 'IDEAS', subheading: 'Kitchen Ideas', img: kitchenImg },
    { heading: 'COST GUIDES', subheading: 'Spray Foam Removal Cost', img: sprayFoamImg },
    { heading: 'BLOG', subheading: 'Colour of the Year 2025', img: blogImg },
    { heading: 'HOME IMPROVEMENT GUIDES', subheading: 'Porch Extension Guide', img: homeGuideImg },
    { heading: 'TRADE ADVICE', subheading: 'Asbestos Training Awareness Guide', img: tradeAdviceImg },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#505566]">
          Our latest articles
        </h2>

        {/* First row: 2 images */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {articles.slice(0, 2).map((article, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden w-[47%]" // slightly smaller width
            >
              <img
                src={article.img}
                alt={article.heading}
                className="w-full h-64 object-cover transition duration-300 group-hover:opacity-70"
              />
              <div className="absolute top-4 left-4 text-white text-left">
                <h3 className="text-lg font-bold">{article.heading}</h3>
                <p className="text-base">{article.subheading}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: 3 images */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {articles.slice(2).map((article, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden w-[30%]" // smaller width
            >
              <img
                src={article.img}
                alt={article.heading}
                className="w-full h-48 object-cover transition duration-300 group-hover:opacity-70"
              />
              <div className="absolute top-4 left-4 text-white text-left">
                <h3 className="text-sm font-bold leading-tight">{article.heading}</h3>
                <p className="text-sm leading-tight">{article.subheading}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="text-[#505566]">
          See more articles from our{' '}
          <a href="#" className="text-[#009B7D] hover:underline">
            costs
          </a>
          ,{' '}
          <a href="#" className="text-[#009B7D] hover:underline">
            how-to's
          </a>
          ,{' '}
          <a href="#" className="text-[#009B7D)] hover:underline">
            guides
          </a>
          , and{' '}
          <a href="#" className="text-[#009B7D] hover:underline">
            blog
          </a>.
        </p>
      </div>
    </section>
  );
};

export default LatestArticles;
