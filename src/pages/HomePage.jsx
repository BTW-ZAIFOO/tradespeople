import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SecondSection from "../components/SecondSection";

import HowItWorks from "../components/HowItWorks";
import Featured from "../components/Featured";
import PopularTrades from "../components/PopularTrades";
import TradesmanSection from "../components/TradesmanSection";
import Reviews from "../components/Reviews";
import CostGuides from "../components/CostGuides";
import TradesmenNearYou from "../components/TradesmenNearYou";
import GetPriceCTA from "../components/GetPriceCTA";

import LatestArticles from "../components/LatestArticles";
import FindTradesPerson from "../components/FindTradesPerson";
import FindTradesmanCTA from "../components/FindTradesmanCTA";
import WhyUse from "../components/WhyUse";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SecondSection />
      <HowItWorks />
      <Featured />
      <PopularTrades />
      <TradesmanSection />
      <Reviews />
      <CostGuides />
      <TradesmenNearYou />
      <GetPriceCTA />
      <LatestArticles />
      <FindTradesPerson />
      <WhyUse />
      <FindTradesmanCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
