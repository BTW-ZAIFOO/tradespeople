import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CostGuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const indoorCategories = [
    {
      title: "Bathrooms",
      description: "Find out how much bathroom renovations, installations, and repairs cost",
      guides: ["Bathroom Installation Cost", "Shower Installation Cost", "Toilet Installation Cost", "Bathroom Tiling Cost"],
      image: "🛁",
      bgColor: "bg-blue-100"
    },
    {
      title: "Carpentry, Windows & Doors",
      description: "Discover the costs for carpentry work, window and door installations",
      guides: ["Window Installation Cost", "Door Hanging Cost", "Kitchen Cabinet Cost", "Fitted Wardrobes Cost"],
      image: "🚪",
      bgColor: "bg-green-100"
    },
    {
      title: "Conversions",
      description: "Learn about loft conversions, extensions, and other home conversions",
      guides: ["Loft Conversion Cost", "House Extension Cost", "Garage Conversion Cost", "Basement Conversion Cost"],
      image: "🏠",
      bgColor: "bg-purple-100"
    },
    {
      title: "Kitchens",
      description: "Get pricing information for kitchen renovations and installations",
      guides: ["Kitchen Installation Cost", "Kitchen Worktop Cost", "Kitchen Cabinet Cost", "Kitchen Appliances Cost"],
      image: "🍳",
      bgColor: "bg-orange-100"
    },
    {
      title: "Electrical & Lighting",
      description: "Find costs for electrical work, rewiring, and lighting installations",
      guides: ["House Rewiring Cost", "Light Installation Cost", "Electric Cooker Installation", "Consumer Unit Cost"],
      image: "💡",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Flooring & Carpets",
      description: "Discover flooring installation costs and carpet fitting prices",
      guides: ["Carpet Installation Cost", "Laminate Flooring Cost", "Hardwood Flooring Cost", "Vinyl Flooring Cost"],
      image: "🏠",
      bgColor: "bg-red-100"
    },
    {
      title: "Painting, Decorating & Plastering",
      description: "Learn about painting, decorating, and plastering costs",
      guides: ["House Painting Cost", "Wallpapering Cost", "Plastering Cost", "Exterior Painting Cost"],
      image: "🎨",
      bgColor: "bg-pink-100"
    },
    {
      title: "Plumbing & Heating",
      description: "Get pricing for plumbing work and heating system installations",
      guides: ["Boiler Installation Cost", "Central Heating Cost", "Radiator Installation", "Plumbing Repair Cost"],
      image: "🔧",
      bgColor: "bg-indigo-100"
    }
  ];

  const outdoorCategories = [
    {
      title: "Drainage",
      description: "Find costs for drainage work and related services",
      guides: ["Drain Unblocking Cost", "Drain Installation Cost", "Septic Tank Cost", "Drainage Survey Cost"],
      image: "🚰",
      bgColor: "bg-blue-100"
    },
    {
      title: "Driveways & Paving",
      description: "Learn about driveway and paving installation costs",
      guides: ["Driveway Installation Cost", "Block Paving Cost", "Tarmac Driveway Cost", "Concrete Driveway Cost"],
      image: "🛣️",
      bgColor: "bg-gray-100"
    },
    {
      title: "Fencing & Gates",
      description: "Discover fencing installation and gate fitting costs",
      guides: ["Fence Installation Cost", "Garden Gate Cost", "Panel Fencing Cost", "Electric Gate Cost"],
      image: "🚧",
      bgColor: "bg-green-100"
    },
    {
      title: "Gardening & Landscaping",
      description: "Get pricing for garden design and landscaping work",
      guides: ["Garden Design Cost", "Lawn Installation Cost", "Tree Removal Cost", "Hedge Trimming Cost"],
      image: "🌳",
      bgColor: "bg-green-200"
    },
    {
      title: "Roofing",
      description: "Find costs for roofing work, repairs, and installations",
      guides: ["Roof Replacement Cost", "Roof Repair Cost", "Guttering Cost", "Roof Insulation Cost"],
      image: "🏠",
      bgColor: "bg-red-100"
    },
    {
      title: "Building & Construction",
      description: "Learn about general building and construction costs",
      guides: ["House Building Cost", "Brick Wall Cost", "Foundation Cost", "Scaffolding Cost"],
      image: "🏗️",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Home Improvement Cost Guides</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We compare dozens of quotes nationwide to provide average prices for hundreds of home improvement jobs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Indoor Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Indoor categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indoorCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer">
                <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                  {category.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.guides.slice(0, 3).map((guide, guideIndex) => (
                    <a 
                      key={guideIndex}
                      href="#" 
                      className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {guide}
                    </a>
                  ))}
                  {category.guides.length > 3 && (
                    <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View all {category.title.toLowerCase()} guides →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outdoor Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Outdoor categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer">
                <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                  {category.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.guides.slice(0, 3).map((guide, guideIndex) => (
                    <a 
                      key={guideIndex}
                      href="#" 
                      className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {guide}
                    </a>
                  ))}
                  {category.guides.length > 3 && (
                    <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View all {category.title.toLowerCase()} guides →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Cost Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Cost Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Kitchen Installation Cost</h3>
                  <p className="text-gray-600 text-sm">£8,000 - £25,000</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Complete guide to kitchen installation costs including materials, labor, and additional expenses.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read full guide →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-xl">🛁</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Bathroom Installation Cost</h3>
                  <p className="text-gray-600 text-sm">£3,000 - £15,000</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive breakdown of bathroom renovation costs from budget to luxury installations.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read full guide →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Loft Conversion Cost</h3>
                  <p className="text-gray-600 text-sm">£15,000 - £60,000</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Everything you need to know about loft conversion costs including planning and materials.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read full guide →
              </a>
            </div>
          </div>
        </section>

       
      </div>

      <Footer />
    </div>
  );
};

export default CostGuidesPage;