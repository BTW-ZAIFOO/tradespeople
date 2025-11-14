import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/mytradelinks-logo.png';
import { useUser } from '../context/UserContext';
import { categoryList, categoriesData } from '../data/categoriesData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { currentUser, switchToTradesUser, switchToHomeownerUser } = useUser();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Logo" className="h-25 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition font-medium">How it works</Link>
            <Link to="/questions" className="text-gray-700 hover:text-primary transition font-medium">Ask a trade</Link>
            <Link to="/cost-guides" className="text-gray-700 hover:text-primary transition font-medium">Cost guides</Link>
            
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-gray-700 hover:text-primary transition font-medium flex items-center"
              >
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                            {category.subcategories && category.subcategories.slice(0, 4).map((subcategory, subIndex) => (
                              <Link
                                key={subIndex}
                                to={`/category/${category.slug}`}
                                className="block text-gray-600 hover:text-blue-600 text-xs transition"
                                onClick={() => setIsCategoriesOpen(false)}
                              >
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 text-sm mb-2">
                        Need something more specialist? Check out our full list of trades.
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

          {/* Desktop CTA Buttons + Login */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Post a Job Button - Light Cyan/Blue */}
            <Link
              to="/post-job"
              className="px-6 py-2 border-2 rounded-md font-medium transition"
              style={{ borderColor: '#40D4E8', color: '#40D4E8' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#40D4E8'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#40D4E8'; }}
            >
              Post a Job
            </Link>

            {/* Trade Signup Button - Dark Teal/Green */}
            <Link
              to="/trade-signup"
              className="px-6 py-2 border-2 rounded-md font-medium transition"
              style={{ borderColor: '#00A896', color: '#00A896' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#00A896'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#00A896'; }}
            >
              Trade Signup
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded">How it works</Link>
            <Link to="/questions" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded">Ask a trade</Link>
            <Link to="/cost-guides" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded">Cost guides</Link>
            
            {/* Mobile Categories */}
            <div>
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded flex items-center justify-between"
              >
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div className="pl-6 space-y-1">
                  {categoryList.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category.slug}`}
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded"
                      onClick={() => {
                        setIsCategoriesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Buttons + Login */}
            <div className="pt-4 space-y-2">
              {/* Post a Job - Cyan */}
              <Link
                to="/post-job"
                className="w-full px-6 py-2 border-2 rounded-md font-medium transition inline-block text-center"
                style={{ borderColor: '#40D4E8', color: '#40D4E8' }}
              >
                Post a Job
              </Link>

              {/* Trade Signup - Teal */}
              <Link
                to="/trade-signup"
                className="w-full px-6 py-2 border-2 rounded-md font-medium transition inline-block text-center"
                style={{ borderColor: '#00A896', color: '#00A896' }}
              >
                Trade Signup
              </Link>

              {/* Login */}
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
