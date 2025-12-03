import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/mytradelinks-logo.png";
import { useUser } from "../context/UserContext";
import { categoryList, categoriesData } from "../data/categoriesData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);
  const [showMobileButton, setShowMobileButton] = useState(false);
  const { currentUser } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrolledHeader(true);
        setShowMobileButton(true);
      } else {
        setShowScrolledHeader(false);
        setShowMobileButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50 shadow-sm">
      <div
        className={`hidden lg:flex max-w-6xl mx-auto items-center justify-between h-20 transition-transform duration-300 ${
          showScrolledHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="h-16 w-auto" />
        </Link>
        <nav className="flex items-center space-x-6 pl-14">
          <Link
            to="/how-it-works"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            How it works
          </Link>
          <Link
            to="/questions"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Ask a trade
          </Link>
          <Link
            to="/cost-guides"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Cost guides
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="text-gray-700 hover:text-primary transition font-medium flex items-center cursor-pointer"
            >
              Categories
              <svg
                className="h-3.5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-2xl border border-gray-200 py-8 px-6 z-50 w-screen max-w-6xl">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {Object.values(categoriesData).map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{category.icon}</span>
                          <Link
                            to={`/category/${category.slug}`}
                            className="font-bold text-blue-600 hover:text-blue-700 transition text-sm"
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </div>
                        <div className="space-y-1 pl-8">
                          {category.subcategories
                            ?.slice(0, 4)
                            .map((sub, subIndex) => (
                              <Link
                                key={subIndex}
                                to={`/category/${category.slug}`}
                                className="block text-gray-600 hover:text-blue-600 text-xs transition"
                                onClick={() => setIsCategoriesOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm mb-2">
                      Need something more specialist? Check out our full list of
                      trades.
                    </p>
                    <Link
                      to="/"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      See all trades →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center space-x-2 ">
          <Link
            to="/post-job"
            className="px-6 py-2 border-2 rounded-md font-medium transition"
            style={{ borderColor: "#40D4E8", color: "#40D4E8" }}
          >
            Post a Job
          </Link>
          <Link
            to="/trade-signup"
            className="px-6 py-2 border-2 rounded-md font-medium transition"
            style={{ borderColor: "#00A896", color: "#00A896" }}
          >
            Trade Signup
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition"
          >
            Login
          </Link>
        </div>
      </div>

      <div
        className={`hidden lg:flex fixed top-0 left-0 w-full text-black bg-white items-center justify-between px-52 py-3 shadow-md transition-transform duration-300 z-50 h-20 ${
          showScrolledHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-lg font-medium">
          Over 1 million homeowners and over 50,000 tradespeople <br /> use
          MyTradeLinks nationwide each year
        </p>
        <div className="flex items-center space-x-3">
          <Link
            to="/post-job"
            className="px-4 py-2 rounded-md font-medium bg-[#40D4E8] hover:text-white transition"
          >
            Post a Job
          </Link>
          <h3>or</h3>
          <Link
            to="/trade-signup"
            className="px-4 py-2 border border-black rounded-md font-medium hover:bg-white hover:text-[#40D4E8] transition"
          >
            Signup as a Trade
          </Link>
        </div>
      </div>

      <div className="lg:hidden bg-white shadow-sm sticky top-0 z-40">
        <div className="flex justify-between items-center h-16 px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-primary focus:outline-none p-3 border-r border-gray-300 cursor-pointer"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link to="/" className="pr-6">
            <img src={logoImage} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {isMenuOpen && (
          <div className="bg-white border-t px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/how-it-works"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded"
            >
              How it works
            </Link>
            <Link
              to="/questions"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded"
            >
              Ask a trade
            </Link>
            <Link
              to="/cost-guides"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded"
            >
              Cost guides
            </Link>

            <div className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full text-left flex justify-between items-center font-medium cursor-pointer"
              >
                Categories
                <svg
                  className="h-4 w-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isCategoriesOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>

              {isCategoriesOpen && (
                <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                  {Object.values(categoriesData).map((category, index) => (
                    <div key={index}>
                      <Link
                        to={`/category/${category.slug}`}
                        className="block px-2 py-1 text-sm font-bold text-blue-600 hover:text-blue-700"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {category.subcategories
                        ?.slice(0, 4)
                        .map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/category/${category.slug}`}
                            className="block px-4 py-1 text-xs text-gray-600 hover:text-blue-600"
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/post-job"
              className="block mt-2 px-3 py-2 text-white bg-[#40D4E8] rounded-md text-center font-medium"
            >
              Post a Job
            </Link>
            <Link
              to="/trade-signup"
              className="block mt-2 px-3 py-2 border border-black rounded-md text-center font-medium"
            >
              Signup as a Trade
            </Link>
            <Link
              to="/login"
              className="block mt-2 px-3 py-2 text-gray-700 hover:text-blue-600 text-center font-medium"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {showMobileButton && (
        <div className="lg:hidden fixed top-0 left-0 w-full px-4 py-3 bg-white shadow-md z-50 flex justify-center transition duration-300">
          <Link
            to="/post-job"
            className="w-full text-center py-3 bg-[#40D4E8] text-white font-medium rounded-md"
          >
            Post a Job
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
